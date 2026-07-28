import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const solutionData = {
  title: "Approval Workflow Portal Nigeria",
  description:
    "Digitize internal request approvals, financial requisitions, and operational sign-offs with automatic routing, audit trails, and status tracking for Nigerian SMEs and institutions.",
  features: [
    "Custom Form Builders for Expense & Requisition Requests",
    "Multi-tier Manager Approval Workflows",
    "Automated Email & WhatsApp Status Notifications",
    "Full Audit Trail & Timestamped Sign-off Records",
    "Role-based Access & Budget Limits",
    "Management Bottleneck Analytics Dashboard",
  ],
  path: "/solutions/approval-workflow-portal",
};

export const metadata = buildMetadata({
  title: "Approval Workflow & Requisition Portal | Nexwavy Nigeria",
  description: solutionData.description,
  path: solutionData.path,
  ogTitle: "Digital Approval Workflow Portal | Nexwavy",
  ogDescription: "Eliminate paperwork bottlenecks and chat-based approval delays with automated routing and audit trails.",
  ogImage: "/images/hero-automation.png",
});

export default function ApprovalWorkflowPage() {
  const jsonLd = buildSoftwareAppJsonLd(solutionData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Business Automation Solution"
        title="Approval Workflow Portal"
        intro="Move internal requests, budget approvals, and memo sign-offs out of messy WhatsApp threads into a clean, trackable approval portal."
      />

      <Section className="pt-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="The Approval Friction"
              title="Requests get stuck in chats and email threads without clear accountability or timeline."
              intro="When business approvals take days because executives are out of office or messages get buried, company operations grind to a halt."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact?solution=approval"
                className="btn-primary"
                eventName="Solution CTA Click"
                eventData={{ solution: "approval-workflow" }}
              >
                Discuss This Portal (From ₦750,000)
              </TrackedLink>
              <Link href="/solutions" className="btn-ghost">
                All Solutions
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-line shadow-2xl bg-cloud/50">
            <Image
              src="/images/approval-workflow.png"
              alt="Approval Workflow System Interface"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title="Automate Approvals Across Departments"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionData.features.map((feature, i) => (
            <div key={feature} className="bento p-6 flex items-start gap-4">
              <span className="chip flex-shrink-0">0{i + 1}</span>
              <div>
                <h3 className="font-semibold text-midnight">{feature}</h3>
                <p className="mt-1 text-xs text-slate">Reduces approval cycle time from days to minutes.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold text-midnight md:text-3xl">
            Speed up your company's decision making and approvals.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate text-sm">
            Custom-configured to match your existing organizational chart and financial delegation rules.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact?solution=approval" className="btn-primary">
              Schedule Workflow Consultation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
