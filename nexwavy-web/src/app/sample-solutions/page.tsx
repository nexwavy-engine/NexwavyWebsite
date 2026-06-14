import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/Section";
import { SAMPLE_SOLUTIONS } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Sample Solutions",
  description:
    "Sample business automation solutions Nexwavy can build for growing businesses in Nigeria.",
};

export default function SampleSolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sample Solutions"
        title="Sample Solutions We Can Build"
        intro="Nexwavy helps businesses turn repeated manual work into structured digital systems. Below are examples of practical solutions we can design and build for growing teams."
      />

      {/* Coming soon notice */}
      <Section className="pt-8 pb-4">
        <div className="flex items-start gap-4 rounded-2xl border border-blue/20 bg-blue/5 px-6 py-5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3069B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm leading-relaxed text-slate">
            As we complete our first pilot engagements, this section will be updated with verified client outcomes, testimonials, and before/after process improvements.
          </p>
        </div>
      </Section>

      {/* Solution cards */}
      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {SAMPLE_SOLUTIONS.map((solution) => (
            <article key={solution.title} className="bento p-8">
              <div className="mb-4 inline-flex">
                <span className="chip">{solution.sector}</span>
              </div>
              <h2 className="text-xl font-semibold text-midnight">{solution.title}</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="eyebrow mb-2">Problem</dt>
                  <dd className="leading-relaxed text-slate">{solution.problem}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Solution</dt>
                  <dd className="leading-relaxed text-slate">{solution.solution}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Key features</dt>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-line bg-cloud/70 px-3 py-1 text-xs font-medium text-midnight"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-blue/4 px-5 py-4">
                  <dt className="eyebrow mb-1">Outcome</dt>
                  <dd className="text-sm font-medium text-midnight">{solution.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="overflow-hidden rounded-[2rem] bg-midnight px-10 py-12 text-center md:px-16 md:py-16">
          <p className="eyebrow mb-4 text-teal/80">Start a conversation</p>
          <h2 className="mx-auto max-w-2xl text-balance text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
            Have a process that looks like one of these?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate/80">
            {"Let's"} review it and identify whether it should be improved, automated, or rebuilt into a cleaner digital workflow.
          </p>
          <Link href="/contact" className="btn mt-8 bg-white text-midnight hover:bg-cloud">
            Book a Discovery Session
          </Link>
        </div>
      </Section>
    </>
  );
}
