import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const solutionData = {
  title: "Business Dashboard & Reporting Tool Nigeria",
  description:
    "Consolidate operational records from Excel, Google Sheets, forms, and databases into real-time executive dashboards for Nigerian business owners and leaders.",
  features: [
    "Unified Executive KPI Cards & Real-time Metrics",
    "Spreadsheet & Google Sheets Automatic Sync",
    "Interactive Departmental & Branch Filters",
    "Automated Weekly Executive Email Reports",
    "Role-based Confidential Data Access",
    "Exportable PDF & Excel Analytics Reports",
  ],
  path: "/solutions/business-dashboard-reporting",
};

export const metadata = buildMetadata({
  title: "Executive Business Dashboard & Reporting Software | Nexwavy Nigeria",
  description: solutionData.description,
  path: solutionData.path,
  ogTitle: "Business Dashboard & Reporting Systems | Nexwavy",
  ogDescription: "Turn scattered operational spreadsheets into clean, real-time executive decision dashboards.",
  ogImage: "/images/hero-automation.png",
});

export default function BusinessDashboardPage() {
  const jsonLd = buildSoftwareAppJsonLd(solutionData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Business Automation Solution"
        title="Business Dashboard & Reporting Tool"
        intro="Stop waiting days for manual weekly reports. Consolidate your sales, operations, attendance, and financials into a single real-time executive dashboard."
      />

      <Section className="pt-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="The Reporting Visibility Gap"
              title="Business owners operate in the dark when reports require hours of spreadsheet compilation."
              intro="By the time manual weekly or monthly reports reach decision makers, the data is outdated and critical issues have already cost the company money."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact?solution=dashboard"
                className="btn-primary"
                eventName="Solution CTA Click"
                eventData={{ solution: "business-dashboard" }}
              >
                Build Your Dashboard (From ₦500,000)
              </TrackedLink>
              <Link href="/solutions" className="btn-ghost">
                All Solutions
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-line shadow-2xl bg-cloud/50">
            <Image
              src="/images/reporting-dashboard.png"
              alt="Executive Business Dashboard Interface"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Dashboard Features"
          title="Designed for Executives & Operations Leaders"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionData.features.map((feature, i) => (
            <div key={feature} className="bento p-6 flex items-start gap-4">
              <span className="chip flex-shrink-0">0{i + 1}</span>
              <div>
                <h3 className="font-semibold text-midnight">{feature}</h3>
                <p className="mt-1 text-xs text-slate">Clear operational visibility without manual data entry fatigue.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold text-midnight md:text-3xl">
            Get instant clarity on your business performance.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate text-sm">
            We connect your existing spreadsheets or databases into a live dashboard in 10 business days.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact?solution=dashboard" className="btn-primary">
              Book Dashboard Consultation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
