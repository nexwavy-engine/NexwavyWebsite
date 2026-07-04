import { PageHeader, Section } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Nexwavy Solutions | Start a Project",
  description:
    "Talk to Nexwavy about automating a workflow, training your team on AI, or reviewing your current process. Based in Lagos, Nigeria.",
  path: "/contact",
  ogTitle: "Contact Nexwavy Solutions",
  ogDescription:
    "Start with a clear conversation about the workflow, visibility, or AI challenge you want to fix next.",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you are trying to fix, build, or improve."
        intro="We will review your message and respond with the next sensible step."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <ContactForm />

          <aside className="grid content-start gap-5">
            <div className="bento p-7">
              <h2 className="text-lg font-semibold text-midnight">Contact options</h2>
              <dl className="mt-4 grid gap-4 text-sm">
                <div>
                  <dt className="text-slate">Email</dt>
                  <dd>
                    <TrackedLink className="font-medium text-midnight hover:text-blue" href={`mailto:${SITE.email}`} eventName="Email click" eventData={{ location: "contact-page" }}>
                      {SITE.email}
                    </TrackedLink>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate">Phone</dt>
                  <dd>
                    <TrackedLink className="font-medium text-midnight hover:text-blue" href={SITE.phoneLink} eventName="Phone click" eventData={{ location: "contact-page" }}>
                      {SITE.phoneDisplay}
                    </TrackedLink>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate">Location</dt>
                  <dd className="font-medium text-midnight">{SITE.location}</dd>
                </div>
                <div>
                  <dt className="text-slate">WhatsApp</dt>
                  <dd>
                    <TrackedLink
                      className="font-medium text-midnight hover:text-blue"
                      href={SITE.whatsappUrl}
                      external
                      eventName="WhatsApp CTA click"
                      eventData={{ location: "contact-page" }}
                    >
                      {SITE.whatsappLabel}
                    </TrackedLink>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="soft-band p-7">
              <h2 className="text-lg font-semibold text-midnight">Prefer to talk now?</h2>
              <p className="mt-2 text-sm text-slate">
                If the project is easier to explain by chat, you can reach Nexwavy directly on WhatsApp.
              </p>
              <TrackedLink href={SITE.whatsappUrl} external className="btn-primary mt-5" eventName="WhatsApp CTA click" eventData={{ location: "contact-sidebar" }}>
                {SITE.whatsappLabel}
              </TrackedLink>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
