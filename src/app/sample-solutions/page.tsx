import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { SAMPLE_SOLUTIONS } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Business automation solutions we build for growing businesses.",
};

const SOLUTION_VISUALS = {
  "Attendance and Staff Management": "/images/dashboard-mockup.png",
  "Sales Tracking and Reporting": "/images/reporting-dashboard.png",
  "Request and Approval System": "/images/approval-workflow.png",
  "Inventory and Stock Management": "/images/inventory-system.png",
};

export default function SampleSolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="What we build"
        intro="Digital systems that replace manual work"
      />

      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {SAMPLE_SOLUTIONS.map((solution) => (
            <article key={solution.title} className="bento group overflow-hidden border border-line/30">
              <div className="relative h-56 w-full bg-gradient-to-br from-cloud via-white to-blue/5 overflow-hidden">
                <Image
                  src={SOLUTION_VISUALS[solution.title as keyof typeof SOLUTION_VISUALS] || "/images/dashboard-mockup.png"}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-20" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-midnight">{solution.title}</h3>
                  <span className="chip text-xs">{solution.sector}</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-blue mb-1">Challenge</dt>
                    <dd className="text-slate/80">{solution.problem}</dd>
                  </div>
                  <div className="pt-2 border-t border-line/20">
                    <dt className="text-xs font-bold uppercase tracking-wider text-signal mb-2">Includes</dt>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="chip text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="Discovery to delivery"
              intro=""
            />
            <div className="mt-8 space-y-3">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">1</div>
                <div>
                  <p className="font-bold text-midnight">Review your workflow</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">2</div>
                <div>
                  <p className="font-bold text-midnight">Design the system</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">3</div>
                <div>
                  <p className="font-bold text-midnight">Build and test</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">4</div>
                <div>
                  <p className="font-bold text-midnight">Train and launch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="/images/workflow-automation.png"
              alt="Workflow automation"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-bold text-midnight md:text-3xl">
            Ready to build something better?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate/80 font-medium">
            Book a discovery session to discuss your specific workflow and explore what we can build.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Book Discovery Session
          </Link>
        </div>
      </Section>
    </>
  );
}
