import { describe, it, expect } from "vitest";
import { toCsv } from "./csv";

describe("toCsv", () => {
  const cols = [
    { header: "Name", value: (r: any) => r.name },
    { header: "Email", value: (r: any) => r.email },
    { header: "Amount", value: (r: any) => r.amount },
  ];

  it("writes a header even with no rows", () => {
    expect(toCsv([], cols)).toBe("Name,Email,Amount");
  });

  it("serializes simple rows with CRLF line endings", () => {
    const out = toCsv([{ name: "Ada", email: "ada@x.com", amount: 50000 }], cols);
    expect(out).toBe("Name,Email,Amount\r\nAda,ada@x.com,50000");
  });

  it("quotes cells containing commas, quotes, and newlines", () => {
    const out = toCsv(
      [{ name: 'Ada, "the" pioneer', email: "ada@x.com", amount: "line1\nline2" }],
      cols,
    );
    expect(out).toBe('Name,Email,Amount\r\n"Ada, ""the"" pioneer",ada@x.com,"line1\nline2"');
  });

  it("renders null/undefined as empty cells", () => {
    const out = toCsv([{ name: null, email: undefined, amount: 0 }], cols);
    expect(out).toBe("Name,Email,Amount\r\n,,0");
  });
});
