import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";
import "@testing-library/jest-dom";

// Mock the components used in page.tsx that might cause issues in jsdom
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
    render(<HomePage />);
    expect(screen.getByText(/We help growing businesses replace manual work/i)).toBeInTheDocument();
  });

  it("renders the service focus areas", () => {
    render(<HomePage />);
    expect(screen.getByText(/Trusted Focus/i)).toBeInTheDocument();
  });

  it("renders a link to contact/discovery", () => {
    render(<HomePage />);
    const links = screen.getAllByRole("link");
    const hasContact = links.some(link => link.getAttribute("href") === "/contact");
    expect(hasContact).toBe(true);
  });
});
