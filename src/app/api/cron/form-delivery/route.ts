import { NextResponse } from "next/server";
import { dispatchSubmission } from "@/lib/submission-dispatch";
import { hasDurableStorage } from "@/lib/adapters/submission-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  if (!hasDurableStorage()) {
    return NextResponse.json(
      { message: "Storage unavailable" },
      { status: 503 },
    );
  }

  let sent = 0;
  let pending = 0;
  for (let i = 0; i < 25; i += 1) {
    const result = await dispatchSubmission();
    if (result === "empty") break;
    if (result === "sent") sent += 1;
    if (result === "pending") pending += 1;
  }
  return NextResponse.json({ sent, pending });
}
