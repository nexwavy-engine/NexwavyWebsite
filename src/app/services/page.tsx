import Link from "next/link";
import { CtaBand, PageHeader, Section, SectionHeading } from "@/components/Section";
import { BUILD_VS_BUY, DISCOVERY, SERVICE_CATEGORIES, SERVICE_FAQ } from "@/lib/content/site";
import { buildFAQJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Business Automation & IT Advisory Services Lagos | Nexwavy Nigeria",
  description:
    "Explore Nexwavy's services in business automation, custom software, practical corporate AI training, and IT consulting for Nigerian SMEs and growing enterprises.",
  path: "/services",
  ogTitle: "Nexwavy Services — Automation, AI Training & IT Advisory Lagos",
  ogDescription:
    "Practical digital tools, AI productivity enablement, and technology advisory for teams that need structure and real-time visibility.",
  ogImage: "/images/hero-automation.png",
});

export default function ServicesPage() {
  const faqSchema = buildFAQJsonLd(SERVICE_FAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow="Services & Advisory"
        title="We help teams clean up the way work moves."
        intro="From request tracking and approvals to reporting, training, and day-to-day operations, Nexwavy replaces scattered manual effort with reliable systems."
      />

      <Section>
        <div className="grid gap-6">
          {SERVICE_CATEGORIES.map((service) => (
            <article key={service.id} className="bento grid gap-6 p-8 md:grid-cols-[1fr_1fr] md:p-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-midnight">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{service.summary}</p>
                <Link href={service.id === "ai-productivity-training" ? "/ai-training" : "/solutions"} className="btn-link mt-6">
                  {service.id === "ai-productivity-training" ? "Explore AI Training Tracks →" : "View Productized Solutions →"}
                </Link>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-midnight">Coverage & Scope</p>
                <ul className="mt-3 grid gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-xl border border-line bg-cloud/60 px-4 py-2.5 text-xs font-medium text-slate">
                      ✓ {bullet}
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
            <SectionHeading eyebrow="Pragmatic Philosophy" title={BUILD_VS_BUY.title} intro={BUILD_VS_BUY.body} />
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Paid Discovery" title={DISCOVERY.title} intro={DISCOVERY.body} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue">{DISCOVERY.fee}</p>
            <div className="mt-4 grid gap-2">
              {DISCOVERY.steps.map((step, index) => (
                <div key={step} className="rounded-xl border border-line bg-cloud/55 px-4 py-2.5 text-xs text-midnight">
                  <span className="mr-2 font-bold text-blue">0{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary mt-6">
              Book a Paid Discovery Session
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bento p-8 md:p-10">
          <SectionHeading eyebrow="Services FAQ" title="Questions teams usually ask before we begin." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {SERVICE_FAQ.map((item) => (
              <div key={item.question} className="rounded-2xl border border-line bg-cloud/55 p-5">
                <h3 className="text-sm font-bold text-midnight">{item.question}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
