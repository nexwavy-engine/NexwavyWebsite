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
      <section className="w-full bg-blue">
        <div className="container-page grid h-[calc(100vh-4.5rem)] grid-cols-1 gap-0 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">

          {/* Left — headline & CTAs */}
          <div className="flex flex-col justify-center py-16 pr-0 lg:pr-12">
            {/* Status pill */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-teal" aria-hidden="true" />
              <span className="whitespace-nowrap">{HERO.statusLine}</span>
            </div>

            <h1 className="mt-8 font-display text-balance text-[2.75rem] font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-5xl xl:text-[3.5rem]">
              {HERO.title}
            </h1>

            <p className="mt-5 max-w-md text-pretty text-[1.05rem] leading-relaxed text-white/65">
              {HERO.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={HERO.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue shadow-lift transition-all hover:bg-teal hover:text-midnight active:scale-[0.97]"
              >
                {HERO.primaryCta.label}
              </Link>
              <Link
                href={HERO.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
              >
                {HERO.secondaryCta.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-8 text-xs font-medium text-white/50">
              <span>Serving businesses across Nigeria</span>
              <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
              <span>Fast turnaround</span>
              <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
              <span>Ongoing support</span>
            </div>
          </div>

          {/* Right — three service cards stretching full height */}
          <div className="hidden lg:grid grid-rows-3 gap-px border-l border-white/10 bg-white/10">
            {[
              {
                tag: "01",
                label: "Business Automation",
                body: "Replace scattered spreadsheets and manual follow-ups with one clean, auditable digital workflow.",
                href: "/services",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Layered rectangles = stacked workflow */}
                    <rect x="2" y="7" width="16" height="10" rx="2" />
                    <path d="M6 3h16a2 2 0 0 1 2 2v10" />
                    <path d="M10 17l3 3 3-3" />
                    <path d="M13 17v-5" />
                  </svg>
                ),
              },
              {
                tag: "02",
                label: "AI Training",
                body: "Practical AI fluency programmes for teams, managers, and founders — built for real business contexts.",
                href: "/ai-training",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Neural / brain spark */}
                    <path d="M12 2a4 4 0 0 1 4 4c0 .34-.04.67-.1 1H16a3 3 0 0 1 0 6h-.5" />
                    <path d="M12 2a4 4 0 0 0-4 4c0 .34.04.67.1 1H8a3 3 0 0 0 0 6h.5" />
                    <path d="M8.5 13a3.5 3.5 0 0 0 7 0" />
                    <path d="M12 13v6" />
                    <path d="M9 19h6" />
                  </svg>
                ),
              },
              {
                tag: "03",
                label: "IT Advisory",
                body: "Clear, vendor-neutral guidance on the tools, platforms, and digital infrastructure your business needs.",
                href: "/services",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Compass / strategy */}
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                ),
              },
            ].map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="group flex flex-col justify-between bg-blue p-8 transition-colors duration-200 hover:bg-midnight"
              >
                {/* Top: number tag + icon */}
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">{card.tag}</span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal/30 bg-teal/10 text-teal transition-colors group-hover:bg-teal/20">
                    {card.icon}
                  </div>
                </div>
                {/* Bottom: label + body + arrow */}
                <div>
                  <p className="text-lg font-semibold tracking-tight text-white">{card.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{card.body}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-teal/70 transition-colors group-hover:text-teal">
                    <span>Explore</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                </div>
              </Link>
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
