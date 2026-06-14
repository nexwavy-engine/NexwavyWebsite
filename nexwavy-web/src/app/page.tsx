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
      <section className="w-full bg-midnight">
        <div className="container-page grid min-h-[calc(100vh-4rem)] grid-cols-1 items-stretch gap-12 py-20 lg:grid-cols-2 lg:gap-10 lg:py-20">

          {/* Left — headline & CTAs */}
          <div className="flex flex-col justify-center py-8 lg:py-0">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" aria-hidden="true" />
              {HERO.statusLine}
            </div>
            <h1 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.045em] text-white md:text-5xl md:leading-[1.06] xl:text-6xl xl:leading-[1.04]">
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/60 md:text-lg">
              {HERO.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={HERO.primaryCta.href} className="btn bg-white text-midnight hover:bg-teal active:scale-[0.98]">
                {HERO.primaryCta.label}
              </Link>
              <Link href={HERO.secondaryCta.href} className="btn border border-white/20 text-white hover:bg-white/10 active:scale-[0.98]">
                {HERO.secondaryCta.label}
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
              {["Business Automation", "AI Training", "IT Advisory"].map((label) => (
                <span key={label} className="rounded-full border border-white/15 bg-white/6 px-4 py-1.5 text-xs font-medium text-white/70">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — feature cards panel (fills full column height) */}
          <div className="hidden lg:flex flex-col gap-4 self-stretch">
            {[
              {
                label: "Business Automation",
                tag: "Workflow Systems",
                body: "Replace scattered spreadsheets and manual follow-ups with one clean, auditable digital workflow.",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Process/flow icon: nodes connected by arrows */}
                    <circle cx="5" cy="6" r="2" />
                    <circle cx="19" cy="6" r="2" />
                    <circle cx="12" cy="18" r="2" />
                    <path d="M7 6h10" />
                    <path d="M17 6l-5 10" />
                    <path d="M7 6l5 10" />
                  </svg>
                ),
              },
              {
                label: "AI Training",
                tag: "Skills & Literacy",
                body: "Practical AI fluency programmes for teams, managers, and founders — built for real business contexts.",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Graduation/learning icon */}
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                  </svg>
                ),
              },
              {
                label: "IT Advisory",
                tag: "Strategy & Infrastructure",
                body: "Clear, vendor-neutral guidance on the tools, platforms, and digital infrastructure your business actually needs.",
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Shield/advisory icon */}
                    <path d="M12 2l9 4v6c0 5-3.8 9.3-9 11C3.8 21.3 3 17 3 12V6l9-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.label}
                className="group flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xs transition-all duration-300 hover:border-blue/40 hover:bg-white/[0.09]"
              >
                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue/30 bg-blue/20 text-white transition-colors group-hover:bg-blue/30">
                    {card.icon}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    {card.tag}
                  </span>
                </div>
                {/* Label + body */}
                <div className="mt-5">
                  <p className="text-base font-semibold tracking-tight text-white">{card.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{card.body}</p>
                </div>
                {/* Bottom arrow indicator */}
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue/70 transition-colors group-hover:text-blue">
                  <span>Learn more</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
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
