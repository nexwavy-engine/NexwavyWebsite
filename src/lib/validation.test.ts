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
    const r = parseLead({ name: "", email: "nope", serviceInterest: "ai-training", message: "hello there" });
    expect(r.ok).toBe(false);
    expect(r.errors?.name).toBeTruthy();
    expect(r.errors?.email).toBeTruthy();
  });

  it("rejects an unknown service interest", () => {
    const r = parseLead({ name: "Sam", email: "sam@x.com", serviceInterest: "rockets", message: "hello there" });
    expect(r.ok).toBe(false);
    expect(r.errors?.serviceInterest).toBeTruthy();
  });

  it("treats empty optional strings as undefined", () => {
    const r = parseLead({
      name: "Sam",
      email: "sam@x.com",
      serviceInterest: "it-advisory",
      organization: "",
      phone: "",
      message: "Need to review our workflow",
    });
    expect(r.ok).toBe(true);
    expect(r.data?.organization).toBeUndefined();
    expect(r.data?.phone).toBeUndefined();
  });

  it("requires either email or phone", () => {
    const r = parseLead({
      name: "Sam",
      serviceInterest: "ai-training",
      message: "Need help with a training enquiry",
      email: "",
      phone: "",
    });
    expect(r.ok).toBe(false);
    expect(r.errors?.email).toBeTruthy();
  });
});

describe("parseRegistration", () => {
  it("accepts a valid registration", () => {
    const r = parseRegistration({
      fullName: "Tobi A",
      email: "tobi@x.com",
      phone: "+234 801 234 5678",
      courseId: "masterclass-foundations",
      message: "Interested in joining this cohort",
    });
    expect(r.ok).toBe(true);
    expect(r.data?.courseId).toBe("masterclass-foundations");
  });

  it("requires a course and training interest", () => {
    const r = parseRegistration({
      fullName: "Tobi",
      email: "tobi@x.com",
      message: "",
    });
    expect(r.ok).toBe(false);
    expect(r.errors?.courseId).toBeTruthy();
    expect(r.errors?.message).toBeTruthy();
  });

  it("requires either email or phone", () => {
    const r = parseRegistration({
      fullName: "Tobi",
      email: "",
      phone: "",
      courseId: "c1",
      message: "Register me please",
    });
    expect(r.ok).toBe(false);
    expect(r.errors?.email).toBeTruthy();
  });
});
