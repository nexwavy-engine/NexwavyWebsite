import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader, Section, SectionHeading } from "@/components/Section";
import { DISCOVERY, PRODUCTIZED_OFFERS, SERVICE_FAQ, SERVICES } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Nexwavy's services: business automation, AI training, and IT advisory for growing businesses in Nigeria.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Practical digital solutions for growing businesses."
        intro="We help businesses remove manual work, improve visibility, train their teams, and build smarter systems for daily operations."
      />

      {/* ── Service cards ── */}
      <Section>
        <div className="grid gap-6">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="bento grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:p-10"
            >
              <div className="flex h-full flex-col">
                <div>
                  <p className="eyebrow mb-3">
                    0{index + 1} / {SERVICES.length}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-midnight">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate">{service.summary}</p>

                  <div className="mt-6 rounded-2xl border border-line bg-blue/4 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                      Client outcome
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-midnight">{service.outcome}</p>
                  </div>
                </div>
                <Link
                  href={service.id === "ai-training" ? "/ai-training" : "/contact"}
                  className="btn-primary mt-8 self-start"
                >
                  {service.id === "ai-training" ? "Explore AI Training" : "Discuss This Service"}
                </Link>
              </div>

              <div className="grid gap-6 content-start">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-midnight">
                    What we offer
                  </p>
                  <ul className="grid gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-cloud/50 px-4 py-2.5 text-sm text-slate"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-midnight">
                    Best for
                  </p>
                  <div className="flex flex-wrap gap-2">
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

      {/* ── Productized offers ── */}
      <Section className="py-12">
        <SectionHeading
          eyebrow="Focused automation offers"
          title="Start with a focused solution."
          intro="Final pricing depends on scope, number of users, integrations, reporting needs, and support requirements."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTIZED_OFFERS.map((offer) => (
            <article key={offer.title} className="bento p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offer.price}</p>
              <h3 className="mt-4 text-lg font-semibold text-midnight">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{offer.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Discuss an Automation Project
          </Link>
        </div>
      </Section>

      {/* ── Discovery + FAQ ── */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-line bg-midnight p-8 md:p-10">
            <p className="eyebrow mb-4 text-teal/80">Paid discovery</p>
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              {DISCOVERY.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate/80">{DISCOVERY.body}</p>
            <p className="mt-5 text-lg font-semibold text-white">{DISCOVERY.fee}</p>
            <div className="mt-5 grid gap-2">
              {DISCOVERY.steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-2.5 text-sm text-white/80"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn mt-8 bg-white text-midnight hover:bg-cloud">
              Book a Discovery Session
            </Link>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="FAQ" title="The questions most teams ask before we start." />
            <div className="mt-6 grid gap-3">
              {SERVICE_FAQ.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-line bg-cloud/50 px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-midnight">
                    {item.question}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-white text-slate transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
