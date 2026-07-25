import Image from "next/image";
import Link from "next/link";
import { CtaBand, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import {
  AUDIENCES,
  EXECUTION_LOOP,
  HERO,
  HIGHLIGHTS,
  HOME_INTRO,
  OFFERS,
  PROBLEMS,
  SITE,
} from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nexwavy Solutions - Business Automation & AI Training Company in Nigeria",
  description:
    "Replace manual processes with automated check-ins, sales tracking, approval workflows, and practical corporate AI productivity training in Lagos, Nigeria.",
  path: "/",
  ogTitle: "Nexwavy Solutions - Business Automation & AI Training Nigeria",
  ogDescription:
    "Smarter digital systems, custom B2B automation, and practical workplace AI training for growing businesses.",
  ogImage: "/images/hero-automation.png",
});

const HERO_LABELS = [
  "Staff Attendance System",
  "Sales & Stock Tracker",
  "Approval Workflow Portal",
  "AI Productivity Masterclass",
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-12 pb-10 md:pt-20 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-blue/80">{HERO.statusLine}</p>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-midnight md:text-5xl lg:text-6xl">{HERO.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate md:text-lg">{HERO.subtitle}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={HERO.primaryCta.href} className="btn-primary px-8 py-4" eventName="Start a Project CTA click" eventData={{ location: "home-hero" }}>
                {HERO.primaryCta.label}
              </TrackedLink>
              <TrackedLink href={HERO.secondaryCta.href} external className="btn-ghost px-8 py-4" eventName="WhatsApp CTA click" eventData={{ location: "home-hero" }}>
                {HERO.secondaryCta.label}
              </TrackedLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {HERO_LABELS.map((label) => <span key={label} className="chip bg-cloud text-midnight border-line">✓ {label}</span>)}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-line shadow-2xl md:aspect-[4/3]">
            <Image src="/images/hero-automation.png" alt="Nexwavy Business Automation Dashboard Interface" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Modern Challenges" title={HOME_INTRO.title} intro={HOME_INTRO.body[0]} />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate md:text-base">
              {HOME_INTRO.body.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {PROBLEMS.map((problem) => <article key={problem.title} className="bento p-7"><h3 className="text-lg font-bold text-midnight">{problem.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate">{problem.body}</p></article>)}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What Nexwavy does" title="Business automation first. AI training and advisory where they support better execution." intro="We build practical digital systems that give owners control and help teams work faster." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => <article key={item.title} className="bento flex flex-col p-8"><h3 className="text-xl font-bold tracking-tight text-midnight">{item.title}</h3><p className="mt-3 flex-grow text-sm leading-relaxed text-slate">{item.body}</p><Link href={item.href} className="btn-link mt-6">{item.cta}<span aria-hidden="true">→</span></Link></article>)}
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="soft-band p-10 md:p-14">
          <SectionHeading eyebrow="The Nexwavy Method" title={EXECUTION_LOOP.title} intro={EXECUTION_LOOP.intro} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {EXECUTION_LOOP.steps.map((item, index) => <article key={item.step} className="rounded-2xl border border-line bg-white p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Step 0{index + 1}</p><h3 className="mt-2 text-base font-bold text-midnight">{item.step}</h3><p className="mt-2 text-xs leading-relaxed text-slate">{item.body}</p></article>)}
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Who we help" title="Built for growing teams that want cleaner execution." intro="From SMEs to corporate departments, our focus stays clear: eliminate friction and give decision makers live visibility." />
            <div className="mt-8 grid gap-4">{AUDIENCES.map((audience) => <article key={audience.title} className="rounded-2xl border border-line bg-cloud/50 p-5"><h3 className="text-base font-bold text-midnight">{audience.title}</h3><p className="mt-1 text-xs leading-relaxed text-slate">{audience.body}</p></article>)}</div>
          </div>
          <div>
            <SectionHeading eyebrow="Starting offers" title="Choose the next sensible starting point." intro="Use discovery for clarity, training for team capability, and a project build for immediate workflow automation." />
            <div className="mt-8 space-y-4">{OFFERS.map((offer) => <article key={offer.title} className="bento p-6"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-lg font-bold text-midnight">{offer.title}</h3><span className="chip border-blue/20 bg-blue/10 font-semibold text-blue">{offer.price}</span></div><p className="mt-2 text-xs leading-relaxed text-slate">{offer.body}</p><Link href={offer.href} className="btn-link mt-4 text-xs">{offer.cta}<span aria-hidden="true">→</span></Link></article>)}</div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
