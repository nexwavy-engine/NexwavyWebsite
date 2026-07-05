import Link from "next/link";
import { CtaBand, PageHeader, Section, SectionHeading } from "@/components/Section";
import { BUILD_VS_BUY, DISCOVERY, SERVICE_CATEGORIES, SERVICE_FAQ } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Automation, AI Training & IT Advisory | Nexwavy",
  description:
    "Custom business automation, practical AI training, and IT advisory for Nigerian SMEs, schools, and growing teams. See what Nexwavy builds.",
  path: "/services",
  ogTitle: "Nexwavy Services — Automation, AI Training & IT Advisory",
  ogDescription:
    "Practical digital tools, AI enablement, and technology advisory for teams that need more structure and better visibility.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="We help teams clean up the way work moves."
        intro="From requests and approvals to reporting, training, and day-to-day tracking, Nexwavy helps businesses replace scattered manual effort with clearer systems."
      />

      <Section>
        <div className="grid gap-6">
          {SERVICE_CATEGORIES.map((service) => (
            <article key={service.id} className="bento grid gap-6 p-8 md:grid-cols-[1fr_1fr] md:p-10">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-midnight">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate">{service.summary}</p>
                <Link href={service.id === "ai-productivity-training" ? "/ai-training" : "/contact"} className="btn-link mt-6">
                  {service.id === "ai-productivity-training" ? "Explore AI Training" : "Discuss This Service"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-midnight">What this can cover</p>
                <ul className="mt-4 grid gap-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-line bg-cloud/60 px-4 py-3 text-sm text-slate">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="soft-band p-8 md:p-10">
            <SectionHeading eyebrow="Build versus buy" title={BUILD_VS_BUY.title} intro={BUILD_VS_BUY.body} />
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Paid discovery" title={DISCOVERY.title} intro={DISCOVERY.body} />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-blue">{DISCOVERY.fee}</p>
            <div className="mt-6 grid gap-3">
              {DISCOVERY.steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-line bg-cloud/55 px-4 py-3 text-sm text-slate">
                  <span className="mr-2 font-semibold text-blue">0{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Discovery Session
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bento p-8 md:p-10">
          <SectionHeading eyebrow="Services FAQ" title="Questions teams usually ask before we begin." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SERVICE_FAQ.map((item) => (
              <div key={item.question} className="rounded-2xl border border-line bg-cloud/55 p-5">
                <h3 className="text-base font-semibold text-midnight">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
