import { describe, it, expect } from "vitest";
import { parseAllowlist, isAdminEmail, isAdmin } from "./admin";

describe("parseAllowlist", () => {
  it("splits on commas, spaces, semicolons and lowercases", () => {
    expect(parseAllowlist("A@x.com, b@x.com; c@x.com d@x.com")).toEqual([
      "a@x.com",
      "b@x.com",
      "c@x.com",
      "d@x.com",
    ]);
  });
  it("returns [] for empty/undefined", () => {
    expect(parseAllowlist(undefined)).toEqual([]);
    expect(parseAllowlist("")).toEqual([]);
  });
});

describe("isAdminEmail", () => {
  const allow = ["founder@nexwavy.com", "ops@nexwavy.com"];
  it("matches case-insensitively", () => {
    expect(isAdminEmail("Founder@Nexwavy.com", allow)).toBe(true);
  });
  it("rejects non-members and empty input", () => {
    expect(isAdminEmail("stranger@x.com", allow)).toBe(false);
    expect(isAdminEmail(null, allow)).toBe(false);
    expect(isAdminEmail(undefined, allow)).toBe(false);
  });
});

describe("isAdmin (env-driven)", () => {
  it("reads ADMIN_EMAILS from the provided env", () => {
    const env = { ADMIN_EMAILS: "founder@nexwavy.com" } as unknown as NodeJS.ProcessEnv;
    expect(isAdmin("founder@nexwavy.com", env)).toBe(true);
    expect(isAdmin("nope@x.com", env)).toBe(false);
  });
});
