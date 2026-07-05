import { PageHeader, Section } from "@/components/Section";
import { SITE } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Training Refund & Cancellation Policy | Nexwavy Solutions",
  description:
    "Read Nexwavy Solutions' refund, cancellation, transfer, and substitution terms for paid training programmes.",
  path: "/refunds",
  ogTitle: "Training Refund & Cancellation Policy | Nexwavy Solutions",
  ogDescription:
    "Refund, transfer, substitution, and cancellation terms for Nexwavy training programmes.",
  twitterCard: "summary",
});

export default function RefundsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Training Refund & Cancellation Policy"
        intro="Effective date: 2 July 2026 · Last updated: 2 July 2026"
      />
      <Section>
        <div className="bento max-w-4xl p-8 md:p-10">
          <p className="text-slate">
            This policy applies to Nexwavy Solutions Ltd training programmes, including public cohorts, SME team sessions, corporate department training, and executive workshops.
          </p>

          <Block title="1. Cancellations by participants">
            <p>If you cancel at least 7 days before your cohort or training start date, you may choose either:</p>
            <ul className="mt-3">
              <li>a full refund; or</li>
              <li>a transfer to a later cohort or session at no extra charge.</li>
            </ul>
            <p className="mt-3">If you cancel within 7 days of the start date, you may choose either:</p>
            <ul className="mt-3">
              <li>a transfer to a future cohort or session, subject to availability; or</li>
              <li>a 50% refund.</li>
            </ul>
          </Block>

          <Block title="2. No-shows">
            <p>If you do not attend without prior notice, you will not be eligible for a refund.</p>
            <p className="mt-3">Nexwavy may allow a one-time transfer to another cohort or session at its discretion.</p>
          </Block>

          <Block title="3. Substitutions">
            <p>You may send another person in your place at no extra cost if you notify Nexwavy at least 2 days before the start date.</p>
            <p className="mt-3">Substitution requests should include the replacement participant&apos;s name, email address, phone number, and organisation where applicable.</p>
          </Block>

          <Block title="4. Cancellations or changes by Nexwavy">
            <p>If Nexwavy cancels or reschedules a cohort or training session, you may choose either:</p>
            <ul className="mt-3">
              <li>a transfer to another available cohort or session; or</li>
              <li>a full refund.</li>
            </ul>
          </Block>

          <Block title="5. Refund processing">
            <p>Approved refunds will be processed within 10 business days.</p>
            <p className="mt-3">Refunds will be made to the original payment method where possible. Where this is not possible, Nexwavy will agree a suitable refund method with the participant or paying organisation.</p>
          </Block>

          <Block title="6. How to request a refund, transfer, or substitution">
            <p>Email {SITE.email} with:</p>
            <ul className="mt-3">
              <li>your full name</li>
              <li>training programme or cohort</li>
              <li>payment reference, where available</li>
              <li>reason for the request</li>
              <li>preferred option: refund, transfer, or substitution</li>
            </ul>
          </Block>

          <Block title="7. Contact">
            <p>
              Email: {SITE.email}
              <br />
              Phone: {SITE.phoneDisplay}
            </p>
          </Block>
        </div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-ink/80">{children}</div>
    </section>
  );
}
