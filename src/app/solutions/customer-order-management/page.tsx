import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const solutionData = {
  title: "Customer & Order Management Portal Nigeria",
  description:
    "Centralize customer records, service job requests, delivery tracking, and client follow-ups for service providers, logistics firms, and agencies.",
  features: [
    "Unified Client Database & Order History",
    "Service Ticket & Job Assignment Routing",
    "Client Portal for Progress Tracking & Receipts",
    "Automated SMS/Email Status Updates",
    "Billing & Invoice Generation",
    "Customer Support Resolution Analytics",
  ],
  path: "/solutions/customer-order-management",
};

export const metadata = buildMetadata({
  title: "Customer & Order Management Portal | Nexwavy Nigeria",
  description: solutionData.description,
  path: solutionData.path,
  ogTitle: "Customer & Order Management Portal | Nexwavy",
  ogDescription: "Clean client tracking, order fulfillment, and automated customer notifications.",
  ogImage: "/images/hero-automation.png",
});

export default function CustomerOrderManagementPage() {
  const jsonLd = buildSoftwareAppJsonLd(solutionData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Business Automation Solution"
        title="Customer & Order Management Portal"
        intro="Give your service team a single, clear system to manage customer inquiries, job assignments, delivery milestones, and payment records."
      />

      <Section className="pt-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="The Customer Support Gap"
              title="Scattered customer messages cause dropped orders, unhappy clients, and lost repeat business."
              intro="When client requests sit across multiple team member phones, orders are forgotten and managers lack visibility into job fulfillment."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact?solution=customer-order"
                className="btn-primary"
                eventName="Solution CTA Click"
                eventData={{ solution: "customer-order" }}
              >
                Discuss This Portal (From ₦750,000)
              </TrackedLink>
              <Link href="/solutions" className="btn-ghost">
                View Solutions
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-line shadow-2xl bg-cloud/50">
            <Image
              src="/images/workflow-automation.png"
              alt="Customer Order Management Portal Interface"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Portal Features"
          title="Designed for Service Businesses & Agencies"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionData.features.map((feature, i) => (
            <div key={feature} className="bento p-6 flex items-start gap-4">
              <span className="chip flex-shrink-0">0{i + 1}</span>
              <div>
                <h3 className="font-semibold text-midnight">{feature}</h3>
                <p className="mt-1 text-xs text-slate">Improves customer retention and team execution speed.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold text-midnight md:text-3xl">
            Streamline your customer fulfillment today.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate text-sm">
            Tailored to your specific client onboarding and order lifecycle steps.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact?solution=customer-order" className="btn-primary">
              Book a Portal Demo
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
