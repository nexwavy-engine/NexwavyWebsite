// Server-side admin allowlist (PRD: admin enforced server-side via approved-email allowlist).
// The allowlist lives in an env var; never trust a client-supplied role.

export function parseAllowlist(raw: string | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(/[,\s;]+/)
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | null | undefined, allowlist: string[]): boolean {
  if (!email) return false;
  return allowlist.includes(email.trim().toLowerCase());
}

/** Reads ADMIN_EMAILS from the environment and checks membership. */
export function isAdmin(email: string | null | undefined, env: NodeJS.ProcessEnv = process.env): boolean {
  return isAdminEmail(email, parseAllowlist(env.ADMIN_EMAILS));
}
