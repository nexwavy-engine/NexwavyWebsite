import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const solutionData = {
  title: "Sales & Inventory Tracker Nigeria",
  description:
    "Real-time sales, multi-branch stock tracking, low-stock alerts, and daily revenue reporting for retail stores, pharmacies, and distributors in Nigeria.",
  features: [
    "Product Catalog & Multi-Location Stock Levels",
    "Real-time Daily Sales & Payment Recording",
    "Automated Low-Stock & Restock Alerts",
    "Branch-level Performance Comparison",
    "Profit Margin & Revenue Analytics",
    "Staff Sales Audit & Daily Cash Summary",
  ],
  path: "/solutions/sales-inventory-tracker",
};

export const metadata = buildMetadata({
  title: "Sales & Inventory Tracker for Retail & SMEs | Nexwavy Nigeria",
  description: solutionData.description,
  path: solutionData.path,
  ogTitle: "Digital Sales & Inventory Management Portal | Nexwavy",
  ogDescription: "Gain full control over stock levels, branch sales, and revenue reports without spreadsheet confusion.",
  ogImage: "/images/sales-inventory.png",
});

export default function SalesInventoryPage() {
  const jsonLd = buildSoftwareAppJsonLd(solutionData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Business Automation Solution"
        title="Sales & Inventory Tracker"
        intro="Give business owners and branch managers real-time visibility into sales, stock movements, and stockout risks across all locations."
      />

      <Section className="pt-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="The Inventory Problem"
              title="Unreconciled stock leads to stockouts, missing funds, and hidden inventory leakage."
              intro="When daily sales entries depend on manual notebooks or isolated Excel files, business owners cannot verify inventory levels or actual profits."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact?solution=inventory"
                className="btn-primary"
                eventName="Solution CTA Click"
                eventData={{ solution: "sales-inventory" }}
              >
                Discuss This Tracker (From ₦500,000)
              </TrackedLink>
              <Link href="/solutions" className="btn-ghost">
                Explore Other Solutions
              </Link>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-line shadow-2xl">
            <Image
              src="/images/sales-inventory.png"
              alt="Sales and Inventory Tracker Dashboard Interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Core Features"
          title="Designed for Retailers, Pharmacies & Distributors"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionData.features.map((feature, i) => (
            <div key={feature} className="bento p-6 flex items-start gap-4">
              <span className="chip flex-shrink-0">0{i + 1}</span>
              <div>
                <h3 className="font-semibold text-midnight">{feature}</h3>
                <p className="mt-1 text-xs text-slate">Streamlines daily reconciliation and reduces stock leakage.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold text-midnight md:text-3xl">
            Stop losing money to unrecorded sales and missing inventory.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate text-sm">
            We build and deploy your customized sales & stock tracker in under 14 days.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact?solution=inventory" className="btn-primary">
              Request Demo & Pricing
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
