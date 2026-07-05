"use client";

import { useState } from "react";
import { SITE } from "@/lib/content/site";
import { trackEvent } from "@/lib/tracking";

const SERVICES = [
  { value: "business-automation", label: "Business automation" },
  { value: "ai-training", label: "AI training" },
  { value: "it-advisory", label: "IT advisory" },
  { value: "other", label: "Something else" },
];

const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerError(null);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "contact-page" }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        else setServerError(data.message || "We could not send your message. Please try again.");
        trackEvent("Contact form submit failure");
        setStatus("error");
        return;
      }
      trackEvent("Contact form submit success");
      setStatus("success");
      form.reset();
    } catch {
      setServerError("We could not send your message. Please try again.");
      trackEvent("Contact form submit failure");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bento p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-line bg-cloud text-xl text-blue">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-semibold text-midnight">Message received.</h3>
        <p className="mt-2 text-slate">
          Thanks — we have received your message. A member of the Nexwavy team will review it and respond. For anything urgent, reach us on WhatsApp or at hello@nexwavy.com.
        </p>
        <button className="btn-ghost mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bento grid gap-5 p-8" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" className="field-input" autoComplete="name" required />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="organization">
            Organisation / business name <span className="font-normal text-slate/70">(optional)</span>
          </label>
          <input id="organization" name="organization" className="field-input" autoComplete="organization" />
          {errors.organization && <p className="mt-1 text-sm text-red-600">{errors.organization}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="email">
            Email address <span className="font-normal text-slate/70">(email or phone required)</span>
          </label>
          <input id="email" name="email" type="email" className="field-input" autoComplete="email" />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            Phone number <span className="font-normal text-slate/70">(email or phone required)</span>
          </label>
          <input id="phone" name="phone" className="field-input" autoComplete="tel" />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="serviceInterest">
            What do you want to discuss?
          </label>
          <select id="serviceInterest" name="serviceInterest" className="field-input" defaultValue="business-automation">
            {SERVICES.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.serviceInterest && <p className="mt-1 text-sm text-red-600">{errors.serviceInterest}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="preferredContactMethod">
            Preferred contact method
          </label>
          <select id="preferredContactMethod" name="preferredContactMethod" className="field-input" defaultValue="email">
            {CONTACT_METHODS.map((method) => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="message">
          Tell us what you are trying to fix, build, or improve
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field-input"
          placeholder="Tell us what workflow, reporting, training, or visibility challenge you want to discuss."
          required
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <p className="text-xs leading-relaxed text-slate/80">
        We use your details only to respond to your enquiry or process your registration. See our{" "}
        <a href="/privacy" className="text-blue hover:text-midnight">
          Privacy Policy
        </a>{" "}
        for details.
      </p>

      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      <div className="flex flex-col items-start gap-3">
        <button type="submit" className="btn-primary justify-self-start self-start" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-slate">
          Prefer to talk now?{" "}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue hover:text-midnight"
            onClick={() => trackEvent("WhatsApp CTA click", { location: "contact-form-helper" })}
          >
            Chat with us on WhatsApp.
          </a>
        </p>
      </div>
    </form>
  );
}
