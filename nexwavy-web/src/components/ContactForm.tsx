"use client";

import { useState } from "react";

const SERVICES = [
  { value: "business-automation", label: "Business Automation" },
  { value: "ai-training", label: "AI Training" },
  { value: "it-consulting", label: "IT Consulting / Advisory" },
  { value: "discovery", label: "Paid Discovery Session" },
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
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bento flex flex-col items-center p-10 text-center md:p-14">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-cloud">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3069B0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-midnight">Message received.</h3>
        <p className="mt-2 max-w-md text-slate">
          Thank you for contacting Nexwavy Solutions Ltd. Our team will review your request and follow up shortly.
        </p>
        <button className="btn-ghost mt-8" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bento grid gap-5 p-8" noValidate aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Full name <span className="text-error" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            className={`field-input ${errors.name ? "border-error focus:ring-error/15" : ""}`}
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Email address <span className="text-error" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`field-input ${errors.email ? "border-error focus:ring-error/15" : ""}`}
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="phone">
            Phone{" "}
            <span className="font-normal text-slate/60">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="field-input"
            autoComplete="tel"
            placeholder="+234 800 000 0000"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="organization">
            Company / organization{" "}
            <span className="font-normal text-slate/60">(optional)</span>
          </label>
          <input
            id="organization"
            name="organization"
            className="field-input"
            autoComplete="organization"
          />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="serviceInterest">
          What can we help with? <span className="text-error" aria-hidden="true">*</span>
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          className="field-input"
          defaultValue="business-automation"
          required
          aria-required="true"
        >
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="field-label" htmlFor="message">
          Message or business need{" "}
          <span className="font-normal text-slate/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field-input resize-none"
          placeholder="Tell us what you want to automate, improve, or understand more clearly."
        />
      </div>

      {serverError && (
        <div className="rounded-2xl border border-error/30 bg-error/5 px-4 py-3" role="alert">
          <p className="text-sm text-error">{serverError}</p>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </span>
          ) : (
            "Send message"
          )}
        </button>
        <p className="text-xs text-slate">
          <span aria-hidden="true">*</span> Required fields
        </p>
      </div>
    </form>
  );
}
