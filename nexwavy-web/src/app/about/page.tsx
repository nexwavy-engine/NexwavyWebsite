import type { Metadata } from "next";
import { CtaBand, PageHeader, Section, SectionHeading } from "@/components/Section";
import { ABOUT, SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nexwavy Solutions Ltd — a business automation, AI productivity, and digital transformation company based in Lagos, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We help businesses move from manual effort to intelligent execution."
        intro={ABOUT.intro}
      />

      {/* ── Who we are ── */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Who we are" title="Nexwavy exists to help businesses build better ways of working." />
            <p className="mt-5 text-base leading-relaxed text-slate">{ABOUT.whoWeAre}</p>
            <p className="mt-5 text-base leading-relaxed text-slate">{ABOUT.belief}</p>
          </div>

          <div className="grid gap-4">
            <div className="bento p-7">
              <p className="eyebrow mb-3">Mission</p>
              <p className="text-base leading-relaxed text-slate">{ABOUT.mission}</p>
            </div>
            <div className="bento p-7">
              <p className="eyebrow mb-3">Vision</p>
              <p className="text-base leading-relaxed text-slate">{ABOUT.vision}</p>
            </div>
            <div className="rounded-[1.75rem] border border-line bg-midnight p-7">
              <p className="eyebrow mb-4 text-teal/80">At a glance</p>
              <dl className="grid gap-4">
                <div>
                  <dt className="text-xs text-slate/70 uppercase tracking-wide">Based in</dt>
                  <dd className="mt-0.5 text-base font-semibold text-white">{SITE.location}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate/70 uppercase tracking-wide">Core focus</dt>
                  <dd className="mt-0.5 text-base font-semibold text-white">Business automation · AI productivity · IT advisory</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate/70 uppercase tracking-wide">Geographic intent</dt>
                  <dd className="mt-0.5 text-base font-semibold text-white">Trusted systems partner for businesses across Africa</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Our approach ── */}
      <Section className="py-12">
        <div className="bento p-8 md:p-12">
          <SectionHeading
            eyebrow="Our approach"
            title="We begin with the business problem, not the technology."
            intro="Then we design practical systems that fit the client's reality and can grow with the business."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {ABOUT.approach.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-line bg-cloud/60 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-midnight font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Founders ── */}
      <Section>
        <SectionHeading
          eyebrow="Founder-led"
          title="Led by people who understand operations, delivery, and transformation."
          intro="Nexwavy is led by founders with combined strengths across business operations, solution strategy, technology delivery, automation, and digital transformation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ABOUT.founders.map((founder) => (
            <article key={founder.name} className="bento p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue text-lg font-bold text-white" aria-hidden="true">
                  {founder.name
                    .split(" ")
                    .map((part: string) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-lg font-semibold text-midnight">{founder.name}</p>
                  <p className="text-sm font-medium text-blue">{founder.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate">{founder.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Let's build a smarter way for your business to work."
        body="Speak with Nexwavy about the workflow, visibility, or AI productivity challenge you want to fix next."
      />
    </>
  );
}
