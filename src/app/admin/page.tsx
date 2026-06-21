import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { isAdmin } from "@/lib/admin";
import { getDb } from "@/lib/adapters/db";
import { COURSES } from "@/lib/data/catalog";
import { PageHeader, Section } from "@/components/Section";
import AdminClient from "@/components/AdminClient";
import SignOutButton from "@/components/SignOutButton";

export const metadata: Metadata = { title: "Admin" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  if (!email) {
    redirect("/login?callbackUrl=/admin");
  }

  if (!isAdmin(email)) {
    return (
      <Section className="pt-20">
        <div className="bento mx-auto max-w-lg p-10 text-center">
          <h1 className="text-xl font-bold text-ink">Not authorized</h1>
          <p className="mt-3 text-ink/70">
            You're signed in as {email}, but this account isn't on the admin allowlist. Ask an owner
            to add your email to <code className="rounded bg-mist px-1">ADMIN_EMAILS</code>.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/dashboard" className="btn-ghost">
              Your dashboard
            </Link>
            <SignOutButton />
          </div>
        </div>
      </Section>
    );
  }

  const db = getDb();
  const initialRows = await db.listRegistrations();

  return (
    <>
      <PageHeader eyebrow="Admin" title="Training registrations" />
      <Section className="pt-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-ink/70">Filter, update status, and export registrations.</p>
          <SignOutButton />
        </div>
        <AdminClient initialRows={initialRows} courses={COURSES} />
      </Section>
    </>
  );
}
