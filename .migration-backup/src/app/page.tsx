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
  PROOF_NOTE,
  SITE,
  WHY_NEXWAVY,
} from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nexwavy Solutions Ltd — Business Automation & AI Training in Nigeria",
  description:
    "Nexwavy Solutions helps growing Nigerian businesses replace manual work with automation, practical AI training, and smarter digital systems.",
  path: "/",
  ogTitle: "Nexwavy Solutions Ltd — Business Automation & AI Training",
  ogDescription:
    "We help growing businesses replace manual work with automation, AI enablement, and practical productivity systems.",
});

const HERO_LABELS = [
  "Business Automation",
  "AI Training",
  "IT Advisory",
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-blue/80">{HERO.statusLine}</p>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-midnight md:text-6xl lg:text-7xl">
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate/75 md:text-xl">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={HERO.primaryCta.href} className="btn-primary px-8 py-4" eventName="Start a Project CTA click" eventData={{ location: "home-hero" }}>
                {HERO.primaryCta.label}
              </TrackedLink>
              <TrackedLink href={HERO.secondaryCta.href} external className="btn-ghost px-8 py-4" eventName="WhatsApp CTA click" eventData={{ location: "home-hero" }}>
                {HERO.secondaryCta.label}
              </TrackedLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {HERO_LABELS.map((label) => (
                <span key={label} className="chip">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="soft-band p-4 md:p-6">
            <div className="rounded-[2rem] bg-white p-6 md:p-8">
              <div className="flex items-center justify-between gap-6 border-b border-line/20 pb-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Illustrative workflow</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-midnight">Manual work becomes visible, trackable, and easier to manage.</h2>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue text-lg font-bold text-white">
                  N
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  ["Requests captured", "Form or portal"],
                  ["Approvals tracked", "Clear status"],
                  ["Reporting visible", "Simple dashboard"],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-2xl border border-line bg-cloud/40 p-5">
                    <p className="text-sm font-semibold text-midnight">{title}</p>
                    <p className="mt-1 text-sm text-slate">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-midnight px-5 py-4 text-sm text-white/80">
                Example use cases: approvals, attendance, request intake, field reports, dashboards, and simple internal portals.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Modern Challenges" title={HOME_INTRO.title} intro={HOME_INTRO.body[0]} />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate/75 md:text-lg">
              {HOME_INTRO.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <article key={problem.title} className="bento p-8">
                <h3 className="text-lg font-bold text-midnight">{problem.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What Nexwavy does"
          title="Business automation first. AI training and advisory where they support better execution."
          intro="Nexwavy helps growing businesses move from manual operations to structured digital execution — through automation, AI training, and IT advisory."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className="bento flex flex-col p-8">
              <h3 className="text-2xl font-bold tracking-tight text-midnight">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">{item.body}</p>
              <Link href={item.href} className="btn-link mt-8">
                {item.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Why Nexwavy" title={WHY_NEXWAVY.title} intro={WHY_NEXWAVY.body} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHY_NEXWAVY.points.map((point) => (
                <div key={point} className="rounded-2xl border border-blue/10 bg-blue/5 px-4 py-4 text-sm font-semibold text-midnight">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="soft-band p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Proof note</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-midnight">{PROOF_NOTE.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate">{PROOF_NOTE.body}</p>
            <div className="mt-8 rounded-2xl border border-line bg-white px-5 py-4 text-sm text-slate">
              We will only publish verified outcomes, lessons, and client-approved case notes.
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 md:p-16">
          <SectionHeading
            eyebrow="The Nexwavy Method"
            title={EXECUTION_LOOP.title}
            intro={EXECUTION_LOOP.intro}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {EXECUTION_LOOP.steps.map((item, index) => (
              <article key={item.step} className="rounded-3xl border border-line bg-white/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-midnight">{item.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who we help"
              title="Built for growing teams that want cleaner execution."
              intro="From SMEs to corporate departments, the focus stays the same: less manual friction, more visibility, and better day-to-day control."
            />
            <div className="mt-10 grid gap-5">
              {AUDIENCES.map((audience) => (
                <article key={audience.title} className="rounded-3xl border border-line bg-white/70 p-6">
                  <h3 className="text-lg font-bold text-midnight">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{audience.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Starting offers"
              title="Choose the next sensible starting point."
              intro="Use discovery when you need clarity, training when your team needs capability, and a project conversation when the workflow already needs a build."
            />
            <div className="mt-10 space-y-5">
              {OFFERS.map((offer) => (
                <article key={offer.title} className="bento p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-midnight">{offer.title}</h3>
                    <span className="chip bg-blue/10 border-blue/20">{offer.price}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate">{offer.body}</p>
                  <Link href={offer.href} className="btn-link mt-6">
                    {offer.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-[2rem] border border-line/50 bg-white/70 px-6 py-6 text-sm text-slate backdrop-blur-sm md:px-8">
          <span className="font-semibold text-midnight">{SITE.whatsappLabel}:</span>{" "}
          If you already know what workflow you want to fix, you can speak with us directly before filling any form.
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
