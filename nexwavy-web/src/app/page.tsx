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

export default function HomePage() {
  return (
    <>
      <Section className="pt-20 md:pt-24">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="chip mb-5">{HERO.statusLine}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl">
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
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
            <p className="mt-6 text-sm text-muted">{HERO.trustLine}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bento col-span-2 overflow-hidden p-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Operating reality</p>
              <p className="mt-3 text-2xl font-semibold leading-snug text-ink">
                From WhatsApp threads, spreadsheets, and manual approvals to one practical operating system.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-muted sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-ink">Faster work</p>
                  <p className="mt-1">Cut repetitive follow-up and admin drag.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-ink">Clearer visibility</p>
                  <p className="mt-1">See what is happening without chasing updates.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-ink">Smarter adoption</p>
                  <p className="mt-1">Roll out AI with practical guardrails.</p>
                </div>
              </div>
            </div>

            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="bento p-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">{item.statLabel}</p>
                <p className="mt-2 text-2xl font-bold text-ink">{item.stat}</p>
                <p className="mt-4 text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                <Link href={item.href} className="mt-5 inline-flex text-sm font-semibold text-accent hover:text-ink">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Why now" title={HOME_INTRO.title} />
            <div className="mt-5 grid gap-4 text-base leading-relaxed text-muted">
              {HOME_INTRO.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <div key={problem.title} className="bento p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{problem.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{problem.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What Nexwavy does"
          title="We design better ways for businesses to work."
          intro="Business automation, AI-enabled workflows, practical training, and advisory grounded in real operations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="bento flex flex-col p-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">{item.statLabel}</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              <Link href={item.href} className="mt-6 text-sm font-semibold text-accent hover:text-ink">
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Who we help"
              title="Built for growing businesses and teams that want better execution."
              intro="We work best with organizations that are ready to move from scattered effort to structured execution."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {AUDIENCES.map((audience) => (
              <div key={audience.title} className="bento p-6">
                <h3 className="text-base font-semibold text-ink">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{audience.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Starting offers"
          title="Start with a clear, practical offer."
          intro="Choose the entry point that fits the problem you need to solve next."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {OFFERS.map((offer) => (
            <div key={offer.title} className="bento flex flex-col p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{offer.price}</p>
              <h3 className="mt-4 text-lg font-semibold text-ink">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{offer.body}</p>
              <Link href={offer.href} className="mt-6 text-sm font-semibold text-gold hover:text-ink">
                {offer.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Featured AI training" title={TRAINING_FEATURE.title} intro={TRAINING_FEATURE.body} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {TRAINING_FEATURE.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  {outcome}
                </div>
              ))}
            </div>
            <Link href="/ai-training" className="btn-accent mt-8">
              Explore AI Training
            </Link>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="How we work" title="A simple process. Clear outcomes." />
            <div className="mt-6 grid gap-4">
              {PROCESS.map((step, index) => (
                <div key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                    0{index + 1} · {step.step}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bento grid gap-8 p-8 md:grid-cols-[1fr_0.9fr] md:p-12">
          <div>
            <SectionHeading eyebrow="Why Nexwavy" title={WHY_NEXWAVY.title} intro={WHY_NEXWAVY.body} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {WHY_NEXWAVY.points.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-ink">
                {point}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
