import Link from "next/link";
import { PageHeader, Section } from "@/components/Section";
import { SOLUTION_EXAMPLES } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sample Solutions We Build | Nexwavy Solutions",
  description:
    "Attendance systems, sales & inventory trackers, approval workflows, and dashboards — examples of digital systems Nexwavy can build for your team.",
  path: "/solutions",
  ogTitle: "Sample Solutions We Build",
  ogDescription:
    "Examples of practical digital systems Nexwavy can design and build for growing teams.",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Sample solutions we can design and build."
        intro="These are examples of the kinds of systems Nexwavy can design and build for growing teams. Each solution starts with the same question: what work is currently slow, scattered, or hard to track?"
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {SOLUTION_EXAMPLES.map((solution, index) => (
            <article key={solution.title} className="bento overflow-hidden p-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-midnight">{solution.title}</h2>
                <span className="chip">0{index + 1}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">{solution.body}</p>

              {"sampleRows" in solution && solution.sampleRows ? (
                <div className="mt-6 rounded-[1.5rem] border border-line bg-cloud/55 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{solution.label}</p>
                  <div className="mt-4 grid gap-3">
                    {solution.sampleRows.map((row: string) => (
                      <div key={row} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-midnight">
                        {row}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-midnight md:text-3xl">
            Have a workflow that feels slow, scattered, or hard to report on?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate">
            Let&apos;s review it and decide whether the right next step is a cleaner process, a lighter tool, or a custom system.
          </p>
          <Link href="/contact" className="btn-primary mt-7">
            Start a Project
          </Link>
        </div>
      </Section>
    </>
  );
}
