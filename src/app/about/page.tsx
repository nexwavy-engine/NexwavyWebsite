import type { Metadata } from "next";
import { CtaBand, PageHeader, Section, SectionHeading } from "@/components/Section";
import { ABOUT, SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Nexwavy Solutions Ltd, a business automation and AI productivity partner.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We help businesses move from manual effort to intelligent execution."
        intro={ABOUT.intro}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Who we are" title="Nexwavy exists to help businesses build better ways of working." />
            <p className="mt-5 text-base leading-relaxed text-slate">{ABOUT.whoWeAre}</p>
            <p className="mt-5 text-base leading-relaxed text-slate">{ABOUT.belief}</p>
          </div>

          <div className="grid gap-6">
            <div className="bento p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Mission</p>
              <p className="mt-3 text-base leading-relaxed text-slate">{ABOUT.mission}</p>
            </div>
            <div className="bento p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Vision</p>
              <p className="mt-3 text-base leading-relaxed text-slate">{ABOUT.vision}</p>
            </div>
            <div className="soft-band p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">At a glance</p>
              <dl className="mt-5 grid gap-4">
                <div>
                  <dt className="text-sm text-slate">Based in</dt>
                  <dd className="text-lg font-semibold text-midnight">{SITE.location}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate">Core focus</dt>
                  <dd className="text-lg font-semibold text-midnight">Business automation · AI productivity · IT advisory</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate">Geographic intent</dt>
                  <dd className="text-lg font-semibold text-midnight">Trusted systems partner for businesses across Africa</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="bento p-8 md:p-10">
          <SectionHeading
            eyebrow="Our approach"
            title="We begin with the business problem, not the technology."
            intro="Then we design practical systems that fit the client's reality and can grow with the business."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ABOUT.approach.map((step, index) => (
              <div
                key={step}
                className={`rounded-2xl border border-line bg-cloud/60 p-4 ${
                  index === ABOUT.approach.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">0{index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Founder-led"
          title="Led by people who understand operations, delivery, and transformation."
          intro="Nexwavy is led by founders with combined strengths across business operations, solution strategy, technology delivery, automation, and digital transformation."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ABOUT.founders.map((founder) => (
            <article key={founder.name} className="bento flex gap-5 p-7">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue text-lg font-bold text-white">
                {founder.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="text-lg font-semibold text-midnight">{founder.name}</p>
                <p className="text-sm font-medium text-blue">{founder.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand title="Let's build a smarter way for your business to work." body="Speak with Nexwavy about the workflow, visibility, or AI productivity challenge you want to fix next." />
    </>
  );
}
