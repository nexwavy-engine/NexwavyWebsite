"use client";

import { useMemo, useState } from "react";
import type { Course, Cohort } from "@/lib/types";

const FORMATS = [
  { value: "online", label: "Online (live virtual)" },
  { value: "in-person", label: "In-person" },
  { value: "hybrid", label: "Hybrid / in-house" },
];

type Status = "idle" | "submitting" | "success" | "error";

interface SuccessPayload {
  courseTitle: string;
  paymentUrl: string;
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
    courses.find((c) => c.id === initialCourseId)?.id ?? courses[0]?.id ?? "",
  );
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [result, setResult] = useState<SuccessPayload | null>(null);

  const cohortsForCourse = useMemo(
    () => cohorts.filter((c) => c.courseId === courseId),
    [cohorts, courseId],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerError(null);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        else setServerError(data.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setResult(data);
      setStatus("success");
    } catch {
      setServerError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success" && result) {
    return (
      <div className="bento flex flex-col items-center p-10 text-center md:p-14">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-cloud">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3069B0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-midnight">Seat reserved.</h3>
        <p className="mt-2 max-w-md text-slate">
          You&apos;re registered for <strong className="text-midnight">{result.courseTitle}</strong>. Complete payment to confirm your place — we&apos;ve also emailed you the link.
        </p>
        <a
          href={result.paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent mt-8"
        >
          Complete payment
        </a>
        {result.emailMocked && (
          <p className="mt-4 text-xs text-slate/60">
            (Dev mode: confirmation email logged to the server console, not sent.)
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bento grid gap-5 p-8" noValidate aria-label="Registration form">
      {/* Track selection */}
      <div>
        <label className="field-label" htmlFor="courseId">
          Choose a training track <span className="text-error" aria-hidden="true">*</span>
        </label>
        <select
          id="courseId"
          name="courseId"
          className="field-input"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
          aria-required="true"
        >
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
        {errors.courseId && (
          <p className="mt-1.5 text-xs text-error" role="alert">{errors.courseId}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="fullName">
            Full name <span className="text-error" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            className={`field-input ${errors.fullName ? "border-error" : ""}`}
            autoComplete="name"
            required
            aria-required="true"
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-error" role="alert">{errors.fullName}</p>
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
            className={`field-input ${errors.email ? "border-error" : ""}`}
            autoComplete="email"
            required
            aria-required="true"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-error" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="phone">
            Phone number <span className="text-error" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`field-input ${errors.phone ? "border-error" : ""}`}
            autoComplete="tel"
            placeholder="+234 800 000 0000"
            required
            aria-required="true"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-error" role="alert">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="organization">
            Organization{" "}
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="cohortId">
            Cohort preference{" "}
            <span className="font-normal text-slate/60">(optional)</span>
          </label>
          <select id="cohortId" name="cohortId" className="field-input" defaultValue="">
            <option value="">No preference</option>
            {cohortsForCourse.map((c) => (
              <option key={c.id} value={c.id}>
                {new Date(c.startDate).toLocaleDateString("en-NG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                &middot; {c.deliveryFormat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="preferredFormat">
            Preferred format <span className="text-error" aria-hidden="true">*</span>
          </label>
          <select
            id="preferredFormat"
            name="preferredFormat"
            className="field-input"
            defaultValue="online"
            required
            aria-required="true"
          >
            {FORMATS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
          {errors.preferredFormat && (
            <p className="mt-1.5 text-xs text-error" role="alert">{errors.preferredFormat}</p>
          )}
        </div>
      </div>

      {serverError && (
        <div className="rounded-2xl border border-error/30 bg-error/5 px-4 py-3" role="alert">
          <p className="text-sm text-error">{serverError}</p>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
              Reserving your seat…
            </span>
          ) : (
            "Reserve my seat"
          )}
        </button>
      </div>
      <p className="text-xs leading-relaxed text-slate/70">
        Reserving holds your place. Your seat is confirmed once payment is complete. <span aria-hidden="true">*</span> Required fields.
      </p>
    </form>
  );
}
