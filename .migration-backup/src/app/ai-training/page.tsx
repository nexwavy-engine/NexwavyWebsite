import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { MASTERCLASS, SERVICE_FAQ } from "@/lib/content/site";
import { COHORTS, COURSES, formatCohortLabel, formatNgn } from "@/lib/data/catalog";
import { buildCourseJsonLd, buildFAQJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Productivity Masterclass Lagos, Nigeria — Corporate & SME Training | Nexwavy",
  description:
    "Practical workplace AI training for professionals and teams in Lagos, Nigeria. Master prompt engineering, document automation, data privacy, and daily AI workflows.",
  path: "/ai-training",
  ogTitle: "Nexwavy AI Productivity Masterclass Nigeria",
  ogDescription:
    "Hands-on AI training for professionals, SMEs, and corporate teams. Move from AI curiosity to real capability.",
  ogImage: "/images/ai-masterclass.png",
});

export default function AiTrainingPage() {
  const coursesSchema = COURSES.map((course) => buildCourseJsonLd(course));
  const faqSchema = buildFAQJsonLd(SERVICE_FAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader eyebrow="Practical AI Enablement" title={MASTERCLASS.name} intro={MASTERCLASS.promise} />

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="bento p-8 md:p-10">
            <SectionHeading
              eyebrow="Training positioning"
              title="AI training should make work clearer, not noisier."
              intro={MASTERCLASS.intro}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink href="/register" className="btn-primary" eventName="AI Training CTA click" eventData={{ location: "ai-training-hero" }}>
                Register for AI Training (₦75,000)
              </TrackedLink>
              <Link href="/contact?subject=corporate-ai" className="btn-ghost">
                Request Corporate Session
              </Link>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-line shadow-2xl">
            <Image
              src="/images/ai-masterclass.png"
              alt="Executive AI Productivity Masterclass Session"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Training Tracks"
          title="Practical modules focused on everyday business work."
          intro="Participants leave with proven prompt templates, real spreadsheet & document workflows, and clear data security protocols."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {COURSES.map((course) => (
            <article key={course.id} className="bento flex flex-col p-7">
              <h2 className="text-xl font-bold text-midnight">{course.title}</h2>
              <p className="mt-2 text-2xl font-extrabold text-blue">{formatNgn(course.priceNgn)}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate flex-grow">{course.summary}</p>
              
              <div className="mt-6 pt-4 border-t border-line">
                <p className="text-xs text-slate">Need a custom app build after training?</p>
                <Link href="/solutions" className="text-xs font-semibold text-blue hover:underline">
                  Explore Automation Solutions →
                </Link>
              </div>

              <TrackedLink href={`/register?course=${course.id}`} className="btn-primary mt-4 w-full text-center" eventName="AI Training CTA click" eventData={{ location: "ai-training-track", courseId: course.id }}>
                Register for this Track
              </TrackedLink>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Learning outcomes" title="What You Will Be Able To Do:" />
            <div className="mt-6 grid gap-3">
              {MASTERCLASS.participantsLearn.map((item) => (
                <div key={item} className="rounded-xl border border-line bg-cloud/60 px-4 py-3 text-xs font-medium text-midnight">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bento p-8 md:p-10">
            <SectionHeading eyebrow="Pricing & Packages" title="Public Cohorts & Corporate Options" />
            <div className="mt-6 grid gap-3">
              {MASTERCLASS.pricing.map((item) => (
                <div key={item} className="rounded-xl border border-line bg-cloud/60 px-4 py-3 text-xs font-semibold text-midnight">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-cloud p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Upcoming Cohorts</p>
              <div className="mt-3 grid gap-2">
                {COHORTS.map((cohort) => (
                  <p key={cohort.id} className="text-xs text-slate font-medium">
                    • {formatCohortLabel(cohort)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="soft-band p-10 text-center md:p-14">
          <h2 className="text-2xl font-bold text-midnight md:text-3xl">
            Empower your team with practical AI skills today.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate text-sm">
            No payment taken online. After registration, our team sends your cohort onboarding guide and payment details.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink href="/register" className="btn-primary" eventName="AI Training CTA click" eventData={{ location: "ai-training-bottom" }}>
              Register for AI Masterclass
            </TrackedLink>
            <Link href="/contact" className="btn-ghost">
              Contact Nexwavy Advisory
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
