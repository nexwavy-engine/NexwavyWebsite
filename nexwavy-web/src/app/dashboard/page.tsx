import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDb } from "@/lib/adapters/db";
import { findCourse, formatNgn } from "@/lib/data/catalog";
import { isAdmin } from "@/lib/admin";
import { PageHeader, Section } from "@/components/Section";
import StatusBadge from "@/components/StatusBadge";
import SignOutButton from "@/components/SignOutButton";

export const metadata: Metadata = { title: "Dashboard" };
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const email = session.user.email;
  const name = session.user.name || email.split("@")[0];
  const db = getDb();

  // Keep a learner record in sync for signed-in users.
  const authUserId = (session.user as { id?: string }).id;
  if (authUserId) {
    await db.upsertLearner({ authUserId, fullName: name, email });
  }

  const registrations = await db.listRegistrationsForEmail(email);
  const admin = isAdmin(email);

  return (
    <>
      <PageHeader eyebrow="Your dashboard" title={`Welcome, ${name}.`} />

      <Section className="pt-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-ink/70">Your training registrations and their status.</p>
          <div className="flex gap-3">
            {admin && (
              <Link href="/admin" className="btn-ghost">
                Admin
              </Link>
            )}
            <Link href="/register" className="btn-primary">
              Register for another track
            </Link>
            <SignOutButton />
          </div>
        </div>

        {registrations.length === 0 ? (
          <div className="bento p-10 text-center">
            <h2 className="text-lg font-semibold text-ink">No registrations yet.</h2>
            <p className="mx-auto mt-2 max-w-md text-ink/70">
              When you register for the AI Productivity Masterclass, it'll show up here with its
              payment status.
            </p>
            <Link href="/ai-training" className="btn-primary mt-6">
              Browse tracks
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {registrations.map((r) => {
              const course = findCourse(r.courseId);
              return (
                <div
                  key={r.id}
                  className="bento flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold text-ink">{course?.title ?? r.courseId}</p>
                    <p className="mt-1 text-sm text-ink/60">
                      Registered {new Date(r.createdAt).toLocaleDateString("en-NG")} ·{" "}
                      {r.preferredFormat}
                      {course ? ` · ${formatNgn(course.priceNgn)}` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge value={r.registrationStatus} />
                    <StatusBadge value={r.paymentStatus} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Section>
    </>
  );
}
