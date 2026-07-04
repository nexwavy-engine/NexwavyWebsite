import { PageHeader, Section } from "@/components/Section";
import RegisterForm from "@/components/RegisterForm";
import { MASTERCLASS } from "@/lib/content/site";
import { COHORTS, COURSES, findCourse, formatCohortLabel, formatNgn } from "@/lib/data/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Register — AI Productivity Masterclass | Nexwavy",
  description:
    "Reserve your seat for the Nexwavy AI Productivity Masterclass. Choose your track and cohort, and start using AI confidently at work.",
  path: "/register",
  ogTitle: "Register for the Nexwavy AI Productivity Masterclass",
  ogDescription:
    "Choose your training track and cohort, and start using AI confidently and responsibly.",
});

export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { course?: string };
}) {
  const requested = searchParams?.course ? findCourse(searchParams.course) : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Register"
        title="Register for the Nexwavy AI Productivity Masterclass."
        intro="Reserving holds your place. We will contact you with the next step for payment and confirmation. Your seat is confirmed once payment is received."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <RegisterForm courses={COURSES} cohorts={COHORTS} initialCourseId={requested?.id} />

          <aside className="grid content-start gap-4">
            <div className="bento p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Important</p>
              <p className="mt-3 text-sm leading-relaxed text-slate">{MASTERCLASS.noPaymentCopy}</p>
            </div>

            {COURSES.map((course) => (
              <div key={course.id} className="bento p-6">
                <p className="text-sm font-semibold text-midnight">{course.title}</p>
                <p className="mt-1 text-xl font-semibold text-blue">{formatNgn(course.priceNgn)}</p>
                <p className="mt-2 text-sm text-slate">{course.summary}</p>
              </div>
            ))}

            <div className="soft-band p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Upcoming cohorts</p>
              <div className="mt-3 grid gap-3 text-sm text-slate">
                <p>No preference</p>
                {COHORTS.map((cohort) => (
                  <p key={cohort.id}>{formatCohortLabel(cohort)}</p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
