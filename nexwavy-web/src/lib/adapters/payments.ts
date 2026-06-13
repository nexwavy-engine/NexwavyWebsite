// Payments adapter (ADR-001): Phase 1 is a hosted Paystack/Flutterwave payment
// LINK (no-code). We resolve a link per course from env, with a sensible global
// fallback. Phase 2 (webhooks/reconciliation) replaces only this module.
//
// Env conventions (any may be set; first match wins):
//   PAYMENT_LINK_<COURSE_ID_UPPER_SNAKE>   e.g. PAYMENT_LINK_MASTERCLASS_FOUNDATIONS
//   PAYMENT_LINK_DEFAULT                    global fallback link
//   NEXT_PUBLIC_PAYMENT_LINK_DEFAULT       client-exposed fallback

function envKeyForCourse(courseId: string): string {
  return "PAYMENT_LINK_" + courseId.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
}

export interface PaymentLink {
  url: string;
  configured: boolean; // false => placeholder, prompt founders to set the real link
}

export function getPaymentLink(courseId: string, env: NodeJS.ProcessEnv = process.env): PaymentLink {
  const perCourse = env[envKeyForCourse(courseId)];
  const fallback = env.PAYMENT_LINK_DEFAULT || env.NEXT_PUBLIC_PAYMENT_LINK_DEFAULT;
  const url = perCourse || fallback;
  if (url) return { url, configured: true };
  // Placeholder so the UI flow never breaks before the link is added.
  return { url: "https://paystack.com/pay/nexwavy-placeholder", configured: false };
}
