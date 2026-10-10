import { NextResponse } from "next/server";
import { parseLead } from "@/lib/validation";
import { getDb } from "@/lib/adapters/db";
import { getEmailSender, leadConfirmationEmail } from "@/lib/adapters/email";
import { canDeliverFormEmail } from "@/lib/adapters/form-delivery";
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

  const parsed = parseLead(body);
  if (!parsed.ok || !parsed.data) {
    return NextResponse.json({ errors: parsed.errors }, { status: 422 });
  }

  if (!canDeliverFormEmail() || !hasDurableStorage()) {
    console.error("[leads] form delivery or durable storage is not configured");
    return NextResponse.json(
      { message: "Online submissions are temporarily unavailable. Please email hello@nexwavy.com or contact us on WhatsApp." },
      { status: 503 },
    );
  }

  const input = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    organization: parsed.data.organization,
    preferredContactMethod: parsed.data.preferredContactMethod,
    serviceInterest: parsed.data.serviceInterest,
    message: parsed.data.message,
    source: parsed.data.source,
  };

  let submission;
  try {
    submission = await saveSubmission("lead", input);
  } catch (error) {
    console.error("[leads] durable save failed", error);
    return NextResponse.json({ message: "Could not save your message. Please try again." }, { status: 503 });
  }

  try {
    await getDb().createLead({
      name: parsed.data.name,
      email: parsed.data.email ?? "",
      phone: parsed.data.phone,
      organization: parsed.data.organization,
      serviceInterest: parsed.data.serviceInterest,
      message: parsed.data.message,
      source: parsed.data.source,
    });
  } catch (error) {
    console.error("[leads] admin record projection failed", { id: submission.id, error });
  }

  let delivery: "sent" | "pending" | "empty" = "pending";
  try {
    delivery = await dispatchSubmission(submission.id);
  } catch (error) {
    console.error("[leads] dispatch failed; submission is saved for retry", { id: submission.id, error });
  }

  if (delivery === "sent" && parsed.data.email) {
    try {
      const sender = getEmailSender();
      const msg = leadConfirmationEmail(parsed.data.name);
      await sender.send({ ...msg, to: parsed.data.email, idempotencyKey: `form-confirmation/${submission.id}` });
    } catch (error) {
      console.error("[leads] confirmation email failed", { id: submission.id, error });
    }
  }

  return NextResponse.json(
    { ok: true, id: submission.id, deliveryStatus: delivery === "sent" ? "sent" : "pending" },
    { status: delivery === "sent" ? 201 : 202 },
  );
}
