import { getEmailSender } from "@/lib/adapters/email";
import { SITE } from "@/lib/content/site";

type DeliveryStatus = { emailDelivered: boolean; sheetsDelivered: boolean };

interface LeadNotificationInput {
  name: string;
  email?: string;
  phone?: string;
  organization?: string;
  preferredContactMethod?: string;
  serviceInterest: string;
  message: string;
  source?: string;
}

interface RegistrationNotificationInput {
  fullName: string;
  email?: string;
  phone?: string;
  organization?: string;
  roleTitle?: string;
  courseTitle: string;
  cohortLabel?: string;
  participantCount?: string;
  message: string;
}

function envWebhook(env: NodeJS.ProcessEnv = process.env) {
  return env.GOOGLE_SHEETS_WEBHOOK_URL || env.FORMS_WEBHOOK_URL;
}

async function postToSheets(payload: Record<string, unknown>, env: NodeJS.ProcessEnv = process.env) {
  const webhook = envWebhook(env);
  if (!webhook) return false;

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets webhook failed with ${response.status}`);
  }

  return true;
}

function textLine(label: string, value?: string) {
  return `${label}: ${value || "Not provided"}`;
}

export async function deliverLeadSubmission(
  input: LeadNotificationInput,
  env: NodeJS.ProcessEnv = process.env,
): Promise<DeliveryStatus> {
  const sender = getEmailSender(env);
  await sender.send({
    to: SITE.email,
    subject: `New contact enquiry: ${input.name}`,
    text: [
      textLine("Name", input.name),
      textLine("Email", input.email),
      textLine("Phone", input.phone),
      textLine("Organization", input.organization),
      textLine("Preferred contact method", input.preferredContactMethod),
      textLine("Service interest", input.serviceInterest),
      textLine("Source", input.source),
      "",
      input.message,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email || "Not provided")}</p>
      <p><strong>Phone:</strong> ${escapeHtml(input.phone || "Not provided")}</p>
      <p><strong>Organization:</strong> ${escapeHtml(input.organization || "Not provided")}</p>
      <p><strong>Preferred contact method:</strong> ${escapeHtml(input.preferredContactMethod || "Not provided")}</p>
      <p><strong>Service interest:</strong> ${escapeHtml(input.serviceInterest)}</p>
      <p><strong>Source:</strong> ${escapeHtml(input.source || "Not provided")}</p>
      <hr />
      <p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  const privacyRequest = /privacy|data request|data deletion|ndpa|ndpr/i.test(input.message);
  if (privacyRequest) {
    await sender.send({
      to: SITE.privacyEmail,
      subject: `Privacy-related enquiry: ${input.name}`,
      text: input.message,
      html: `<p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>`,
    });
  }

  const sheetsDelivered = await postToSheets(
    {
      type: "lead",
      submittedAt: new Date().toISOString(),
      ...input,
    },
    env,
  ).catch((error) => {
    console.error("[forms] lead sheets delivery failed", error);
    return false;
  });

  return { emailDelivered: true, sheetsDelivered };
}

export async function deliverRegistrationSubmission(
  input: RegistrationNotificationInput,
  env: NodeJS.ProcessEnv = process.env,
): Promise<DeliveryStatus> {
  const sender = getEmailSender(env);
  await sender.send({
    to: SITE.email,
    subject: `New training registration: ${input.fullName}`,
    text: [
      textLine("Full name", input.fullName),
      textLine("Email", input.email),
      textLine("Phone", input.phone),
      textLine("Organization", input.organization),
      textLine("Role / job title", input.roleTitle),
      textLine("Training track", input.courseTitle),
      textLine("Preferred cohort", input.cohortLabel),
      textLine("Number of participants", input.participantCount),
      "",
      input.message,
    ].join("\n"),
    html: `
      <p><strong>Full name:</strong> ${escapeHtml(input.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email || "Not provided")}</p>
      <p><strong>Phone:</strong> ${escapeHtml(input.phone || "Not provided")}</p>
      <p><strong>Organization:</strong> ${escapeHtml(input.organization || "Not provided")}</p>
      <p><strong>Role / job title:</strong> ${escapeHtml(input.roleTitle || "Not provided")}</p>
      <p><strong>Training track:</strong> ${escapeHtml(input.courseTitle)}</p>
      <p><strong>Preferred cohort:</strong> ${escapeHtml(input.cohortLabel || "No preference")}</p>
      <p><strong>Number of participants:</strong> ${escapeHtml(input.participantCount || "Not provided")}</p>
      <hr />
      <p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  const sheetsDelivered = await postToSheets(
    {
      type: "registration",
      submittedAt: new Date().toISOString(),
      ...input,
    },
    env,
  ).catch((error) => {
    console.error("[forms] registration sheets delivery failed", error);
    return false;
  });

  return { emailDelivered: true, sheetsDelivered };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character] as string),
  );
}
