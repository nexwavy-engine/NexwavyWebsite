import { CtaBand, PageHeader, Section, SectionHeading } from "@/components/Section";
import { ABOUT, SITE } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Nexwavy Solutions | Automation & AI Partner in Lagos",
  description:
    "Learn about Nexwavy Solutions Ltd — a Lagos-based business automation, AI productivity, and IT advisory firm helping teams work smarter.",
  path: "/about",
  ogTitle: "About Nexwavy Solutions",
  ogDescription:
    "A Lagos-based business automation, AI productivity, and IT advisory firm helping teams move from manual effort to intelligent execution.",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We help businesses move from manual effort to structured digital execution."
        intro={ABOUT.intro}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="What We Do" title="Nexwavy exists to help teams work with more structure and better visibility." />
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
                  <dd className="text-lg font-semibold text-midnight">Business automation · AI training · IT advisory</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate">Geographic intent</dt>
                  <dd className="text-lg font-semibold text-midnight">Building practical digital systems for businesses across Africa</dd>
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
            title="We begin with the workflow, not the software."
            intro="That keeps the solution grounded in the work the team actually does every day."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ABOUT.approach.map((step, index) => (
              <div key={step} className="rounded-2xl border border-line bg-cloud/60 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">0{index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="Team"
              title="Led by founders who understand operations, delivery, and digital systems."
              intro={ABOUT.teamCopy}
            />
          </div>
          <div className="grid gap-6">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand title="Ready to clean up the way work moves in your business?" body="Start with a focused conversation about the workflow, visibility, or reporting issue you want to improve next." />
    </>
  );
}
