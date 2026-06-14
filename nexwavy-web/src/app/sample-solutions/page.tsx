import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/Section";
import { SAMPLE_SOLUTIONS } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Sample Solutions",
  description: "Sample business automation solutions Nexwavy can build for growing businesses.",
};

export default function SampleSolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sample Solutions"
        title="Sample Solutions We Can Build"
        intro="Nexwavy helps businesses turn repeated manual work into structured digital systems. Below are examples of practical solutions we can design and build for growing teams."
      />

      <Section className="pt-8">
        <div className="soft-band p-7 text-sm leading-relaxed text-slate">
          As we complete our first pilot engagements, this section will be updated with verified client outcomes, testimonials, and before/after process improvements.
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {SAMPLE_SOLUTIONS.map((solution) => (
            <article key={solution.title} className="bento p-8">
              <p className="chip self-start">{solution.sector}</p>
              <h2 className="mt-4 text-xl font-semibold text-midnight">{solution.title}</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Problem</dt>
                  <dd className="mt-2 text-slate">{solution.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Solution</dt>
                  <dd className="mt-2 text-slate">{solution.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Key features</dt>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span key={feature} className="chip">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Outcome</dt>
                  <dd className="mt-2 font-medium text-midnight">{solution.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-midnight md:text-3xl">
            Have a process that looks like one of these?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate">
            Let's review it and identify whether it should be improved, automated, or rebuilt into a cleaner digital workflow.
          </p>
          <Link href="/contact" className="btn-primary mt-7">
            Book a Discovery Session
          </Link>
        </div>
      </Section>
    </>
  );
}
