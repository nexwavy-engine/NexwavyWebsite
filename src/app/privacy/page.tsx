import { PageHeader, Section } from "@/components/Section";
import { SITE } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Nexwavy Solutions Ltd",
  description:
    "How Nexwavy Solutions Ltd collects, uses, stores, and protects your personal information under the Nigeria Data Protection Act 2023.",
  path: "/privacy",
  ogTitle: "Privacy Policy | Nexwavy Solutions",
  ogDescription:
    "How we collect, use, and protect your personal data under the Nigeria Data Protection Act 2023.",
  twitterCard: "summary",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Effective date: 2 July 2026 · Last updated: 2 July 2026" />
      <Section>
        <div className="bento prose-content max-w-4xl p-8 md:p-10">
          <p>
            Nexwavy Solutions Ltd (&quot;Nexwavy&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, store, and protect personal data when you visit our website, contact us, register for training, or make an enquiry about our services.
          </p>
          <p>
            This policy is written with reference to the Nigeria Data Protection Act 2023 and other applicable data protection requirements in Nigeria.
          </p>

          <Block title="1. Who we are">
            <p>Nexwavy Solutions Ltd is a business automation, AI training, and IT advisory company based in Lagos, Nigeria.</p>
            <p className="mt-3">
              <strong>Data Protection Contact, Nexwavy Solutions Ltd</strong>
              <br />
              Email: {SITE.privacyEmail}
            </p>
            <p className="mt-3">
              For general enquiries:
              <br />
              Email: {SITE.email}
              <br />
              Phone: {SITE.phoneDisplay}
              <br />
              Location: {SITE.location}
            </p>
          </Block>

          <Block title="2. Personal data we collect">
            <ul>
              <li>your name</li>
              <li>email address</li>
              <li>phone number</li>
              <li>organisation or business name</li>
              <li>role or job title, where provided</li>
              <li>training interest or selected cohort</li>
              <li>project or service enquiry details</li>
              <li>messages or information you choose to send to us</li>
              <li>basic technical information generated when you use the website</li>
            </ul>
            <p className="mt-3">Please do not submit sensitive personal data through our website forms.</p>
          </Block>

          <Block title="3. How we collect personal data">
            <ul>
              <li>contact forms</li>
              <li>training registration forms</li>
              <li>direct email messages</li>
              <li>phone or WhatsApp enquiries</li>
              <li>basic website analytics provided through Vercel Analytics</li>
            </ul>
            <p className="mt-3">Website form submissions may be delivered to our email and recorded in Google Sheets for internal follow-up.</p>
          </Block>

          <Block title="4. Why we use personal data">
            <ul>
              <li>respond to enquiries</li>
              <li>process training registrations</li>
              <li>contact you about a project, service, or training request</li>
              <li>keep records of enquiries and follow-up actions</li>
              <li>improve the website and understand general usage patterns</li>
              <li>manage our internal business records</li>
              <li>comply with legal or regulatory obligations where required</li>
            </ul>
          </Block>

          <Block title="5. Lawful basis for processing">
            <ul>
              <li>your consent, where you choose to submit information to us</li>
              <li>steps taken at your request before entering into a service or training arrangement</li>
              <li>performance of a contract, where we provide services or training to you</li>
              <li>legitimate interest, such as responding to enquiries, managing records, improving our website, and protecting our business</li>
              <li>compliance with legal obligations where applicable</li>
            </ul>
          </Block>

          <Block title="6. Payments">
            <p>No payment is taken directly on the website at launch. Where payment is required for training or services, Nexwavy will contact you with the relevant payment instructions or next step.</p>
            <p className="mt-3">Do not send card details, bank PINs, passwords, or other sensitive payment information through our website forms, email, or WhatsApp.</p>
          </Block>

          <Block title="7. Analytics and cookies">
            <p>The website uses Vercel Analytics to understand general website usage and performance.</p>
            <p className="mt-3">We do not use non-essential advertising cookies at launch. If this changes, this policy will be updated and any required consent mechanism will be added.</p>
            <p className="mt-3">You can also manage cookies through your browser settings.</p>
          </Block>

          <Block title="8. How we store personal data">
            <p>Website enquiries and registration details may be stored in email records and Google Sheets for internal follow-up.</p>
            <p className="mt-3">We take reasonable steps to protect access to these records and restrict them to people who need the information for business purposes.</p>
          </Block>

          <Block title="9. How long we keep personal data">
            <p>We keep enquiry and registration data until the enquiry is resolved, then archived for business record purposes.</p>
            <p className="mt-3">Where a longer retention period is required for legal, tax, accounting, dispute-resolution, or legitimate business reasons, we may retain the relevant records for as long as needed.</p>
            <p className="mt-3">When personal data is no longer needed, we will delete, anonymise, or securely archive it where appropriate.</p>
          </Block>

          <Block title="10. Who we share personal data with">
            <p>We do not sell personal data.</p>
            <p className="mt-3">We may share personal data only where necessary with service providers that help us operate the website, manage enquiries, deliver communications, or provide our services.</p>
            <ul className="mt-3">
              <li>Vercel, for website hosting and analytics</li>
              <li>Google, for email, spreadsheets, and internal records</li>
            </ul>
            <p className="mt-3">We may also disclose information where required by law, regulation, court order, or a lawful request from a competent authority.</p>
          </Block>

          <Block title="11. International transfers">
            <p>Some service providers may process or store data outside Nigeria. Where this happens, we will take reasonable steps to ensure that personal data remains protected in line with applicable data protection requirements.</p>
          </Block>

          <Block title="12. Data security">
            <p>We use reasonable technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration, or disclosure.</p>
            <p className="mt-3">No website, email system, or internet-based service is completely secure. You should avoid sending confidential or sensitive information through open text fields unless it is necessary.</p>
          </Block>

          <Block title="13. Your data protection rights">
            <ul>
              <li>request access to personal data we hold about you</li>
              <li>ask us to correct inaccurate or incomplete data</li>
              <li>ask us to delete personal data where appropriate</li>
              <li>object to certain processing</li>
              <li>request restriction of processing in certain cases</li>
              <li>withdraw consent where processing is based on consent</li>
              <li>request information about how your data is used</li>
              <li>lodge a complaint with the Nigeria Data Protection Commission</li>
            </ul>
            <p className="mt-3">To make a request, email {SITE.privacyEmail}. We may need to verify your identity before acting on a request.</p>
          </Block>

          <Block title="14. Children">
            <p>Our website, services, and training programmes are intended for adults, professionals, teams, and businesses. We do not knowingly collect personal data from children.</p>
          </Block>

          <Block title="15. Updates to this policy">
            <p>We may update this Privacy Policy from time to time. The latest version will be posted on this page with the updated date.</p>
          </Block>

          <Block title="16. Contact">
            <p>
              <strong>Data Protection Contact, Nexwavy Solutions Ltd</strong>
              <br />
              Email: {SITE.privacyEmail}
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
