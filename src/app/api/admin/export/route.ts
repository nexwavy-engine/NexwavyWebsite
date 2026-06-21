import { getDb } from "@/lib/adapters/db";
import { toCsv, type CsvColumn } from "@/lib/csv";
import { requireAdmin, filterFromParams } from "@/lib/require-admin";
import { findCourse } from "@/lib/data/catalog";
import type { Registration } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLUMNS: CsvColumn<Registration>[] = [
  { header: "Registration ID", value: (r) => r.id },
  { header: "Created", value: (r) => r.createdAt },
  { header: "Full name", value: (r) => r.fullName },
  { header: "Email", value: (r) => r.email },
  { header: "Phone", value: (r) => r.phone ?? "" },
  { header: "Organization", value: (r) => r.organization ?? "" },
  { header: "Course", value: (r) => findCourse(r.courseId)?.title ?? r.courseId },
  { header: "Cohort", value: (r) => r.cohortId ?? "" },
  { header: "Preferred format", value: (r) => r.preferredFormat },
  { header: "Registration status", value: (r) => r.registrationStatus },
  { header: "Payment status", value: (r) => r.paymentStatus },
  { header: "Transaction ref", value: (r) => r.transactionReference ?? "" },
];

export async function GET(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return new Response("Forbidden", { status: 403 });

  const url = new URL(req.url);
  const filter = filterFromParams(url.searchParams);
  const db = getDb();
  const rows = await db.listRegistrations(filter);
  const csv = toCsv(rows, COLUMNS);

  const stamp = new Date().toISOString().slice(0, 10);
  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="nexwavy-registrations-${stamp}.csv"`,
    },
  });
}
