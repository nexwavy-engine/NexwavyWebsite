import { z } from "zod";

// Server-side validation for all inbound form data (PRD: validate server-side).
// Kept framework-agnostic; route handlers call these.

const phone = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number")
  .max(20)
  .regex(/^[+()\-\s\d]+$/, "Enter a valid phone number");

const optionalString = z.string().trim().max(2000).optional().transform((v) => (v === "" ? undefined : v));

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  phone: phone.optional().or(z.literal("").transform(() => undefined)),
  organization: z.string().trim().max(160).optional().transform((v) => (v === "" ? undefined : v)),
  serviceInterest: z.enum([
    "business-automation",
    "ai-training",
    "it-consulting",
    "other",
  ]),
  message: optionalString,
  source: z.string().trim().max(80).optional(),
});

export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  phone: phone,
  organization: z.string().trim().max(160).optional().transform((v) => (v === "" ? undefined : v)),
  courseId: z.string().trim().min(1, "Select a course"),
  cohortId: z.string().trim().max(80).optional().transform((v) => (v === "" ? undefined : v)),
  preferredFormat: z.enum(["online", "in-person", "hybrid"]),
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
