import Link from "next/link";
import { PageHeader, Section } from "@/components/Section";
import { SITE } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use | Nexwavy Solutions Ltd",
  description:
    "The terms governing use of the Nexwavy Solutions website, training programmes, and services.",
  path: "/terms",
  ogTitle: "Terms of Use | Nexwavy Solutions",
  ogDescription:
    "The terms governing use of the Nexwavy Solutions website and services.",
  twitterCard: "summary",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" intro="Effective date: 2 July 2026 · Last updated: 2 July 2026" />
      <Section>
        <div className="bento max-w-4xl p-8 md:p-10">
          <p className="text-slate">
            These Terms of Use govern your access to and use of the Nexwavy Solutions Ltd website, including enquiries, training registration, and information about our services.
          </p>
          <p className="mt-3 text-slate">
            By using this website, you agree to these terms. If you do not agree, please do not use the website.
          </p>

          <Block title="1. Who we are">
            <p>Nexwavy Solutions Ltd is a business automation, AI training, and IT advisory company based in Lagos, Nigeria.</p>
            <p className="mt-3">
              Email: {SITE.email}
              <br />
              Phone: {SITE.phoneDisplay}
              <br />
              Location: {SITE.location}
            </p>
          </Block>

          <Block title="2. Use of the website">
            <ul>
              <li>submit false, misleading, or unlawful information</li>
              <li>attempt to access systems or data without permission</li>
              <li>interfere with the website&apos;s operation or security</li>
              <li>upload or transmit harmful code</li>
              <li>misuse our forms, contact channels, content, or brand assets</li>
            </ul>
          </Block>

          <Block title="3. Website information">
            <p>We aim to keep website information clear and current, but we do not guarantee that every page will always be complete, error-free, or available at all times.</p>
            <p className="mt-3">We may update, remove, or change website content at any time.</p>
          </Block>

          <Block title="4. Services and enquiries">
            <p>Information on this website does not create a binding service agreement by itself.</p>
            <p className="mt-3">A service engagement with Nexwavy begins only when the scope, commercial terms, responsibilities, and delivery expectations have been agreed by the parties.</p>
            <p className="mt-3">Any proposal, quote, statement of work, invoice, or signed agreement may include additional terms that apply to that specific engagement.</p>
          </Block>

          <Block title="5. Training registration">
            <p>Submitting a training registration form does not automatically confirm your seat.</p>
            <p className="mt-3">No payment is taken directly on the website at launch. After registration, Nexwavy will contact you with the next step for payment and confirmation.</p>
            <p className="mt-3">Your seat is confirmed only when Nexwavy confirms receipt of payment or otherwise confirms your place in writing.</p>
          </Block>

          <Block title="6. Pricing">
            <p>Prices shown on the website are stated in Nigerian Naira unless otherwise stated.</p>
            <p className="mt-3">Training and service prices may change from time to time. Where a specific quote or invoice has been issued, the terms in that quote or invoice will apply for the stated validity period.</p>
          </Block>

          <Block title="7. Refunds and cancellations">
            <p>Training refunds, transfers, substitutions, and cancellations are governed by our Training Refund &amp; Cancellation Policy.</p>
            <p className="mt-3">
              Please read it here: <Link href="/refunds" className="text-blue hover:text-midnight">/refunds</Link>
            </p>
          </Block>

          <Block title="8. Intellectual property">
            <p>The website content, layout, graphics, service descriptions, training descriptions, and brand materials belong to Nexwavy Solutions Ltd or are used with permission.</p>
            <p className="mt-3">You may view and share website links for normal business purposes.</p>
            <p className="mt-3">You must not copy, reproduce, resell, modify, or reuse our content, training materials, or brand assets for commercial purposes without written permission.</p>
          </Block>

          <Block title="9. Training materials">
            <p>Training slides, worksheets, templates, recordings, prompts, exercises, and other materials provided by Nexwavy remain the intellectual property of Nexwavy unless otherwise agreed in writing.</p>
            <p className="mt-3">Participants may use training materials for their own learning or internal work use. They may not resell, redistribute, publish, or present the materials as their own.</p>
          </Block>

          <Block title="10. Client responsibilities">
            <p>Where you engage Nexwavy for advisory, automation, or training work, you are responsible for providing accurate information, timely feedback, required access, and internal approvals needed for the work.</p>
            <p className="mt-3">Nexwavy is not responsible for delays or outcomes caused by inaccurate information, unavailable stakeholders, missing access, or decisions outside our control.</p>
          </Block>

          <Block title="11. Data protection">
            <p>
              Our handling of personal data is explained in our Privacy Policy. Please read it here:{" "}
              <Link href="/privacy" className="text-blue hover:text-midnight">/privacy</Link>
            </p>
          </Block>

          <Block title="12. Third-party links and tools">
            <p>The website may refer to third-party tools, platforms, or services. These are provided for convenience or explanation only.</p>
            <p className="mt-3">Nexwavy is not responsible for the content, policies, security, pricing, or availability of third-party services.</p>
          </Block>

          <Block title="13. Limitation of liability">
            <p>To the extent permitted by law, Nexwavy will not be liable for indirect, incidental, special, or consequential losses arising from use of the website.</p>
            <p className="mt-3">Nothing in these terms excludes liability that cannot be excluded under applicable law.</p>
          </Block>

          <Block title="14. No guarantee of outcomes">
            <p>Nexwavy works to provide clear, useful, and professional services. However, business outcomes depend on many factors, including user adoption, internal execution, data quality, market conditions, and client decisions.</p>
            <p className="mt-3">Unless expressly agreed in writing, we do not guarantee a specific revenue, cost-saving, operational, or performance outcome.</p>
          </Block>

          <Block title="15. Changes to these terms">
            <p>We may update these Terms of Use from time to time. The latest version will be posted on this page with the updated date.</p>
          </Block>

          <Block title="16. Governing law">
            <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
            <p className="mt-3">Any dispute arising from use of the website or these terms will first be addressed through good-faith discussion. Where resolution is not possible, the dispute will be handled in accordance with applicable Nigerian law.</p>
          </Block>

          <Block title="17. Contact">
            <p>Email: {SITE.email}</p>
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
