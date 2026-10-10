import { afterEach, describe, expect, it, vi } from "vitest";
import { __resetEmail, getEmailSender } from "./email";

describe("Resend retries", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    __resetEmail();
  });

  it("uses the same idempotency key for a retried notification", async () => {
    const fetchMock = vi
      .fn()
      .mockImplementation(
        async () =>
          new Response(JSON.stringify({ id: "email-1" }), { status: 200 }),
      );
    vi.stubGlobal("fetch", fetchMock);
    const sender = getEmailSender({
      NODE_ENV: "test",
      RESEND_API_KEY: "re_test",
      EMAIL_FROM: "hello@nexwavy.com",
    } as NodeJS.ProcessEnv);

    await sender.send({
      to: "femi@nexwavy.com",
      subject: "Test",
      html: "<p>Test</p>",
      idempotencyKey: "form-team/one",
    });
    await sender.send({
      to: "femi@nexwavy.com",
      subject: "Test",
      html: "<p>Test</p>",
      idempotencyKey: "form-team/one",
    });

    expect(fetchMock).toHaveBeenCalledTimes(2);
    for (const [, options] of fetchMock.mock.calls) {
      expect(options.headers["Idempotency-Key"]).toBe("form-team/one");
    }
  });
});
