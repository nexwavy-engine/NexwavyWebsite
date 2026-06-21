import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { parseRegistration } from "@/lib/validation";
import { getDb } from "@/lib/adapters/db";
import { getPaymentLink } from "@/lib/adapters/payments";
import { getEmailSender, registrationConfirmationEmail } from "@/lib/adapters/email";
import { findCourse } from "@/lib/data/catalog";

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

  try {
    const db = getDb();

    // Link to a learner account when the registrant is signed in.
    let learnerId: string | null = null;
    const session = await getServerSession(authOptions);
    const authUserId = (session?.user as { id?: string } | undefined)?.id;
    if (authUserId) {
      const learner = await db.upsertLearner({
        authUserId,
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        organization: parsed.data.organization,
      });
      learnerId = learner.id;
    }

    const registration = await db.createRegistration({
      learnerId,
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      organization: parsed.data.organization,
      courseId: course.id,
      cohortId: parsed.data.cohortId,
      preferredFormat: parsed.data.preferredFormat,
    });

    const payment = getPaymentLink(course.id);

    // Confirmation email with the payment link (mocked when no RESEND_API_KEY).
    let emailMocked = true;
    try {
      const sender = getEmailSender();
      const msg = registrationConfirmationEmail(registration.fullName, course.title, payment.url);
      const res = await sender.send({ ...msg, to: registration.email });
      emailMocked = res.mocked;
    } catch (e) {
      console.error("[registrations] confirmation email failed", e);
    }

    return NextResponse.json(
      {
        ok: true,
        id: registration.id,
        courseTitle: course.title,
        paymentUrl: payment.url,
        paymentConfigured: payment.configured,
        emailMocked,
      },
      { status: 201 },
    );
  } catch (e) {
    console.error("[registrations] create failed", e);
    return NextResponse.json({ message: "Could not complete your registration. Please try again." }, { status: 500 });
  }
}
