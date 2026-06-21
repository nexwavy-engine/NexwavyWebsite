import { NextResponse } from "next/server";
import { parseLead } from "@/lib/validation";
import { getDb } from "@/lib/adapters/db";
import { getEmailSender, leadConfirmationEmail } from "@/lib/adapters/email";

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

  try {
    const db = getDb();
    const lead = await db.createLead({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      organization: parsed.data.organization,
      serviceInterest: parsed.data.serviceInterest,
      message: parsed.data.message,
      source: parsed.data.source,
    });

    // Fire confirmation email (mocked when no RESEND_API_KEY). Never block on it.
    try {
      const sender = getEmailSender();
      const msg = leadConfirmationEmail(lead.name);
      await sender.send({ ...msg, to: lead.email });
    } catch (e) {
      console.error("[leads] confirmation email failed", e);
    }

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (e) {
    console.error("[leads] create failed", e);
    return NextResponse.json({ message: "Could not save your message. Please try again." }, { status: 500 });
  }
}
