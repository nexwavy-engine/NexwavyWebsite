import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/Section";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Nexwavy Solutions website and training.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <Section>
        <div className="bento max-w-3xl p-8 md:p-10">
          <p className="text-sm text-ink/50">
            Placeholder terms — review with legal counsel before launch.
          </p>

          <Block title="Use of this site">
            By using this website you agree to use it lawfully and not to misuse the forms,
            registration, or account features. Content here is provided for general information.
          </Block>
          <Block title="Training registrations & payment">
            Registering for a course reserves a seat; your place is confirmed once payment is
            received via the provided payment link. Prices are shown in Nigerian Naira (₦). Cohort
            dates and formats may change; we'll notify registered participants of material changes.
          </Block>
          <Block title="Refunds & cancellations">
            Our refund and cancellation terms for each cohort are shared at registration. Reach out
            to {SITE.email} with any questions before paying.
          </Block>
          <Block title="Accounts">
            If you sign in to access a learner dashboard, you're responsible for the activity under
            your account. Access may be suspended for misuse.
          </Block>
          <Block title="Liability">
            Services are provided on a reasonable-efforts basis. To the extent permitted by law,
            Nexwavy Solutions is not liable for indirect or consequential losses.
          </Block>
          <Block title="Contact">
            Questions about these terms? Email {SITE.email}.
          </Block>
        </div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 first:mt-0">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <p className="mt-2 text-ink/75">{children}</p>
    </div>
  );
}
