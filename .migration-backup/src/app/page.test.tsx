import { describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import HomePage from "./page";

vi.mock("@/components/Section", () => ({
  Section: ({ children, className }: any) => <section className={className}>{children}</section>,
  SectionHeading: ({ title, eyebrow, intro }: any) => (
    <div>
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
    </div>
  ),
  CtaBand: () => <div>CTA Band</div>,
}));

describe("HomePage", () => {
  it("renders the hero section with the correct title", () => {
    const html = renderToStaticMarkup(<HomePage />);
    expect(html).toContain("We help growing businesses replace manual work with smarter digital systems.");
  });

  it("renders the execution loop section", () => {
    const html = renderToStaticMarkup(<HomePage />);
    expect(html).toContain("The Nexwavy Execution Loop");
  });

  it("renders a start a project link", () => {
    const html = renderToStaticMarkup(<HomePage />);
    expect(html).toContain('href="/contact"');
    expect(html).toContain("Start a Project");
  });
});
