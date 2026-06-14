import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexwavy Solutions Ltd to discuss business automation, AI training, or IT advisory in Nigeria.",
};

const CONTACT_OPTIONS = [
  {
    title: "Book a Discovery Session",
    description: "For businesses that need clarity on what to automate or improve first.",
    href: "#contact-form",
    value: "business-automation",
  },
  {
    title: "Request AI Training",
    description: "For teams, schools, SMEs, and organizations that want practical AI productivity training.",
    href: "#contact-form",
    value: "ai-training",
  },
  {
    title: "Discuss Automation",
    description: "For businesses ready to replace manual tracking with a better system.",
    href: "#contact-form",
    value: "business-automation",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about the system your business needs next."
        intro="Whether you want to train your team, automate a workflow, review your current process, or build a digital solution, we can help you start with clarity."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <ContactForm />

          <aside className="grid content-start gap-4">
            {/* Contact options */}
            <div className="bento p-7">
              <h2 className="text-lg font-semibold text-midnight">How can we help?</h2>
              <div className="mt-4 grid gap-3">
                {CONTACT_OPTIONS.map((option) => (
                  <div
                    key={option.title}
                    className="rounded-2xl border border-line bg-cloud/50 p-4"
                  >
                    <p className="text-sm font-semibold text-midnight">{option.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div className="bento p-7">
              <h2 className="text-lg font-semibold text-midnight">Reach us directly</h2>
              <dl className="mt-4 grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cloud border border-line text-blue">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-xs text-slate">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-sm font-medium text-midnight transition-colors hover:text-blue"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cloud border border-line text-blue">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.45 2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-xs text-slate">Phone</dt>
                    <dd>
                      <a
                        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                        className="text-sm font-medium text-midnight transition-colors hover:text-blue"
                      >
                        {SITE.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cloud border border-line text-blue">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-xs text-slate">Location</dt>
                    <dd className="text-sm font-medium text-midnight">{SITE.location}</dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Training redirect */}
            <div className="rounded-[1.75rem] border border-line bg-midnight p-7">
              <p className="eyebrow mb-3 text-teal/80">AI Training</p>
              <h2 className="text-base font-semibold text-white">Looking to register for training?</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate/80">
                Register directly for the AI Productivity Masterclass and we&apos;ll follow up with confirmation and payment guidance.
              </p>
              <Link href="/register" className="btn mt-5 bg-white text-midnight hover:bg-cloud">
                Register for AI Training
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
