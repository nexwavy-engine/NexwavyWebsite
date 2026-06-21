import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/Section";
import RegisterForm from "@/components/RegisterForm";
import { COURSES, COHORTS, findCourse, formatNgn } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "Register for training",
  description: "Register for the Nexwavy AI Productivity Masterclass.",
};

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
        intro="Complete your learner profile and select the training track that best fits your goal. Your seat is confirmed after payment confirmation or sponsor approval."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <RegisterForm courses={COURSES} cohorts={COHORTS} initialCourseId={requested?.id} />

          <aside className="grid content-start gap-4">
            {COURSES.map((c) => (
              <div key={c.id} className="bento p-6">
                <p className="text-sm font-semibold text-midnight">{c.title}</p>
                <p className="mt-1 text-xl font-semibold text-blue">{formatNgn(c.priceNgn)}</p>
                <p className="mt-2 text-sm text-slate">{c.summary}</p>
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </>
  );
}
