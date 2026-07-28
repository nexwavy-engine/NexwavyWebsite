import Link from "next/link";
import Image from "next/image";
import { CtaBand, Section, SectionHeading } from "@/components/Section";
import { HIGHLIGHTS, PROCESS } from "@/lib/content/site";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION - Clean Responsive Hero */}
      <Section className="relative overflow-hidden pt-6 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Headline & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-1.5 text-xs font-semibold text-blue mb-6">
                Business Automation & IT Advisory
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-midnight tracking-tight leading-[1.1]">
                Better systems.<br />
                <span className="text-blue">Smarter work.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate/80 font-medium leading-relaxed">
                Replace manual spreadsheets and delayed approvals with structured digital tools built for your operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary px-7 py-3.5 text-sm sm:text-base font-bold">
                  Start a Project
                </Link>
                <Link href="/solutions" className="btn-ghost px-7 py-3.5 text-sm sm:text-base font-semibold">
                  View Solutions →
                </Link>
              </div>
            </div>
          </div>

          {/* Right: High-Res Widescreen Hero Visual Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-midnight via-midnight/95 to-blue/20 p-2 sm:p-3 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-visual.png"
                  alt="Nexwavy Business Automation Dashboard Interface"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 - THE CHALLENGE (Clean Slide-Style Section) */}
      <Section className="py-16 md:py-24 border-t border-line/50 bg-gradient-to-b from-cloud/30 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text & 3 Key Friction Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <SectionHeading
              eyebrow="The Challenge"
              title="Manual work slows company growth"
              intro="Scattered spreadsheets, delayed approvals, and unverified paper logs create friction across daily business operations."
            />
            <div className="mt-8 grid gap-3">
              {[
                { title: "Unclear Approvals", desc: "Requests get lost in email and chat threads without audit trails." },
                { title: "Manual Data Re-entry", desc: "Teams waste hours copying data across unlinked spreadsheets." },
                { title: "Reporting Lag", desc: "Management gets reports days or weeks after decisions were needed." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-line/60 bg-white p-4 shadow-soft">
                  <h4 className="text-sm font-bold text-midnight">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clean Visual Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-3xl border border-line/80 bg-white p-2 shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/problems-visual.png"
                  alt="Operational Bottlenecks vs Digital Workflow Cards"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3 - THE ANSWER (Structured Systems) */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-midnight via-midnight/95 to-blue/10 text-white rounded-3xl my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center px-4 sm:px-8 py-4">
          {/* Left: Text */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="The Answer"
              title="Systems built for your operations"
              intro="Digital workflows configured around your team's specific approval rules, attendance policies, and inventory life cycle."
              dark
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/solutions" className="btn-primary bg-blue text-white hover:bg-signal font-bold px-7 py-3.5 text-sm">
                Explore Solution Catalog
              </Link>
              <Link href="/contact" className="btn-ghost border-white/30 text-white hover:border-white hover:bg-white/10 font-semibold px-7 py-3.5 text-sm">
                Schedule Discovery Call
              </Link>
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/solutions-visual.png"
                  alt="Organized Automated System Pipelines"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT WE BUILD - Screen Examples */}
      <Section className="py-16 md:py-24">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Real Systems"
            title="Examples of what we build"
            intro="Productized digital tools tailored for growing businesses and SMEs."
            center
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { img: "/images/dashboard-mockup.png", title: "Executive Dashboards", desc: "Live KPI tracking, department metrics, and executive summaries." },
            { img: "/images/approval-workflow.png", title: "Approval Portals", desc: "Expense requisitions, sign-off routing, and full audit logs." },
            { img: "/images/inventory-system.png", title: "Sales & Stock Trackers", desc: "Multi-branch inventory levels, sales logs, and restock alerts." },
          ].map((item) => (
            <div key={item.title} className="bento group flex flex-col overflow-hidden p-5 hover:border-blue/40 transition-all">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-cloud/50 mb-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold text-midnight">{item.title}</h3>
              <p className="mt-2 text-sm text-slate/80 font-medium flex-grow">{item.desc}</p>
              <Link href="/solutions" className="btn-link mt-4 text-xs font-semibold">
                Explore Solution →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* HIGHLIGHTS - Services */}
      <Section className="py-16 md:py-24 border-t border-line/40">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we do"
            intro="Core services designed to clean up operational bottlenecks."
            center
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { num: "01", title: "Business Automation", desc: "Replace manual spreadsheet steps with custom digital web portals." },
            { num: "02", title: "Practical AI Enablement", desc: "Hands-on team training for everyday workplace AI document automation." },
            { num: "03", title: "IT & Systems Advisory", desc: "Strategic architecture guidance to simplify software decisions." },
          ].map((item) => (
            <div
              key={item.num}
              className="group p-8 rounded-3xl border border-line/60 bg-white hover:border-blue/40 hover:shadow-soft transition-all"
            >
              <span className="text-4xl font-black text-blue/30">{item.num}</span>
              <h3 className="mt-4 text-xl font-bold text-midnight group-hover:text-blue transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate/80 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS - 4 Steps to Delivery */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-cloud/50 to-blue/5 rounded-3xl my-6 p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Steps */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="How It Works"
              title="4 Steps to System Delivery"
              intro="Fast, structured implementation tailored to your operating workflow."
            />
            <div className="mt-8 space-y-3">
              {PROCESS.map((step, i) => (
                <div
                  key={step.step}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-line/60 bg-white shadow-soft hover:border-blue/40 transition-all"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">
                    0{i + 1}
                  </div>
                  <p className="font-bold text-sm text-midnight">{step.step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/workflow-automation.png"
                  alt="Workflow Automation Process"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* HIGHLIGHTS CARDS */}
      <Section className="py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              className="group p-8 rounded-3xl border border-line/60 bg-white hover:border-blue/40 hover:shadow-soft transition-all flex flex-col"
            >
              <span className="text-4xl font-black text-blue/20">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-bold text-midnight group-hover:text-blue transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate/80 leading-relaxed font-medium flex-grow">{item.body}</p>
              <Link href={item.href} className="mt-6 btn-link text-xs font-semibold">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* AI TRAINING - Clear Callout */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-midnight via-midnight/95 to-blue/15 text-white rounded-3xl my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-4 sm:px-8 py-4">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Practical AI Training"
              title="Workplace AI Productivity Masterclass"
              intro="Empower your team with practical AI skills for document processing, prompt engineering, and operational automation."
              dark
            />
            <div className="mt-8">
              <Link href="/ai-training" className="btn-primary bg-white text-midnight hover:bg-blue hover:text-white px-7 py-3.5 font-bold text-sm">
                Explore Curriculum & Cohorts →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/ai-training-visual.png"
                  alt="AI Productivity Training Visual"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <CtaBand />
    </>
  );
}
