import type { Course, Cohort } from "@/lib/types";

// Single source of truth for the AI Productivity Masterclass catalog.
// PLACEHOLDER pricing/dates — edit freely. Both the AI Training page and the
// database seed read from here so they never drift apart.

export const COURSES: Course[] = [
  {
    id: "masterclass-foundations",
    slug: "ai-productivity-foundations",
    title: "AI Foundations for Everyone",
    summary:
      "A beginner-friendly track for students, professionals, and non-technical learners who want a simple, practical introduction to everyday AI use.",
    priceNgn: 75000,
    isActive: true,
  },
  {
    id: "masterclass-team",
    slug: "ai-for-teams",
    title: "AI for Workplace Productivity",
    summary:
      "For professionals and teams who want to improve speed, quality, communication, and execution at work using practical AI workflows.",
    priceNgn: 75000,
    isActive: true,
  },
  {
    id: "masterclass-builders",
    slug: "ai-for-business-owners-and-smes",
    title: "AI for Business Owners and SMEs",
    summary:
      "For founders and operators who want to use AI to improve sales, customer communication, reporting, planning, and simple business workflows.",
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
    capacity: 20,
    status: "scheduled",
  },
  {
    id: "cohort-2026-09",
    courseId: "masterclass-builders",
    startDate: "2026-09-07",
    deliveryFormat: "online",
    capacity: 20,
    status: "scheduled",
  },
];

export function findCourse(idOrSlug: string): Course | undefined {
  return COURSES.find((c) => c.id === idOrSlug || c.slug === idOrSlug);
}

export function formatNgn(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
