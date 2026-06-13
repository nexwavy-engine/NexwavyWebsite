import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nexwavy Solutions Ltd to discuss automation, AI training, or IT advisory.",
};

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

          <aside className="grid content-start gap-5">
            <div className="bento p-7">
              <h2 className="text-lg font-semibold text-ink">Contact options</h2>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-ink">Book a Discovery Session</p>
                  <p className="mt-1 text-muted">For businesses that need clarity on what to automate or improve first.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-ink">Request AI Training</p>
                  <p className="mt-1 text-muted">For teams, schools, SMEs, and organizations that want practical AI productivity training.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-ink">Discuss Automation</p>
                  <p className="mt-1 text-muted">For businesses ready to replace manual tracking with a better system.</p>
                </div>
              </div>
            </div>

            <div className="bento p-7">
              <h2 className="text-lg font-semibold text-ink">Reach us directly</h2>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd>
                    <a className="font-medium text-ink hover:text-accent" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Phone</dt>
                  <dd className="font-medium text-ink">{SITE.phone}</dd>
                </div>
                <div>
                  <dt className="text-muted">Location</dt>
                  <dd className="font-medium text-ink">{SITE.location}</dd>
                </div>
              </dl>
            </div>

            <div className="bento bg-gradient-to-br from-tide/70 via-night-2/90 to-night p-7 text-white">
              <h2 className="text-lg font-semibold">Looking for training?</h2>
              <p className="mt-2 text-sm text-muted">
                If you're here for the AI Productivity Masterclass, you can register directly and we'll follow up with confirmation and payment guidance.
              </p>
              <a href="/register" className="btn-primary mt-5">
                Register for AI Training
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
