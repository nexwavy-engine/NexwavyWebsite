import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader, Section, SectionHeading } from "@/components/Section";
import { DISCOVERY, PRODUCTIZED_OFFERS, SERVICE_FAQ, SERVICES } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Nexwavy's services: business automation, AI training, and IT advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Practical digital solutions for growing businesses."
        intro="We help businesses remove manual work, improve visibility, train their teams, and build smarter systems for daily operations."
      />

      <Section>
        <div className="grid gap-6">
          {SERVICES.map((service, index) => (
            <article key={service.id} className="bento grid gap-6 p-8 md:grid-cols-[1fr_1fr] md:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink">{service.title}</h2>
                <p className="mt-4 text-muted">{service.summary}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold">Client outcome</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.outcome}</p>
                <Link
                  href={service.id === "ai-training" ? "/ai-training" : "/contact"}
                  className="mt-6 inline-flex text-sm font-semibold text-accent hover:text-ink"
                >
                  {service.id === "ai-training" ? "Explore AI Training" : "Discuss This Service"}
                </Link>
              </div>

              <div className="grid gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">What we offer</p>
                  <ul className="mt-3 grid gap-3">
                    {service.points.map((point) => (
                      <li key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Best for</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.bestFor.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <SectionHeading
          eyebrow="Focused automation offers"
          title="Start with a focused solution."
          intro="Final pricing depends on scope, number of users, integrations, reporting needs, and support requirements."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTIZED_OFFERS.map((offer) => (
            <div key={offer.title} className="bento p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{offer.price}</p>
              <h3 className="mt-4 text-lg font-semibold text-ink">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{offer.body}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="btn-primary mt-8">
          Discuss an Automation Project
        </Link>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Paid discovery" title={DISCOVERY.title} intro={DISCOVERY.body} />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold">{DISCOVERY.fee}</p>
            <div className="mt-6 grid gap-3">
              {DISCOVERY.steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  <span className="mr-2 font-semibold text-accent">0{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-accent mt-8">
              Book a Discovery Session
            </Link>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Services FAQ" title="The questions most teams ask before we start." />
            <div className="mt-6 grid gap-4">
              {SERVICE_FAQ.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-base font-semibold text-ink">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
