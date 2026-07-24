import Link from "next/link";
import Image from "next/image";
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
      <Section className="pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden relative min-h-[70vh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-signal/5 rounded-full blur-3xl -z-10" />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_rgba(45,140,255,0.8)]" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-blue/80">{HERO.statusLine}</p>
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-midnight md:text-6xl lg:text-7xl md:leading-[1] lg:tracking-tighter">
              {HERO.title.split(" ").slice(0, -3).join(" ")} <br/>
              <span className="text-blue">{HERO.title.split(" ").slice(-3).join(" ")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate/70 md:text-lg font-medium">
              Replace manual work with smarter systems. Free your teams to focus on growth.
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row">
              <Link href={HERO.primaryCta.href} className="btn-primary px-10 py-5 text-base">
                {HERO.primaryCta.label}
              </Link>
              <Link href={HERO.secondaryCta.href} className="btn-ghost px-10 py-5 text-base">
                {HERO.secondaryCta.label}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {HERO_LABELS.map((label) => (
                <span key={label} className="chip">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="soft-band p-1.5 bg-gradient-to-br from-white/80 to-blue/5 shadow-lift">
              <div className="rounded-[1.75rem] bg-white p-8 md:p-10">
                <div className="flex items-start justify-between gap-10">
                  <div className="max-w-[280px]">
                    <span className="eyebrow mb-4 inline-block">Operating Systems</span>
                    <h2 className="text-3xl font-bold tracking-tight text-midnight leading-tight">
                      Better systems for cleaner execution.
                    </h2>
                  </div>
                  <div className="relative h-40 w-40 shrink-0">
                    <Image
                      src="/images/business-automation-hero.png"
                      alt="Business automation system"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-12 space-y-5">
                  {["Requests captured", "Approvals tracked", "Reporting visible"].map((item, index) => (
                    <div key={item} className="flex items-center gap-5 p-5 rounded-2xl bg-cloud/40 border border-line/30 transition-all hover:bg-white hover:shadow-soft hover:scale-[1.02] group">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-sm font-bold text-white shadow-md shadow-blue/20 group-hover:bg-midnight transition-colors">
                        {index + 1}
                      </span>
                      <span className="text-base font-bold text-midnight/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Ambient decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-teal/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-10 right-10 h-40 w-40 bg-blue/10 rounded-full blur-3xl -z-10 animate-bounce-slow" />
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 py-10 border-y border-line/10 bg-cloud/20">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-midnight/30">Trusted Focus</span>
          {TRUST_AREAS.map((item) => (
            <span key={item} className="text-sm font-bold text-slate/50 hover:text-blue transition-colors cursor-default uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Modern Challenges" title={HOME_INTRO.title} intro={HOME_INTRO.body[0]} />
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate/70 font-medium">
              {HOME_INTRO.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/contact" className="btn-link text-base">
                Discuss Your Challenge <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <article key={problem.title} className="bento p-8 bg-gradient-to-br from-white/90 via-white to-cloud/30 border-error/20 hover:border-error/50 group">
                <h3 className="text-lg font-bold text-midnight mb-4 flex items-center gap-3 group-hover:text-error transition-colors">
                  <span className="h-2 w-2 rounded-full bg-error shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                  {problem.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-slate/75 font-medium">{problem.body}</p>
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
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <article key={item.title} className="bento group p-10 flex flex-col items-start bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-line/30 hover:from-white hover:to-white hover:border-blue/30">
              <div className="flex items-center justify-between w-full mb-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue to-signal text-sm font-bold text-white shadow-lg shadow-blue/30 group-hover:shadow-xl group-hover:scale-110 transition-all">
                  0{index + 1}
                </span>
                <span className="chip">
                  {item.statLabel}
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-midnight group-hover:text-blue transition-colors">{item.title}</h3>
              <p className="mt-6 text-[15px] leading-relaxed text-slate/70 font-medium">{item.body}</p>
              <div className="mt-auto pt-10">
                <Link href={item.href} className="btn-link">
                  {item.cta}
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="soft-band p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue via-signal to-blue opacity-20" />
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Practical Delivery"
                title="Simple, structured execution"
                intro="Clear steps from discovery to live systems."
              />
              <div className="mt-10 grid gap-4">
                {PROCESS.map((step, index) => (
                  <div key={step.step} className="group flex gap-4 rounded-2xl border border-line/20 bg-gradient-to-r from-white/60 to-white/20 px-6 py-4 hover:from-white hover:to-white/60 hover:shadow-soft hover:border-blue/30 transition-all">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-midnight to-blue text-xs font-black text-white">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-bold text-midnight group-hover:text-blue transition-colors">{step.step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/images/process-flow-illustration.png"
                alt="Process flow"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Why Nexwavy"
              title={WHY_NEXWAVY.title}
              intro={WHY_NEXWAVY.body}
            />
            <div className="mt-12 grid gap-4 grid-cols-2">
              {WHY_NEXWAVY.points.map((point) => (
                <div key={point} className="flex items-center gap-4 p-4 rounded-xl bg-blue/5 border border-blue/10">
                  <span className="h-2 w-2 rounded-full bg-blue shadow-[0_0_8px_rgba(48,105,176,0.5)]" />
                  <span className="text-[13px] font-bold text-midnight uppercase tracking-wide">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="soft-band p-10 md:p-14 bg-midnight text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue/20 rounded-full blur-3xl -z-10 group-hover:bg-blue/30 transition-colors" />
              <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
                <div>
                  <SectionHeading 
                    eyebrow="Featured Training" 
                    title={TRAINING_FEATURE.title} 
                    intro={TRAINING_FEATURE.body} 
                    dark={true}
                  />
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {TRAINING_FEATURE.outcomes.map((outcome) => (
                      <div key={outcome} className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors">
                        {outcome}
                      </div>
                    ))}
                  </div>
                  <Link href="/ai-training" className="btn-primary mt-12 bg-white text-midnight hover:bg-blue hover:text-white">
                    Explore The Curriculum
                  </Link>
                </div>
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/ai-training-visual.png"
                    alt="AI training visualization"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-20">
        <div className="mb-12">
          <SectionHeading
            eyebrow="What we build"
            title="Screen examples"
            intro=""
            center
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="bento group overflow-hidden border border-line/30 hover:border-blue/40">
            <div className="relative h-56 w-full bg-gradient-to-br from-cloud to-blue/5">
              <Image
                src="/images/dashboard-mockup.png"
                alt="Dashboard interface"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-bold text-midnight text-base">Analytics</h3>
              <p className="mt-1 text-xs text-slate/60 uppercase tracking-wide">Real-time metrics</p>
            </div>
          </div>
          <div className="bento group overflow-hidden border border-line/30 hover:border-signal/40">
            <div className="relative h-56 w-full bg-gradient-to-br from-cloud to-signal/5">
              <Image
                src="/images/approval-workflow.png"
                alt="Approval workflow"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-bold text-midnight text-base">Approvals</h3>
              <p className="mt-1 text-xs text-slate/60 uppercase tracking-wide">Clear decisions</p>
            </div>
          </div>
          <div className="bento group overflow-hidden border border-line/30 hover:border-teal/40">
            <div className="relative h-56 w-full bg-gradient-to-br from-cloud to-teal/5">
              <Image
                src="/images/inventory-system.png"
                alt="Inventory management"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-bold text-midnight text-base">Inventory</h3>
              <p className="mt-1 text-xs text-slate/60 uppercase tracking-wide">Stock control</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Built for businesses like"
              title="Your industry"
              intro="Less friction. Better systems."
            />
            <div className="mt-12 grid gap-5">
              {AUDIENCES.map((audience) => (
                <article key={audience.title} className="bento p-6 bg-gradient-to-r from-white/70 to-white/40 hover:from-white hover:to-white/80 border-blue/10 group">
                  <h3 className="text-base font-bold text-midnight group-hover:text-blue transition-colors">{audience.title}</h3>
                </article>
              ))}
            </div>
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="/images/system-integration.png"
              alt="System integration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
