import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { MASTERCLASS } from "@/lib/content/site";
import { COHORTS, COURSES, formatNgn } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "AI Training",
  description:
    "Register for Nexwavy's AI Productivity Masterclass — practical workplace AI training for teams, professionals, and business owners in Nigeria.",
};

const formatLabel: Record<string, string> = {
  online: "Virtual",
  "in-person": "Physical",
  hybrid: "Hybrid",
};

export default function AiTrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Training"
        title={MASTERCLASS.name}
        intro={MASTERCLASS.promise}
      />

      {/* ── Intro + Audience ── */}
      <Section className="pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="Why this training matters"
              title="Practical AI capability for real work."
              intro={MASTERCLASS.intro}
            />
            <p className="mt-5 text-base leading-relaxed text-slate">
              AI is already changing how people write, plan, sell, research, communicate, analyze, and make decisions.
              Using it well requires more than opening a chatbot and typing random questions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              People need to understand how to prompt, verify, protect data, choose the right tool, and apply AI to real work. That is what this masterclass is designed to teach.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {MASTERCLASS.formats.map((format) => (
                <span key={format} className="chip">
                  {format}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="btn-primary">
                Register for AI Training
              </Link>
              <Link href="/contact" className="btn-ghost">
                Request Corporate Training
              </Link>
            </div>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Who this is for" title="Built for learners, teams, and business operators." />
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {MASTERCLASS.audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-2 rounded-2xl border border-line bg-cloud/60 px-4 py-2.5 text-sm text-slate"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Training tracks ── */}
      <Section>
        <SectionHeading
          eyebrow="Training tracks"
          title="Choose the track that best fits your role and goal."
          intro="Each track is practical, guided, and built around better output, better decisions, and responsible AI use."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {COURSES.map((course) => {
            const modules = MASTERCLASS.modules[course.id] ?? [];
            const cohort = COHORTS.find((item) => item.courseId === course.id);
            return (
              <article key={course.id} className="bento flex flex-col p-7">
                <div>
                  <h2 className="text-xl font-semibold text-midnight">{course.title}</h2>
                  <p className="mt-1.5 text-2xl font-semibold tracking-tight text-blue">
                    {formatNgn(course.priceNgn)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{course.summary}</p>
                  {cohort && (
                    <p className="mt-4 rounded-full border border-blue/15 bg-blue/6 px-3 py-1 text-center text-xs font-semibold text-blue">
                      Next cohort:{" "}
                      {new Date(cohort.startDate).toLocaleDateString("en-NG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      &middot; {formatLabel[cohort.deliveryFormat]}
                    </p>
                  )}
                </div>
                <ul className="mt-5 grid gap-2 border-t border-line pt-5">
                  {modules.map((module) => (
                    <li
                      key={module}
                      className="flex items-start gap-2 rounded-xl border border-line bg-cloud/55 px-4 py-2.5 text-sm text-slate"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                      {module}
                    </li>
                  ))}
                </ul>
                <Link href={`/register?course=${course.id}`} className="btn-primary mt-7">
                  Register for This Track
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      {/* ── Core modules + Outcomes + Pricing ── */}
      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Core modules" title="The concepts every participant leaves with." />
            <ol className="mt-6 grid gap-2">
              {MASTERCLASS.coreModules.map((module, index) => (
                <li
                  key={module}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-cloud/55 px-4 py-3 text-sm text-slate"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {module}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bento flex-1 p-8 md:p-10">
              <SectionHeading eyebrow="Expected outcomes" title="Start using AI with clarity and confidence." />
              <ul className="mt-6 grid gap-2">
                {MASTERCLASS.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-center gap-2 rounded-2xl border border-line bg-cloud/55 px-4 py-2.5 text-sm text-slate"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-line bg-midnight p-7">
              <p className="eyebrow mb-4 text-teal/80">Pricing</p>
              <ul className="grid gap-3">
                {MASTERCLASS.pricing.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Final CTA ── */}
      <Section>
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-10 text-center shadow-soft md:p-16">
          <p className="eyebrow mb-4">Ready to start?</p>
          <h2 className="mx-auto max-w-2xl text-balance text-2xl font-semibold tracking-[-0.03em] text-midnight md:text-4xl">
            Register for the next cohort or request a private training session.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Start using AI more responsibly, more productively, and with better business judgment across your team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/register" className="btn-primary">
              Register for AI Training
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request Corporate Training
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
