// Payments adapter kept for future use when Nexwavy enables an online payment
// flow. For launch, payment is handled offline after the team follows up.
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
  return { url: "https://nexwavy.com/contact", configured: false };
}
