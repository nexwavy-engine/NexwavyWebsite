import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { isAdmin } from "@/lib/admin";
import type { RegistrationFilter } from "@/lib/adapters/db";

// Server-side admin gate (PRD: enforced server-side via approved-email allowlist).
// Returns the admin email on success, or null to deny.
export async function requireAdmin(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (email && isAdmin(email)) return email;
  return null;
}

// Build a RegistrationFilter from URL search params (shared by list + export).
export function filterFromParams(params: URLSearchParams): RegistrationFilter {
  const get = (k: string) => {
    const v = params.get(k);
    return v && v.trim() ? v.trim() : undefined;
  };
  return {
    registrationStatus: get("registrationStatus"),
    paymentStatus: get("paymentStatus"),
    courseId: get("courseId"),
    cohortId: get("cohortId"),
    search: get("search"),
    from: get("from"),
    to: get("to"),
  };
}
