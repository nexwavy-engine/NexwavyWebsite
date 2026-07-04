"use client";

import { useState } from "react";
import type { Cohort, Course } from "@/lib/types";
import { COHORT_LABELS } from "@/lib/data/catalog";
import { trackEvent } from "@/lib/tracking";

type Status = "idle" | "submitting" | "success" | "error";

interface SuccessPayload {
  courseTitle: string;
  emailMocked: boolean;
}

export default function RegisterForm({
  courses,
  cohorts,
  initialCourseId,
}: {
  courses: Course[];
  cohorts: Cohort[];
  initialCourseId?: string;
}) {
  const [courseId, setCourseId] = useState(
    courses.find((course) => course.id === initialCourseId)?.id ?? courses[0]?.id ?? "",
  );
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [result, setResult] = useState<SuccessPayload | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerError(null);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        else setServerError(data.message || "We could not complete your registration. Please try again.");
        trackEvent("Register form submit failure");
        setStatus("error");
        return;
      }
      setResult(data);
      trackEvent("Register form submit success", { courseId });
      setStatus("success");
      form.reset();
    } catch {
      setServerError("We could not complete your registration. Please try again.");
      trackEvent("Register form submit failure");
      setStatus("error");
    }
  }

  if (status === "success" && result) {
    return (
      <div className="bento p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-line bg-cloud text-xl text-blue">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-semibold text-midnight">Registration received.</h3>
        <p className="mt-2 text-slate">
          Thanks — we have received your registration. The Nexwavy team will contact you with the next step for payment and seat confirmation.
        </p>
        <p className="mt-4 text-sm text-slate">
          Selected track: <strong>{result.courseTitle}</strong>
        </p>
        {result.emailMocked && (
          <p className="mt-4 text-xs text-slate/70">
            (Dev mode: confirmation email logged to the server console, not sent.)
          </p>
        )}
        <button className="btn-ghost mt-6" onClick={() => setStatus("idle")}>
          Submit another registration
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bento grid gap-5 p-8" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label className="field-label" htmlFor="courseId">
          Training track / interest
        </label>
        <select
          id="courseId"
          name="courseId"
          className="field-input"
          value={courseId}
          onChange={(event) => setCourseId(event.target.value)}
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
        {errors.courseId && <p className="mt-1 text-sm text-red-600">{errors.courseId}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="fullName">
            Full name
          </label>
          <input id="fullName" name="fullName" className="field-input" autoComplete="name" required />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
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
          <label className="field-label" htmlFor="roleTitle">
            Role / job title <span className="font-normal text-slate/70">(optional)</span>
          </label>
          <input id="roleTitle" name="roleTitle" className="field-input" autoComplete="organization-title" />
          {errors.roleTitle && <p className="mt-1 text-sm text-red-600">{errors.roleTitle}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="participantCount">
            Number of participants <span className="font-normal text-slate/70">(optional)</span>
          </label>
          <input id="participantCount" name="participantCount" className="field-input" inputMode="numeric" />
          {errors.participantCount && <p className="mt-1 text-sm text-red-600">{errors.participantCount}</p>}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="cohortId">
          Preferred cohort
        </label>
        <select id="cohortId" name="cohortId" className="field-input" defaultValue="">
          <option value="">No preference</option>
          {cohorts.map((cohort) => (
            <option key={cohort.id} value={cohort.id}>
              {COHORT_LABELS[cohort.id]}
            </option>
          ))}
        </select>
        {errors.cohortId && <p className="mt-1 text-sm text-red-600">{errors.cohortId}</p>}
      </div>

      <div>
        <label className="field-label" htmlFor="message">
          Message / special request
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field-input"
          placeholder="Tell us your training interest, team need, or any special request."
          required
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <p className="text-xs leading-relaxed text-slate/80">
        No payment is taken on this page. We use your details only to process your registration and are handled in line with our{" "}
        <a href="/privacy" className="text-blue hover:text-midnight">
          Privacy Policy
        </a>
        .
      </p>

      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      <button type="submit" className="btn-primary justify-self-start" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Reserve my seat"}
      </button>
      <p className="text-sm text-slate">
        Reserving holds your place. We will contact you with the next step for payment and confirmation. Your seat is confirmed once payment is received.
      </p>
      <p className="text-xs text-slate/80">
        Your details are used only to process your registration and are handled in line with our Privacy Policy. No payment is taken on this page.
      </p>
    </form>
  );
}
