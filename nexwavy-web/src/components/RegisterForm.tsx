"use client";

import { useMemo, useState } from "react";
import type { Course, Cohort } from "@/lib/types";

const FORMATS = [
  { value: "online", label: "Online (live)" },
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
      <div className="bento p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-accent">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Seat reserved.</h3>
        <p className="mt-2 text-muted">
          You're registered for <strong>{result.courseTitle}</strong>. Complete payment to confirm
          your place — we've also emailed you the link.
        </p>
        <a href={result.paymentUrl} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6">
          Complete payment
        </a>
        {result.emailMocked && (
          <p className="mt-4 text-xs text-muted/70">
            (Dev mode: confirmation email logged to the server console, not sent.)
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bento grid gap-5 p-8" noValidate>
      <div>
        <label className="field-label" htmlFor="courseId">
          Choose a track
        </label>
        <select
          id="courseId"
          name="courseId"
          className="field-input"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
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
            Phone
          </label>
          <input id="phone" name="phone" className="field-input" autoComplete="tel" required />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="organization">
            Organization <span className="font-normal text-muted/70">(optional)</span>
          </label>
          <input id="organization" name="organization" className="field-input" autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="cohortId">
            Cohort <span className="font-normal text-muted/70">(optional)</span>
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
                · {c.deliveryFormat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="preferredFormat">
            Preferred format
          </label>
          <select id="preferredFormat" name="preferredFormat" className="field-input" defaultValue="online">
            {FORMATS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
          {errors.preferredFormat && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredFormat}</p>
          )}
        </div>
      </div>

      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      <button type="submit" className="btn-primary justify-self-start" disabled={status === "submitting"}>
        {status === "submitting" ? "Reserving…" : "Reserve my seat"}
      </button>
      <p className="text-xs text-muted/80">
        Reserving holds your place. Your seat is confirmed once payment is complete.
      </p>
    </form>
  );
}
