import {
  claimSubmission,
  finishSubmission,
  type StoredSubmission,
} from "@/lib/adapters/submission-store";
import {
  deliverLeadSubmission,
  deliverRegistrationSubmission,
  type LeadNotificationInput,
  type RegistrationNotificationInput,
} from "@/lib/adapters/form-delivery";

export async function dispatchSubmission(
  id?: string,
): Promise<"sent" | "pending" | "empty"> {
  const submission = await claimSubmission(id);
  if (!submission) return "empty";

  try {
    await sendNotification(submission);
    await finishSubmission(submission.id, true);
    return "sent";
  } catch (error) {
    console.error("[forms] notification delivery failed", {
      id: submission.id,
      error,
    });
    await finishSubmission(submission.id, false);
    return "pending";
  }
}

async function sendNotification(submission: StoredSubmission): Promise<void> {
  if (submission.kind === "lead") {
    await deliverLeadSubmission(
      submission.payload as unknown as LeadNotificationInput,
      process.env,
      submission.id,
    );
  } else {
    await deliverRegistrationSubmission(
      submission.payload as unknown as RegistrationNotificationInput,
      process.env,
      submission.id,
    );
  }
}
