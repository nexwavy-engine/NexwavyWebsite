import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Business Automation, AI Training & IT Advisory | Nexwavy Solutions",
  description:
    "Nexwavy Solutions Ltd helps Nigerian businesses replace manual work with smarter digital systems. AI training, business automation, and IT advisory.",
};

const STATS = [
  { value: "3", label: "core service areas" },
  { value: "NGN 75K", label: "AI training entry price" },
  { value: "500K+", label: "automation project starts from" },
];

const SERVICE_ICONS = {
  "Business Automation": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "AI Training": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  "IT Advisory": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="container-page pt-14 pb-4 md:pt-20 md:pb-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" aria-hidden="true" />
              {HERO.statusLine}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-midnight md:text-[3.75rem] md:leading-[1.01]">
              {HERO.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate md:text-xl">
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
            {/* Stats row */}
            <div className="mt-10 flex items-center gap-8 border-t border-line pt-8">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <span className="h-8 w-px bg-line" aria-hidden="true" />}
                  <div>
                    <p className="text-xl font-semibold tracking-tight text-midnight">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-slate">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual panel */}
          <div className="rounded-[2rem] border border-line bg-white p-6 shadow-soft md:p-8">
            {/* Process preview */}
            <p className="eyebrow mb-5">How we work</p>
            <div className="grid gap-2.5">
              {PROCESS.slice(0, 4).map((step, i) => (
                <div
                  key={step.step}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-cloud/60 px-4 py-3.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-midnight">{step.step}</p>
                    <p className="mt-0.5 truncate text-xs text-slate">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Service chips */}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
              {HIGHLIGHTS.map((item) => (
                <span key={item.title} className="chip">
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted focus areas ticker ── */}
      <Section className="py-8 md:py-10">
        <div className="rounded-[1.75rem] border border-line bg-white px-6 py-4 shadow-soft">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-midnight">Trusted focus areas</span>
            {["Business Automation", "AI Training", "IT Advisory", "Workflow Improvement", "Digital Transformation", "Process Design"].map((item) => (
              <span key={item} className="rounded-full bg-blue/6 px-3 py-1.5 text-xs font-medium text-blue">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Problem statement ── */}
      <Section className="py-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Why now" title={HOME_INTRO.title} intro={HOME_INTRO.body[0]} />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate">
              {HOME_INTRO.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link href="/about" className="btn-link mt-8">
              Learn about our approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <article key={problem.title} className="bento p-6">
                <div className="mb-3 h-1 w-8 rounded-full bg-blue" aria-hidden="true" />
                <p className="text-sm font-semibold text-midnight">{problem.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Services ── */}
      <Section>
        <SectionHeading
          eyebrow="What Nexwavy does"
          title="We design better ways for businesses to work."
          intro="Practical systems, responsible AI enablement, and technology advisory for teams that need more structure and better visibility."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <article key={item.title} className="bento flex flex-col p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                  {SERVICE_ICONS[item.title as keyof typeof SERVICE_ICONS] ?? (
                    <span className="text-sm font-bold">0{index + 1}</span>
                  )}
                </div>
                <span className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-slate">
                  {item.statLabel}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-midnight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{item.body}</p>
              <Link href={item.href} className="btn-link mt-6">
                {item.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Process ── */}
      <Section className="py-12">
        <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="How we work"
              title="A simple process with clear outcomes."
              intro="Precise, calm, structured, and practical — the same thinking in every engagement."
            />
            <div className="grid gap-3">
              {PROCESS.map((step, index) => (
                <div
                  key={step.step}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-cloud/50 px-5 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-midnight text-xs font-bold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-midnight">{step.step}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Why Nexwavy ── */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Nexwavy"
            title={WHY_NEXWAVY.title}
            intro={WHY_NEXWAVY.body}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {WHY_NEXWAVY.points.map((point) => (
              <div key={point} className="bento flex items-center gap-3 px-5 py-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue/10">
                  <span className="h-2 w-2 rounded-full bg-blue" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-midnight">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Who we help ── */}
      <Section className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who we help"
              title="Built for growing businesses and teams that want better execution."
              intro="From SMEs to corporate departments, the focus stays the same: less manual friction, more visibility, and stronger systems."
            />
            <Link href="/services" className="btn-ghost mt-8">
              View all services
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {AUDIENCES.map((audience) => (
              <article key={audience.title} className="bento p-5">
                <h3 className="text-sm font-semibold text-midnight">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{audience.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AI Training Feature + Starting Offers ── */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-midnight p-8 md:p-10">
            <p className="eyebrow mb-4 text-teal/80">Featured AI training</p>
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              {TRAINING_FEATURE.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate/80">{TRAINING_FEATURE.body}</p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {TRAINING_FEATURE.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-2.5 text-xs text-white/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  {outcome}
                </div>
              ))}
            </div>
            <Link href="/ai-training" className="btn mt-8 bg-white text-midnight hover:bg-cloud">
              Explore AI Training
            </Link>
          </div>

          <div>
            <SectionHeading
              eyebrow="Starting offers"
              title="Start with a clear, practical engagement."
              intro="Choose the entry point that matches the problem you need to solve next."
            />
            <div className="mt-6 grid gap-4">
              {OFFERS.map((offer) => (
                <article key={offer.title} className="bento p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-midnight">{offer.title}</h3>
                    <span className="rounded-full border border-blue/20 bg-blue/6 px-3 py-1 text-xs font-semibold text-blue">
                      {offer.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{offer.body}</p>
                  <Link href={offer.href} className="btn-link mt-4">
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
