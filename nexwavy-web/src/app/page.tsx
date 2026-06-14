import Link from "next/link";
import { CtaBand, Section, SectionHeading } from "@/components/Section";
import {
  AUDIENCES,
  HERO,
  HIGHLIGHTS,
  HOME_INTRO,
  OFFERS,
  PROCESS,
  PROBLEMS,
  TRAINING_FEATURE,
  WHY_NEXWAVY,
} from "@/lib/content/site";

const TRUST_AREAS = [
  "Business Automation",
  "AI Training",
  "IT Advisory",
  "Workflow Improvement",
  "Digital Transformation",
];

const HERO_LABELS = [
  "Operational visibility",
  "Practical AI enablement",
  "Structured delivery",
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-14 md:pt-18">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">{HERO.statusLine}</p>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-midnight md:text-7xl md:leading-[0.98]">
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={HERO.primaryCta.href} className="btn-primary">
                {HERO.primaryCta.label}
              </Link>
              <Link href={HERO.secondaryCta.href} className="btn-ghost">
                {HERO.secondaryCta.label}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {HERO_LABELS.map((label) => (
                <span key={label} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-slate">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="soft-band p-6 md:p-8">
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-line bg-cloud p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow mb-3">Systems illustration</p>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-midnight">
                      Better systems for faster decisions and cleaner execution.
                    </h2>
                  </div>
                  <div className="relative h-28 w-28 shrink-0">
                    <div className="n-fragment absolute left-2 top-0 h-12 w-9 bg-blue" />
                    <div className="n-fragment absolute bottom-0 left-2 h-12 w-7 bg-blue" />
                    <div className="n-fragment absolute right-4 top-1 h-12 w-7 bg-signal" />
                    <div className="n-fragment absolute bottom-1 right-0 h-12 w-10 bg-blue" />
                    <div className="n-fragment absolute left-[2.65rem] top-[2.15rem] h-10 w-8 bg-white" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.5rem] border border-line bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">Operational flow</p>
                  <div className="mt-4 grid gap-3">
                    {["Requests captured", "Approvals tracked", "Reporting visible"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-line bg-cloud/70 px-4 py-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-midnight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {HIGHLIGHTS.map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-line bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                        {item.statLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-midnight">{item.stat}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="soft-band px-6 py-5 md:px-8">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate">
            <span className="text-midnight">Trusted focus areas</span>
            {TRUST_AREAS.map((item) => (
              <span key={item} className="rounded-full bg-blue/6 px-3 py-2 text-blue">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="Why now" title={HOME_INTRO.title} intro={HOME_INTRO.body[0]} />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate">
              {HOME_INTRO.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <article key={problem.title} className="bento p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">{problem.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What Nexwavy does"
          title="We design better ways for businesses to work."
          intro="Practical systems, responsible AI enablement, and technology advisory for teams that need more structure and better visibility."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <article key={item.title} className="bento p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                  {item.statLabel}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-midnight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{item.body}</p>
              <Link href={item.href} className="btn-link mt-6">
                {item.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="soft-band p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="How we work"
              title="A simple process with clear outcomes."
              intro="The delivery logic follows the same thinking in the design system: precise, calm, structured, and practical."
            />
            <div className="grid gap-4">
              {PROCESS.map((step, index) => (
                <div key={step.step} className="grid gap-4 rounded-[1.5rem] border border-line bg-white p-5 md:grid-cols-[auto_1fr] md:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-midnight text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-midnight">{step.step}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Why Nexwavy"
              title={WHY_NEXWAVY.title}
              intro={WHY_NEXWAVY.body}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {WHY_NEXWAVY.points.map((point) => (
              <div key={point} className="bento flex items-center gap-3 p-5">
                <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                <span className="text-sm font-medium text-midnight">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Who we help"
              title="Built for growing businesses and teams that want better execution."
              intro="From SMEs to corporate departments, the focus stays the same: less manual friction, more visibility, and stronger systems."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {AUDIENCES.map((audience) => (
              <article key={audience.title} className="bento p-5">
                <h3 className="text-base font-semibold text-midnight">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{audience.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="soft-band p-8 md:p-10">
            <SectionHeading eyebrow="Featured AI training" title={TRAINING_FEATURE.title} intro={TRAINING_FEATURE.body} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {TRAINING_FEATURE.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-slate">
                  {outcome}
                </div>
              ))}
            </div>
            <Link href="/ai-training" className="btn-accent mt-8">
              Explore AI Training
            </Link>
          </div>

          <div>
            <SectionHeading
              eyebrow="Starting offers"
              title="Start with a clear, practical engagement."
              intro="Choose the entry point that matches the problem you need to solve next."
            />
            <div className="mt-8 grid gap-4">
              {OFFERS.map((offer) => (
                <article key={offer.title} className="bento p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-midnight">{offer.title}</h3>
                    <span className="rounded-full bg-blue/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                      {offer.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{offer.body}</p>
                  <Link href={offer.href} className="btn-link mt-5">
                    {offer.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
