import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  claim: vi.fn(),
  finish: vi.fn(),
  lead: vi.fn(),
  registration: vi.fn(),
}));

vi.mock("@/lib/adapters/submission-store", () => ({
  claimSubmission: mocks.claim,
  finishSubmission: mocks.finish,
}));
vi.mock("@/lib/adapters/form-delivery", () => ({
  deliverLeadSubmission: mocks.lead,
  deliverRegistrationSubmission: mocks.registration,
}));

import { dispatchSubmission } from "./submission-dispatch";

describe("durable notification dispatch", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.claim.mockResolvedValue({
      id: "submission-1",
      kind: "lead",
      payload: { name: "Ada" },
    });
    mocks.finish.mockResolvedValue(undefined);
    mocks.lead.mockResolvedValue(undefined);
  });

  it("marks a sent notification complete", async () => {
    expect(await dispatchSubmission("submission-1")).toBe("sent");
    expect(mocks.lead).toHaveBeenCalledOnce();
    expect(mocks.finish).toHaveBeenCalledWith("submission-1", true);
  });

  it("keeps a failed notification pending for retry", async () => {
    mocks.lead.mockRejectedValue(new Error("Provider unavailable"));
    const errorLog = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(await dispatchSubmission("submission-1")).toBe("pending");
    expect(mocks.finish).toHaveBeenCalledWith("submission-1", false);
    errorLog.mockRestore();
  });

  it("does not send when no row could be claimed", async () => {
    mocks.claim.mockResolvedValue(null);
    expect(await dispatchSubmission()).toBe("empty");
    expect(mocks.lead).not.toHaveBeenCalled();
  });
});
