import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { parseRegistration } from "@/lib/validation";
import { getDb } from "@/lib/adapters/db";
import { canDeliverFormEmail } from "@/lib/adapters/form-delivery";
import { getEmailSender, registrationConfirmationEmail } from "@/lib/adapters/email";
import { findCohort, findCourse, formatCohortLabel } from "@/lib/data/catalog";
import { hasDurableStorage, saveSubmission } from "@/lib/adapters/submission-store";
import { dispatchSubmission } from "@/lib/submission-dispatch";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = parseRegistration(body);
  if (!parsed.ok || !parsed.data) {
    return NextResponse.json({ errors: parsed.errors }, { status: 422 });
  }

  const course = findCourse(parsed.data.courseId);
  if (!course) {
    return NextResponse.json({ errors: { courseId: "Unknown course." } }, { status: 422 });
  }

  if (!canDeliverFormEmail() || !hasDurableStorage()) {
    console.error("[registrations] form delivery or durable storage is not configured");
    return NextResponse.json(
      { message: "Online registration is temporarily unavailable. Please email hello@nexwavy.com or contact us on WhatsApp." },
      { status: 503 },
    );
  }
  const cohort = parsed.data.cohortId ? findCohort(parsed.data.cohortId) : undefined;

  let submission;
  try {
    submission = await saveSubmission("registration", {
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      organization: parsed.data.organization,
      roleTitle: parsed.data.roleTitle,
      courseId: course.id,
      courseTitle: course.title,
      cohortId: parsed.data.cohortId,
      cohortLabel: cohort ? formatCohortLabel(cohort) : undefined,
      preferredFormat: cohort?.deliveryFormat ?? "online",
      participantCount: parsed.data.participantCount,
      message: parsed.data.message,
    });
  } catch (error) {
    console.error("[registrations] durable save failed", error);
    return NextResponse.json({ message: "Could not save your registration. Please try again." }, { status: 503 });
  }

  try {
    const db = getDb();

    // Link to a learner account when the registrant is signed in.
    let learnerId: string | null = null;
    const session = process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? await getServerSession(authOptions)
      : null;
    const authUserId = (session?.user as { id?: string } | undefined)?.id;
    if (authUserId) {
      const learner = await db.upsertLearner({
        authUserId,
        fullName: parsed.data.fullName,
        email: parsed.data.email ?? "",
        phone: parsed.data.phone,
        organization: parsed.data.organization,
      });
      learnerId = learner.id;
    }

    await db.createRegistration({
      learnerId,
      fullName: parsed.data.fullName,
      email: parsed.data.email ?? "",
      phone: parsed.data.phone,
      organization: parsed.data.organization,
      courseId: course.id,
      cohortId: parsed.data.cohortId,
      preferredFormat: cohort?.deliveryFormat ?? "online",
    });
  } catch (error) {
    console.error("[registrations] admin record projection failed", { id: submission.id, error });
  }

  let delivery: "sent" | "pending" | "empty" = "pending";
  try {
    delivery = await dispatchSubmission(submission.id);
  } catch (error) {
    console.error("[registrations] dispatch failed; submission is saved for retry", { id: submission.id, error });
  }

  if (delivery === "sent" && parsed.data.email) {
    try {
      const msg = registrationConfirmationEmail(parsed.data.fullName, course.title);
      await getEmailSender().send({
        ...msg,
        to: parsed.data.email,
        idempotencyKey: `form-confirmation/${submission.id}`,
      });
    } catch (error) {
      console.error("[registrations] confirmation email failed", { id: submission.id, error });
    }
  }

  return NextResponse.json(
    { ok: true, id: submission.id, courseTitle: course.title, deliveryStatus: delivery === "sent" ? "sent" : "pending" },
    { status: delivery === "sent" ? 201 : 202 },
  );
}
