import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { MASTERCLASS } from "@/lib/content/site";
import { COHORTS, COURSES, formatNgn } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "AI Training",
  description: "Register for Nexwavy's AI Productivity Masterclass and practical workplace AI training.",
};

const formatLabel: Record<string, string> = {
  online: "Virtual",
  "in-person": "Physical",
  hybrid: "Hybrid",
};

export default function AiTrainingPage() {
  return (
    <>
      <PageHeader eyebrow="AI Training" title={MASTERCLASS.name} intro={MASTERCLASS.promise} />

      <Section className="pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Why this training matters" title="Practical AI capability for real work." intro={MASTERCLASS.intro} />
            <p className="mt-5 text-base leading-relaxed text-muted">
              AI is already changing how people write, plan, sell, research, communicate, analyze, and make decisions.
              Using it well requires more than opening a chatbot and typing random questions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
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
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {MASTERCLASS.audiences.map((audience) => (
                <div key={audience} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

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
                <h2 className="text-xl font-bold text-ink">{course.title}</h2>
                <p className="mt-2 text-2xl font-bold text-gold">{formatNgn(course.priceNgn)}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{course.summary}</p>
                {cohort && (
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    Next cohort:{" "}
                    {new Date(cohort.startDate).toLocaleDateString("en-NG", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {formatLabel[cohort.deliveryFormat]}
                  </p>
                )}
                <ul className="mt-5 grid gap-3 border-t border-white/10 pt-5">
                  {modules.map((module) => (
                    <li key={module} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                      {module}
                    </li>
                  ))}
                </ul>
                <Link href={`/register?course=${course.id}`} className="btn-primary mt-7 w-full">
                  Register for AI Training
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Core modules" title="The concepts every participant should leave with." />
            <div className="mt-6 grid gap-3">
              {MASTERCLASS.coreModules.map((module, index) => (
                <div key={module} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  <span className="mr-2 font-semibold text-accent">0{index + 1}</span>
                  {module}
                </div>
              ))}
            </div>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Expected outcomes" title="Start using AI with clarity and confidence." />
            <div className="mt-6 grid gap-3">
              {MASTERCLASS.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  {outcome}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-tide/50 to-night p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Pricing</p>
              <div className="mt-4 grid gap-3">
                {MASTERCLASS.pricing.map((item) => (
                  <p key={item} className="text-sm text-muted">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bento bg-gradient-to-br from-tide/70 via-night-2/90 to-night p-10 text-center md:p-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Register for the next cohort or request a private training session.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Start using AI more responsibly, more productively, and with better business judgment across your team.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
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
