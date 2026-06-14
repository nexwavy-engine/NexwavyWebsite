import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Section, SectionHeading } from "@/components/Section";
import { HERO, HIGHLIGHTS, OFFERS, PROCESS } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Business Automation, AI Training & IT Advisory | Nexwavy Solutions",
  description:
    "Nexwavy Solutions helps growing businesses replace manual work with smarter digital systems — automation, AI training, and IT advisory.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Business Automation": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "AI Training": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  "IT Advisory": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

// Keep only the first 3 PROCESS steps for the strip
const PROCESS_STRIP = [
  { step: "Discover", body: "We review your workflow, tools, and pain points." },
  { step: "Build", body: "We design and deliver a practical system for your team." },
  { step: "Support", body: "We train your team and stay available after launch." },
];

export default function HomePage() {
  return (
    <>
      {/* 1 ── Hero ───────────────────────────────────────── */}
      <section className="container-page pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" aria-hidden="true" />
            {HERO.statusLine}
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.045em] text-midnight md:text-[3.5rem] md:leading-[1.05]">
            {HERO.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-slate">
            {HERO.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={HERO.primaryCta.href} className="btn-primary">
              {HERO.primaryCta.label}
            </Link>
            <Link href={HERO.secondaryCta.href} className="btn-ghost">
              {HERO.secondaryCta.label}
            </Link>
          </div>
          {/* Service labels */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 border-t border-line pt-8">
            {["Business Automation", "AI Training", "IT Advisory"].map((label) => (
              <span key={label} className="rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-slate shadow-soft">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2 ── Services ───────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Three focused service areas."
          center
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <article key={item.title} className="bento flex flex-col p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                  {SERVICE_ICONS[item.title] ?? (
                    <span className="text-sm font-bold text-blue">0{index + 1}</span>
                  )}
                </div>
                <span className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-slate">
                  {item.statLabel}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-midnight">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{item.body}</p>
              <Link href={item.href} className="btn-link mt-6">
                {item.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* 3 ── How we work ─────────────────────────────────── */}
      <Section className="py-10">
        <div className="rounded-[2rem] border border-line bg-midnight px-8 py-10 md:px-12">
          <p className="eyebrow mb-2 text-teal/70">How we work</p>
          <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
            Simple process. Clear outcomes.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PROCESS_STRIP.map((step, i) => (
              <div key={step.step} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-xs font-bold text-white">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-semibold text-white">{step.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn mt-8 border border-white/20 bg-white/10 text-white hover:bg-white/20">
            Learn about our approach
          </Link>
        </div>
      </Section>

      {/* 4 ── Starting offers ─────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Starting offers"
          title="Pick the right entry point."
          intro="Every engagement starts with a clear, scoped offer so you know exactly what you are getting."
          center
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {OFFERS.map((offer) => (
            <article key={offer.title} className="bento flex flex-col p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-midnight">{offer.title}</h3>
                <span className="rounded-full border border-blue/20 bg-blue/5 px-3 py-1 text-xs font-semibold text-blue">
                  {offer.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{offer.body}</p>
              <Link href={offer.href} className="btn-link mt-5">
                {offer.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* 5 ── CTA Band ────────────────────────────────────── */}
      <CtaBand />
    </>
  );
}
