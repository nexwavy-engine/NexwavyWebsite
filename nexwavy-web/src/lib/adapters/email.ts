// Email adapter (ADR-001): Resend in production; a console/in-memory mock when
// no RESEND_API_KEY is present. Swapping to Amazon SES later means replacing
// only this file.

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface EmailSender {
  send(msg: EmailMessage): Promise<{ id: string; mocked: boolean }>;
}

class MockEmailSender implements EmailSender {
  public outbox: EmailMessage[] = [];
  async send(msg: EmailMessage) {
    this.outbox.push(msg);
    // eslint-disable-next-line no-console
    console.log(`[email:mock] -> ${msg.to} | ${msg.subject}`);
    return { id: "mock-" + Math.random().toString(36).slice(2), mocked: true };
  }
}

class ResendSender implements EmailSender {
  private apiKey: string;
  private from: string;
  constructor(apiKey: string, from: string) {
    this.apiKey = apiKey;
    this.from = from;
  }
  async send(msg: EmailMessage) {
    const { Resend } = await import("resend");
    const resend = new Resend(this.apiKey);
    const { data, error } = await resend.emails.send({
      from: this.from,
      to: msg.to,
      subject: msg.subject,
      html: msg.html,
      text: msg.text,
    });
    if (error) throw error;
    return { id: data?.id ?? "sent", mocked: false };
  }
}

let singleton: EmailSender | null = null;

export function getEmailSender(env: NodeJS.ProcessEnv = process.env): EmailSender {
  if (singleton) return singleton;
  const key = env.RESEND_API_KEY;
  const from = env.EMAIL_FROM || "Nexwavy Solutions <hello@nexwavy.com>";
  singleton = key ? new ResendSender(key, from) : new MockEmailSender();
  return singleton;
}

export function __resetEmail() {
  singleton = null;
}

// Reusable templates ---------------------------------------------------------

export function leadConfirmationEmail(name: string): EmailMessage {
  return {
    to: "", // filled by caller
    subject: "We received your message — Nexwavy Solutions",
    text: `Hi ${name}, thanks for reaching out to Nexwavy Solutions. A member of our team will respond shortly.`,
    html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for reaching out to <strong>Nexwavy Solutions</strong>. A member of our team will respond shortly.</p>`,
  };
}

export function registrationConfirmationEmail(name: string, courseTitle: string, paymentUrl: string): EmailMessage {
  return {
    to: "",
    subject: `You're registered for ${courseTitle}`,
    text: `Hi ${name}, your place in "${courseTitle}" is reserved. Complete payment to confirm: ${paymentUrl}`,
    html: `<p>Hi ${escapeHtml(name)},</p><p>Your place in <strong>${escapeHtml(
      courseTitle,
    )}</strong> is reserved. Complete payment to confirm your seat:</p><p><a href="${paymentUrl}">Pay now</a></p>`,
  };
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string),
  );
}
