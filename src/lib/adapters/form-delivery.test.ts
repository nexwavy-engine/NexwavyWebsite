import { beforeEach, describe, expect, it } from "vitest";
import { __resetEmail, getEmailSender, type EmailMessage } from "./email";
import { canDeliverFormEmail, deliverLeadSubmission, deliverRegistrationSubmission } from "./form-delivery";

const env = {} as NodeJS.ProcessEnv;

function outbox() {
  return (getEmailSender(env) as ReturnType<typeof getEmailSender> & { outbox: EmailMessage[] }).outbox;
}

describe("form submission notifications", () => {
  beforeEach(() => __resetEmail());

  it("sends contact enquiries to both founders and copies hello", async () => {
    await deliverLeadSubmission({
      name: "Ada",
      email: "ada@example.com",
      serviceInterest: "automation",
      message: "We need a better workflow.",
    }, env);

    expect(outbox()).toHaveLength(1);
    expect(outbox()[0]).toMatchObject({
      to: ["femi@nexwavy.com", "Oloyede@nexwavy.com"],
      cc: "hello@nexwavy.com",
    });
  });

  it("sends training registrations to the same recipients", async () => {
    await deliverRegistrationSubmission({
      fullName: "Tobi",
      email: "tobi@example.com",
      courseTitle: "AI Training",
      message: "Please contact me.",
    }, env);

    expect(outbox()).toHaveLength(1);
    expect(outbox()[0]).toMatchObject({
      to: ["femi@nexwavy.com", "Oloyede@nexwavy.com"],
      cc: "hello@nexwavy.com",
    });
  });
});

describe("production delivery readiness", () => {
  it("rejects a production configuration without a real mail provider", () => {
    expect(canDeliverFormEmail({ NODE_ENV: "test", VERCEL_ENV: "production" } as NodeJS.ProcessEnv)).toBe(false);
    expect(canDeliverFormEmail({ NODE_ENV: "production" } as NodeJS.ProcessEnv)).toBe(false);
  });

  it("accepts production when Resend is configured", () => {
    expect(canDeliverFormEmail({ NODE_ENV: "test", VERCEL_ENV: "production", RESEND_API_KEY: "test-key" } as NodeJS.ProcessEnv)).toBe(true);
  });
});
