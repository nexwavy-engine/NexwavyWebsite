import { z } from "zod";

// Server-side validation for all inbound form data (PRD: validate server-side).
// Kept framework-agnostic; route handlers call these.

const phone = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number")
  .max(20)
  .regex(/^[+()\-\s\d]+$/, "Enter a valid phone number");

const optionalEmail = z.string().trim().toLowerCase().email("Enter a valid email").optional().or(z.literal("").transform(() => undefined));
const honeypot = z.string().trim().optional();

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: optionalEmail,
  phone: phone.optional().or(z.literal("").transform(() => undefined)),
  organization: z.string().trim().max(160).optional().transform((v) => (v === "" ? undefined : v)),
  preferredContactMethod: z.enum(["email", "phone", "whatsapp"]).optional(),
  serviceInterest: z.enum([
    "business-automation",
    "ai-training",
    "it-advisory",
    "other",
  ]),
  message: z.string().trim().min(10, "Tell us a bit more about what you want to discuss.").max(2000),
  source: z.string().trim().max(80).optional(),
  website: honeypot,
}).superRefine((value, ctx) => {
  if (!value.email && !value.phone) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Enter an email address or phone number.",
      path: ["email"],
    });
  }
  if (value.website) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Spam submission rejected.",
      path: ["website"],
    });
  }
});

export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: optionalEmail,
  phone: phone.optional().or(z.literal("").transform(() => undefined)),
  organization: z.string().trim().max(160).optional().transform((v) => (v === "" ? undefined : v)),
  roleTitle: z.string().trim().max(120).optional().transform((v) => (v === "" ? undefined : v)),
  courseId: z.string().trim().min(1, "Select a course"),
  cohortId: z.string().trim().max(80).optional().transform((v) => (v === "" ? undefined : v)),
  participantCount: z.string().trim().max(20).optional().transform((v) => (v === "" ? undefined : v)),
  message: z.string().trim().min(2, "Tell us your training interest or special request.").max(2000),
  website: honeypot,
}).superRefine((value, ctx) => {
  if (!value.email && !value.phone) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Enter an email address or phone number.",
      path: ["email"],
    });
  }
  if (value.website) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Spam submission rejected.",
      path: ["website"],
    });
  }
});

export type LeadInput = z.infer<typeof leadSchema>;
export type RegistrationInput = z.infer<typeof registrationSchema>;

export interface ParseResult<T> {
  ok: boolean;
  data?: T;
  errors?: Record<string, string>;
}

function flatten(err: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of err.issues) {
    const key = issue.path.join(".") || "_";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

export function parseLead(input: unknown): ParseResult<LeadInput> {
  const r = leadSchema.safeParse(input);
  return r.success ? { ok: true, data: r.data } : { ok: false, errors: flatten(r.error) };
}

export function parseRegistration(input: unknown): ParseResult<RegistrationInput> {
  const r = registrationSchema.safeParse(input);
  return r.success ? { ok: true, data: r.data } : { ok: false, errors: flatten(r.error) };
}
