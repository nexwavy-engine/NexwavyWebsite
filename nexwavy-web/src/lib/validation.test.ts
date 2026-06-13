import { describe, it, expect } from "vitest";
import { parseLead, parseRegistration } from "./validation";

describe("parseLead", () => {
  it("accepts a valid lead and normalizes email", () => {
    const r = parseLead({
      name: "Ada Lovelace",
      email: "ADA@Example.com",
      serviceInterest: "ai-training",
      message: "Interested in the masterclass",
    });
    expect(r.ok).toBe(true);
    expect(r.data?.email).toBe("ada@example.com");
  });

  it("rejects a missing name and a bad email", () => {
    const r = parseLead({ name: "", email: "nope", serviceInterest: "ai-training" });
    expect(r.ok).toBe(false);
    expect(r.errors?.name).toBeTruthy();
    expect(r.errors?.email).toBeTruthy();
  });

  it("rejects an unknown service interest", () => {
    const r = parseLead({ name: "Sam", email: "sam@x.com", serviceInterest: "rockets" });
    expect(r.ok).toBe(false);
    expect(r.errors?.serviceInterest).toBeTruthy();
  });

  it("treats empty optional strings as undefined", () => {
    const r = parseLead({
      name: "Sam",
      email: "sam@x.com",
      serviceInterest: "it-consulting",
      organization: "",
      phone: "",
    });
    expect(r.ok).toBe(true);
    expect(r.data?.organization).toBeUndefined();
    expect(r.data?.phone).toBeUndefined();
  });
});

describe("parseRegistration", () => {
  it("accepts a valid registration", () => {
    const r = parseRegistration({
      fullName: "Tobi A",
      email: "tobi@x.com",
      phone: "+234 801 234 5678",
      courseId: "masterclass-foundations",
      preferredFormat: "online",
    });
    expect(r.ok).toBe(true);
    expect(r.data?.preferredFormat).toBe("online");
  });

  it("requires phone and a course", () => {
    const r = parseRegistration({
      fullName: "Tobi",
      email: "tobi@x.com",
      preferredFormat: "online",
    });
    expect(r.ok).toBe(false);
    expect(r.errors?.phone).toBeTruthy();
    expect(r.errors?.courseId).toBeTruthy();
  });

  it("rejects an invalid delivery format", () => {
    const r = parseRegistration({
      fullName: "Tobi",
      email: "tobi@x.com",
      phone: "08012345678",
      courseId: "c1",
      preferredFormat: "telepathy",
    });
    expect(r.ok).toBe(false);
    expect(r.errors?.preferredFormat).toBeTruthy();
  });
});
