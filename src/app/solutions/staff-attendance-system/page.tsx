import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const solutionData = {
  title: "Staff Attendance System Nigeria",
  description:
    "Replace paper check-ins and WhatsApp attendance messages with a modern, location-verified digital attendance app for schools, retail, and field teams in Nigeria.",
  features: [
    "Staff Profiles & Biometric/PIN Check-in",
    "Live Location & Time Verification",
    "Admin Real-time Presence Dashboard",
    "Automated Attendance & Lateness Reports",
    "Exportable Monthly Payroll CSV Data",
    "Custom Work Shift & Exception Rules",
  ],
  path: "/solutions/staff-attendance-system",
};

export const metadata = buildMetadata({
  title: "Staff Attendance System for Schools & Field Teams | Nexwavy Nigeria",
  description: solutionData.description,
  path: solutionData.path,
  ogTitle: "Digital Staff Attendance & Check-In System | Nexwavy",
  ogDescription: "Digitalize employee check-ins, location tracking, and payroll attendance reporting.",
  ogImage: "/images/staff-attendance.png",
});

export default function StaffAttendancePage() {
  const jsonLd = buildSoftwareAppJsonLd(solutionData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Business Automation Solution"
        title="Staff Attendance & Check-In System"
        intro="Move from manual sign-in sheets and unverified WhatsApp messages to a clean, reliable attendance portal built for schools, SMEs, retail, and field teams."
      />

      <Section className="pt-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="The Problem We Solve"
              title="Manual attendance records lead to buddy punching, delayed reports, and lost admin hours."
              intro="When staff sign-ins depend on paper logs or chat groups, managers spend hours reconciling attendance before payroll."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact?solution=attendance"
                className="btn-primary"
                eventName="Solution CTA Click"
                eventData={{ solution: "staff-attendance" }}
              >
                Discuss This Solution (From ₦500,000)
              </TrackedLink>
              <Link href="/solutions" className="btn-ghost">
                View All Solutions
              </Link>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-line shadow-2xl">
            <Image
              src="/images/staff-attendance.png"
              alt="Staff Attendance System Dashboard Interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="System Capabilities"
          title="Key Features Built for Real Operations"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionData.features.map((feature, i) => (
            <div key={feature} className="bento p-6 flex items-start gap-4">
              <span className="chip flex-shrink-0">0{i + 1}</span>
              <div>
                <h3 className="font-semibold text-midnight">{feature}</h3>
                <p className="mt-1 text-xs text-slate">Built for high dependability and minimal internet data usage.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold text-midnight md:text-3xl">
            Ready to digitize staff attendance for your organization?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate text-sm">
            We configure the system to fit your shifts, locations, and attendance policy within 2 weeks.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact?solution=attendance" className="btn-primary">
              Book a Setup Consultation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
