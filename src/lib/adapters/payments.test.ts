import { describe, it, expect } from "vitest";
import { getPaymentLink } from "./payments";

describe("getPaymentLink", () => {
  it("prefers a per-course link", () => {
    const env = {
      PAYMENT_LINK_MASTERCLASS_FOUNDATIONS: "https://paystack.com/pay/foundations",
      PAYMENT_LINK_DEFAULT: "https://paystack.com/pay/default",
    } as unknown as NodeJS.ProcessEnv;
    const link = getPaymentLink("masterclass-foundations", env);
    expect(link.url).toBe("https://paystack.com/pay/foundations");
    expect(link.configured).toBe(true);
  });

  it("falls back to the default link", () => {
    const env = { PAYMENT_LINK_DEFAULT: "https://paystack.com/pay/default" } as unknown as NodeJS.ProcessEnv;
    const link = getPaymentLink("masterclass-team", env);
    expect(link.url).toBe("https://paystack.com/pay/default");
    expect(link.configured).toBe(true);
  });

  it("returns a placeholder flagged as unconfigured when nothing is set", () => {
    const link = getPaymentLink("masterclass-team", {} as NodeJS.ProcessEnv);
    expect(link.configured).toBe(false);
    expect(link.url).toContain("placeholder");
  });
});
