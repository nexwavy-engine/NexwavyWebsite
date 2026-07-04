import type { Cohort, Course } from "@/lib/types";

export const COURSES: Course[] = [
  {
    id: "masterclass-foundations",
    slug: "ai-foundations-for-everyone",
    title: "AI Foundations for Everyone",
    summary:
      "A practical starting point for professionals, students, and non-technical learners who want to use AI more clearly at work.",
    priceNgn: 75000,
    isActive: true,
  },
  {
    id: "masterclass-team",
    slug: "ai-for-workplace-productivity",
    title: "AI for Workplace Productivity",
    summary:
      "For professionals and teams that want to improve writing, reporting, planning, research, and day-to-day execution with AI.",
    priceNgn: 75000,
    isActive: true,
  },
  {
    id: "masterclass-builders",
    slug: "ai-for-business-owners-and-smes",
    title: "AI for Business Owners and SMEs",
    summary:
      "For founders and operators who want to use AI for planning, communication, reporting, and better operational decision support.",
    priceNgn: 75000,
    isActive: true,
  },
];

export const COHORTS: Cohort[] = [
  {
    id: "cohort-2026-07",
    courseId: "masterclass-foundations",
    startDate: "2026-07-13",
    deliveryFormat: "online",
    capacity: 30,
    status: "scheduled",
  },
  {
    id: "cohort-2026-08",
    courseId: "masterclass-team",
    startDate: "2026-08-10",
    deliveryFormat: "hybrid",
    capacity: 24,
    status: "scheduled",
  },
  {
    id: "cohort-2026-09",
    courseId: "masterclass-builders",
    startDate: "2026-09-07",
    deliveryFormat: "online",
    capacity: 24,
    status: "scheduled",
  },
];

export const COHORT_LABELS: Record<string, string> = {
  "cohort-2026-07": "13 July 2026 · Virtual — AI Foundations for Everyone",
  "cohort-2026-08": "10 August 2026 · Hybrid — AI for Workplace Productivity",
  "cohort-2026-09": "7 September 2026 · Virtual — AI for Business Owners and SMEs",
};

export function findCourse(idOrSlug: string): Course | undefined {
  return COURSES.find((course) => course.id === idOrSlug || course.slug === idOrSlug);
}

export function findCohort(id: string): Cohort | undefined {
  return COHORTS.find((cohort) => cohort.id === id);
}

export function formatCohortLabel(cohort: Cohort): string {
  return COHORT_LABELS[cohort.id] ?? cohort.startDate;
}

export function formatNgn(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
