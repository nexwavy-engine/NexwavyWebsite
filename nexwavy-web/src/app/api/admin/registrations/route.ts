import { NextResponse } from "next/server";
import { getDb } from "@/lib/adapters/db";
import { requireAdmin, filterFromParams } from "@/lib/require-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ message: "Forbidden" }, { status: 403 });

  const url = new URL(req.url);
  const filter = filterFromParams(url.searchParams);
  const db = getDb();
  const rows = await db.listRegistrations(filter);
  return NextResponse.json({ rows });
}
