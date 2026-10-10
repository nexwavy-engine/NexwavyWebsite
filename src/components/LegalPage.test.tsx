import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import PrivacyPage from "@/app/privacy/page";
import TermsPage from "@/app/terms/page";
import RefundsPage from "@/app/refunds/page";

describe("legal pages", () => {
  it.each([
    ["privacy", <PrivacyPage />],
    ["terms", <TermsPage />],
    ["refunds", <RefundsPage />],
  ])("keeps every %s contents link aligned with a section", (_name, page) => {
    const html = renderToStaticMarkup(page);
    const targets = [...html.matchAll(/href="#([a-z0-9-]+)"/g)].map((match) => match[1]);

    expect(targets.length).toBeGreaterThan(0);
    for (const target of targets) {
      expect(html).toContain(`id="${target}"`);
    }
    expect(html).toContain("Effective 2 July 2026");
  });
});
