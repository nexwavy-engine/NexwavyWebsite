import { NextResponse } from "next/server";
import { getDb } from "@/lib/adapters/db";
import { requireAdmin } from "@/lib/require-admin";

export const runtime = "nodejs";

const REGISTRATION_STATUSES = ["pending", "confirmed", "waitlisted", "cancelled"];
const PAYMENT_STATUSES = ["pending", "paid", "refunded", "failed"];

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ message: "Forbidden" }, { status: 403 });

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const patch: Record<string, unknown> = {};
  if (body.registrationStatus !== undefined) {
    if (!REGISTRATION_STATUSES.includes(body.registrationStatus)) {
      return NextResponse.json({ message: "Invalid registration status." }, { status: 422 });
    }
    patch.registrationStatus = body.registrationStatus;
  }
  if (body.paymentStatus !== undefined) {
    if (!PAYMENT_STATUSES.includes(body.paymentStatus)) {
      return NextResponse.json({ message: "Invalid payment status." }, { status: 422 });
    }
    patch.paymentStatus = body.paymentStatus;
  }
  if (body.transactionReference !== undefined) patch.transactionReference = String(body.transactionReference);
  if (body.cohortId !== undefined) patch.cohortId = body.cohortId || undefined;

  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ message: "Nothing to update." }, { status: 422 });
  }

  const db = getDb();
  const updated = await db.updateRegistration(params.id, patch);
  if (!updated) return NextResponse.json({ message: "Registration not found." }, { status: 404 });
  return NextResponse.json({ row: updated });
}
