import { describe, expect, it } from "vitest";
import { hasDurableStorage } from "./submission-store";

describe("durable form storage readiness", () => {
  it("does not treat a public Supabase key as durable server storage", () => {
    expect(
      hasDurableStorage({
        NODE_ENV: "test",
        SUPABASE_URL: "https://example.supabase.co",
        SUPABASE_ANON_KEY: "public",
      } as NodeJS.ProcessEnv),
    ).toBe(false);
  });

  it("requires both the project URL and service-role key", () => {
    expect(
      hasDurableStorage({
        NODE_ENV: "test",
        SUPABASE_URL: "https://example.supabase.co",
      } as NodeJS.ProcessEnv),
    ).toBe(false);
    expect(
      hasDurableStorage({
        NODE_ENV: "test",
        SUPABASE_SERVICE_ROLE_KEY: "secret",
      } as NodeJS.ProcessEnv),
    ).toBe(false);
    expect(
      hasDurableStorage({
        NODE_ENV: "test",
        SUPABASE_URL: "https://example.supabase.co",
        SUPABASE_SERVICE_ROLE_KEY: "secret",
      } as NodeJS.ProcessEnv),
    ).toBe(true);
  });
});
