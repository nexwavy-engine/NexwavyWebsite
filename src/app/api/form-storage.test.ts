import { afterEach, describe, expect, it, vi } from "vitest";
import { POST as submitLead } from "./leads/route";
import { POST as submitRegistration } from "./registrations/route";

describe("public forms without durable storage", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  function configureMailOnly() {
    vi.stubEnv("VERCEL_ENV", "production");
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.stubEnv("SUPABASE_URL", "");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "");
  }

  it("refuses to acknowledge a contact request it cannot save", async () => {
    configureMailOnly();
    const request = new Request("https://nexwavy.com/api/leads", {
      method: "POST",
      body: JSON.stringify({
        name: "Ada",
        phone: "+2348000000000",
        serviceInterest: "other",
        message: "Please contact our team.",
      }),
    });
    const response = await submitLead(request);
    expect(response.status).toBe(503);
  });

  it("refuses to acknowledge a registration it cannot save", async () => {
    configureMailOnly();
    const request = new Request("https://nexwavy.com/api/registrations", {
      method: "POST",
      body: JSON.stringify({
        fullName: "Ada",
        phone: "+2348000000000",
        courseId: "masterclass-foundations",
        message: "Please contact me.",
      }),
    });
    const response = await submitRegistration(request);
    expect(response.status).toBe(503);
  });
});
