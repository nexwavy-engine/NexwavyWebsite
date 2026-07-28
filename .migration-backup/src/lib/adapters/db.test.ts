import { describe, it, expect, beforeEach } from "vitest";
import { MemoryDb, applyRegistrationFilter, getDb, __resetDb } from "./db";
import type { Registration } from "@/lib/types";

describe("MemoryDb leads & registrations", () => {
  let db: MemoryDb;
  beforeEach(() => {
    db = new MemoryDb();
  });

  it("creates a lead with id + timestamp and lists it", async () => {
    const lead = await db.createLead({
      name: "Ada",
      email: "ada@x.com",
      serviceInterest: "ai-training",
    });
    expect(lead.id).toBeTruthy();
    expect(lead.createdAt).toBeTruthy();
    expect(await db.listLeads()).toHaveLength(1);
  });

  it("defaults registration statuses to pending", async () => {
    const reg = await db.createRegistration({
      learnerId: null,
      fullName: "Tobi",
      email: "tobi@x.com",
      courseId: "masterclass-foundations",
      preferredFormat: "online",
    } as any);
    expect(reg.registrationStatus).toBe("pending");
    expect(reg.paymentStatus).toBe("pending");
  });

  it("updates a registration's payment status and reference", async () => {
    const reg = await db.createRegistration({
      learnerId: null,
      fullName: "Tobi",
      email: "tobi@x.com",
      courseId: "masterclass-foundations",
      preferredFormat: "online",
    } as any);
    const updated = await db.updateRegistration(reg.id, {
      paymentStatus: "paid",
      transactionReference: "PSK_123",
    });
    expect(updated?.paymentStatus).toBe("paid");
    expect(updated?.transactionReference).toBe("PSK_123");
  });

  it("returns null when updating a missing registration", async () => {
    expect(await db.updateRegistration("nope", { paymentStatus: "paid" })).toBeNull();
  });

  it("finds registrations by email case-insensitively", async () => {
    await db.createRegistration({
      learnerId: null,
      fullName: "Tobi",
      email: "Tobi@X.com",
      courseId: "c1",
      preferredFormat: "online",
    } as any);
    expect(await db.listRegistrationsForEmail("tobi@x.com")).toHaveLength(1);
  });

  it("upserts a learner by authUserId (no duplicates)", async () => {
    await db.upsertLearner({ authUserId: "u1", fullName: "Ada", email: "ada@x.com" });
    await db.upsertLearner({ authUserId: "u1", fullName: "Ada L", email: "ada@x.com" });
    const l = await db.getLearnerByAuthId("u1");
    expect(l?.fullName).toBe("Ada L");
  });

  it("seeds courses and cohorts", async () => {
    expect((await db.listCourses()).length).toBeGreaterThan(0);
    expect((await db.listCohorts("masterclass-foundations")).length).toBeGreaterThan(0);
  });
});

describe("applyRegistrationFilter", () => {
  const rows: Registration[] = [
    {
      id: "1", learnerId: null, fullName: "Ada Pioneer", email: "ada@x.com", organization: "Acme",
      courseId: "c1", preferredFormat: "online", registrationStatus: "pending", paymentStatus: "pending",
      createdAt: "2026-06-01T10:00:00.000Z",
    },
    {
      id: "2", learnerId: null, fullName: "Tobi Builder", email: "tobi@y.com", organization: "Globex",
      courseId: "c2", preferredFormat: "hybrid", registrationStatus: "confirmed", paymentStatus: "paid",
      createdAt: "2026-06-10T10:00:00.000Z",
    },
  ];

  it("filters by payment status", () => {
    expect(applyRegistrationFilter(rows, { paymentStatus: "paid" }).map((r) => r.id)).toEqual(["2"]);
  });
  it("filters by course", () => {
    expect(applyRegistrationFilter(rows, { courseId: "c1" }).map((r) => r.id)).toEqual(["1"]);
  });
  it("filters by date range", () => {
    expect(
      applyRegistrationFilter(rows, { from: "2026-06-05", to: "2026-06-30" }).map((r) => r.id),
    ).toEqual(["2"]);
  });
  it("searches name/email/organization", () => {
    expect(applyRegistrationFilter(rows, { search: "globex" }).map((r) => r.id)).toEqual(["2"]);
    expect(applyRegistrationFilter(rows, { search: "ada@x" }).map((r) => r.id)).toEqual(["1"]);
  });
});

describe("getDb factory", () => {
  it("returns the in-memory store when no Supabase env is set", () => {
    __resetDb();
    const db = getDb({} as NodeJS.ProcessEnv);
    expect(db).toBeInstanceOf(MemoryDb);
    __resetDb();
  });
});
