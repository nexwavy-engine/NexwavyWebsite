import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { MASTERCLASS } from "@/lib/content/site";
import { COHORTS, COURSES, formatCohortLabel, formatNgn } from "@/lib/data/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Productivity Masterclass — Practical AI Training | Nexwavy",
  description:
    "Hands-on AI training for professionals, SMEs, and teams in Nigeria. Learn prompting, AI for work, data safety, and a practical AI routine.",
  path: "/ai-training",
  ogTitle: "Nexwavy AI Productivity Masterclass",
  ogDescription:
    "Practical, hands-on AI training that moves individuals and teams from curiosity to real capability.",
});

export default function AiTrainingPage() {
  return (
    <>
      <PageHeader eyebrow="AI Training" title={MASTERCLASS.name} intro={MASTERCLASS.promise} />

      <Section className="pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="Training positioning"
              title="AI training should make work clearer, not noisier."
              intro={MASTERCLASS.intro}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href="/register" className="btn-primary" eventName="AI Training CTA click" eventData={{ location: "ai-training-hero" }}>
                Register for AI Training
              </TrackedLink>
              <Link href="/contact" className="btn-ghost">
                Request Corporate Training
              </Link>
            </div>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Who this is for" title="Designed for professionals, teams, and business operators." />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {MASTERCLASS.audiences.map((audience) => (
                <div key={audience} className="rounded-2xl border border-line bg-cloud/60 px-4 py-3 text-sm text-slate">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What participants learn"
          title="The training is built around everyday work use cases."
          intro="Participants leave with a clearer understanding of what AI is good for, how to prompt well, and how to use AI without creating avoidable risk."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {COURSES.map((course) => (
            <article key={course.id} className="bento flex flex-col p-7">
              <h2 className="text-xl font-semibold text-midnight">{course.title}</h2>
              <p className="mt-2 text-2xl font-semibold text-blue">{formatNgn(course.priceNgn)}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate">{course.summary}</p>
              <TrackedLink href={`/register?course=${course.id}`} className="btn-primary mt-7 w-full" eventName="AI Training CTA click" eventData={{ location: "ai-training-track", courseId: course.id }}>
                Register for this track
              </TrackedLink>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Learning outcomes" title="Participants learn how to:" />
            <div className="mt-6 grid gap-3">
              {MASTERCLASS.participantsLearn.map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-cloud/55 px-4 py-3 text-sm text-slate">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Pricing and cohorts" title="Public, team, department, and executive options." />
            <div className="mt-6 grid gap-3">
              {MASTERCLASS.pricing.map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-cloud/55 px-4 py-3 text-sm text-slate">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-line bg-cloud p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Upcoming cohorts</p>
              <div className="mt-4 grid gap-3">
                {COHORTS.map((cohort) => (
                  <p key={cohort.id} className="text-sm text-slate">
                    {formatCohortLabel(cohort)}
                  </p>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate">{MASTERCLASS.noPaymentCopy}</p>
            <Link href="/refunds" className="btn-link mt-5">
              Read the refund and cancellation policy
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-midnight md:text-3xl">
            Register for a cohort or request a private training session.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate">
            No payment is taken on this page. After registration, the Nexwavy team will contact you with the next step for payment and seat confirmation.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink href="/register" className="btn-primary" eventName="AI Training CTA click" eventData={{ location: "ai-training-bottom" }}>
              Register for AI Training
            </TrackedLink>
            <Link href="/contact" className="btn-ghost">
              Talk to Nexwavy
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
