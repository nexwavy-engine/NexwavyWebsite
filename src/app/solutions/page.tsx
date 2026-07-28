import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { buildMetadata } from "@/lib/seo";

const SOLUTIONS_HUB = [
  {
    slug: "staff-attendance-system",
    title: "Staff Attendance System",
    image: "/images/staff-attendance.png",
    subtitle: "Digital check-ins, location verification, and attendance payroll reports.",
    target: "Schools, SMEs, retail chains, and field teams.",
    price: "From ₦500,000",
  },
  {
    slug: "sales-inventory-tracker",
    title: "Sales & Inventory Tracker",
    image: "/images/sales-inventory.png",
    subtitle: "Real-time stock tracking, multi-branch sales entries, and restock alerts.",
    target: "Retail stores, pharmacies, and inventory-led businesses.",
    price: "From ₦500,000",
  },
  {
    slug: "approval-workflow-portal",
    title: "Approval Workflow Portal",
    image: "/images/approval-workflow.png",
    subtitle: "Automate internal requisitions, expense sign-offs, and memo approvals.",
    target: "Growing SMEs, institutions, and corporate teams.",
    price: "From ₦750,000",
  },
  {
    slug: "customer-order-management",
    title: "Customer & Order Management Portal",
    image: "/images/workflow-automation.png",
    subtitle: "Centralize customer tickets, job assignments, and order tracking.",
    target: "Service providers, agencies, and logistics companies.",
    price: "From ₦750,000",
  },
  {
    slug: "business-dashboard-reporting",
    title: "Business Dashboard & Reporting Tool",
    image: "/images/reporting-dashboard.png",
    subtitle: "Consolidate spreadsheets into a live executive KPI dashboard.",
    target: "Business owners, decision makers, and managers.",
    price: "From ₦500,000",
  },
];

export const metadata = buildMetadata({
  title: "Business Automation Solutions Nigeria | Nexwavy",
  description:
    "Explore Nexwavy's productized automation solutions: Staff Attendance, Sales & Inventory, Approval Workflows, Customer Management, and Business Dashboards.",
  path: "/solutions",
  ogTitle: "Business Automation Solutions | Nexwavy Nigeria",
  ogDescription: "Practical digital systems built for growing teams and SMEs in Nigeria.",
});

export default function SolutionsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Productized Solutions"
        title="Digital Systems Built for Business Operations"
        intro="Select a solution below to view full capabilities, feature breakdown, live interface preview, and implementation details."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS_HUB.map((solution, index) => (
            <article key={solution.slug} className="bento flex flex-col overflow-hidden p-6 hover:border-blue/40 transition-all">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line mb-5 bg-cloud/50">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="chip">Solution 0{index + 1}</span>
                <span className="text-xs font-semibold text-blue bg-cloud px-3 py-1 rounded-full border border-line">
                  {solution.price}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-midnight">{solution.title}</h2>
              <p className="mt-2 text-sm text-slate leading-relaxed flex-grow">{solution.subtitle}</p>

              <div className="mt-4 pt-4 border-t border-line/60">
                <p className="text-xs font-medium text-slate">
                  <strong className="text-midnight">Best for:</strong> {solution.target}
                </p>
              </div>

              <TrackedLink
                href={`/solutions/${solution.slug}`}
                className="btn-primary mt-6 w-full text-center"
                eventName="View Solution Page"
                eventData={{ solution: solution.slug }}
              >
                View Solution Details →
              </TrackedLink>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold text-midnight md:text-3xl">
            Need a custom workflow or system integration?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate text-sm">
            Book a paid discovery session with our technical team. We map your current manual process and design the simplest viable fix.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a Paid Discovery Session (₦100,000)
            </Link>
            <Link href="/services" className="btn-ghost">
              View Advisory Services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
