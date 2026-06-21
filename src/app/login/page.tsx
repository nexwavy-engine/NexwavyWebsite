import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader, Section } from "@/components/Section";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to access your Nexwavy learner dashboard and training profile.",
};

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sign in"
        title="Sign in to your Nexwavy account."
        intro="Use your Google account to access your learner dashboard, training registration, payment status, and course information."
      />
      <Section>
        <div className="mx-auto max-w-md">
          <Suspense fallback={<div className="bento p-8 text-center text-ink/60">Loading…</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
