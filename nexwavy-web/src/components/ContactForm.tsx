"use client";

import { useState } from "react";

const SERVICES = [
  { value: "business-automation", label: "Business Automation" },
  { value: "ai-training", label: "AI Training" },
  { value: "it-consulting", label: "IT Consulting" },
  { value: "other", label: "Something else" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerError(null);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "contact-page" }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        else setServerError(data.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setServerError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bento p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-accent">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Your message has been received.</h3>
        <p className="mt-2 text-muted">
          Thank you for contacting Nexwavy Solutions Ltd. Our team will review your request and follow up shortly.
        </p>
        <button className="btn-ghost mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bento grid gap-5 p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" className="field-input" autoComplete="name" required />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="field-input" autoComplete="email" required />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="phone">
            Phone <span className="font-normal text-muted/70">(optional)</span>
          </label>
          <input id="phone" name="phone" className="field-input" autoComplete="tel" />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="organization">
            Company / organization <span className="font-normal text-muted/70">(optional)</span>
          </label>
          <input id="organization" name="organization" className="field-input" autoComplete="organization" />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="serviceInterest">
          What can we help with?
        </label>
        <select id="serviceInterest" name="serviceInterest" className="field-input" defaultValue="business-automation">
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.serviceInterest && <p className="mt-1 text-sm text-red-600">{errors.serviceInterest}</p>}
      </div>

      <div>
        <label className="field-label" htmlFor="message">
          Message / business need <span className="font-normal text-muted/70">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field-input"
          placeholder="Tell us what you want to automate, improve, or understand more clearly."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      <button type="submit" className="btn-primary justify-self-start" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
