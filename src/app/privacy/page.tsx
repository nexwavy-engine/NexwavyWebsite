import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/Section";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nexwavy Solutions handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="bento prose-content max-w-3xl p-8 md:p-10">
          <p className="text-sm text-ink/50">
            Placeholder policy — review with legal counsel before launch.
          </p>

          <Block title="What we collect">
            When you contact us or register for training, we collect the details you provide: your
            name, email, phone number, organization, and any message or preferences. We also keep
            records of training registrations and their payment status.
          </Block>
          <Block title="How we use it">
            We use your information to respond to enquiries, deliver and administer training, send
            confirmations and updates, and improve our services. We do not sell your personal data.
          </Block>
          <Block title="Where it's stored">
            Your data is stored in our managed database and processed by trusted service providers
            for hosting, email delivery, and payments. Each processes data only as needed to provide
            their service.
          </Block>
          <Block title="Your choices">
            You may request access to, correction of, or deletion of your personal information at any
            time by emailing us at {SITE.email}.
          </Block>
          <Block title="Contact">
            Questions about this policy? Email {SITE.email}.
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
