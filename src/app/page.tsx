import Link from "next/link";
import Image from "next/image";
import { CtaBand, Section, SectionHeading } from "@/components/Section";
import { HIGHLIGHTS, PROCESS } from "@/lib/content/site";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION - Image Dominant */}
      <Section className="relative overflow-hidden pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] lg:min-h-screen items-stretch">
          {/* Left: Minimal Text */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-24 bg-gradient-to-br from-white to-cloud/30">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-midnight leading-tight">
                Better systems.<br />
                <span className="text-blue">Smarter work.</span>
              </h1>
              <p className="mt-6 text-lg text-slate/75 font-medium">
                Replace manual workflows with structured digital systems.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                  Start a Project
                </Link>
                <Link href="/solutions" className="btn-ghost px-8 py-4 text-base">
                  See Examples
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Large Image */}
          <div className="relative hidden lg:block bg-gradient-to-br from-blue/10 via-signal/5 to-teal/5">
            <Image
              src="/images/hero-visual.png"
              alt="Business transformation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* PROBLEMS SECTION - Image Driven */}
      <Section className="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-80 md:h-96 order-2 lg:order-1">
            <Image
              src="/images/problems-visual.png"
              alt="Business challenges"
              fill
              className="object-contain"
            />
          </div>

          {/* Right: Minimal Text */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The Challenge"
              title="Manual work slows growth"
              intro="Scattered tools, slow approvals, and buried insights hold teams back."
            />
          </div>
        </div>
      </Section>

      {/* SOLUTION SECTION - Image Dominant */}
      <Section className="py-20 md:py-28 bg-gradient-to-br from-midnight via-midnight/95 to-blue/5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-white">
          {/* Left: Minimal Text */}
          <div>
            <SectionHeading
              eyebrow="The Answer"
              title="Systems that work"
              intro="Digital workflows built for your business. Clear, structured, automated."
              dark
            />
          </div>

          {/* Right: Image */}
          <div className="relative h-80 md:h-96">
            <Image
              src="/images/solutions-visual.png"
              alt="Organized systems"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* WHAT WE BUILD - Screen Examples */}
      <Section className="py-20 md:py-28">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Real Systems"
            title="Examples we build"
            intro=""
            center
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { img: "/images/dashboard-mockup.png", title: "Dashboards", desc: "Live metrics & reporting" },
            { img: "/images/approval-workflow.png", title: "Approvals", desc: "Fast decision systems" },
            { img: "/images/inventory-system.png", title: "Inventory", desc: "Stock & fulfillment" },
          ].map((item) => (
            <div key={item.title} className="group rounded-3xl overflow-hidden border border-line/30 hover:border-blue/50 transition-all">
              <div className="relative h-80 bg-gradient-to-br from-cloud to-blue/5 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-700"
                />
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-xl font-bold text-midnight">{item.title}</h3>
                <p className="mt-2 text-sm text-slate/70 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HIGHLIGHTS - What We Do */}
      <Section className="py-20 md:py-28">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            intro=""
            center
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { num: "01", title: "Business Automation", desc: "Replace manual workflows with digital systems" },
            { num: "02", title: "AI Implementation", desc: "Train and integrate AI for your operations" },
            { num: "03", title: "IT Advisory", desc: "Strategic guidance for technology decisions" },
          ].map((item) => (
            <div
              key={item.num}
              className="group p-10 rounded-3xl border border-line/30 bg-gradient-to-br from-white/70 to-white/40 hover:from-white hover:to-white/80 hover:border-blue/40 transition-all"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-5xl font-black text-blue/30">{item.num}</span>
              </div>
              <h3 className="text-2xl font-bold text-midnight group-hover:text-blue transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-slate/70 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS - Simple Steps */}
      <Section className="py-20 md:py-28 bg-gradient-to-br from-cloud/40 to-blue/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title="4 Steps to Delivery"
              intro=""
            />
            <div className="mt-12 space-y-4">
              {PROCESS.map((step, i) => (
                <div
                  key={step.step}
                  className="flex gap-4 p-6 rounded-2xl border border-line/20 bg-white hover:shadow-soft hover:border-blue/40 transition-all group"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-midnight group-hover:text-blue transition-colors">{step.step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96">
            <Image
              src="/images/workflow-automation.png"
              alt="Workflow process"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* HIGHLIGHTS CARDS */}
      <Section className="py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              className="group p-10 rounded-3xl border border-line/30 bg-gradient-to-br from-white/80 to-white/40 hover:from-white hover:to-white/80 hover:border-blue/40 transition-all flex flex-col"
            >
              <div className="mb-6">
                <span className="text-5xl font-black text-blue/20">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-2xl font-bold text-midnight group-hover:text-blue transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-slate/70 font-medium flex-grow">{item.body}</p>
              <Link href={item.href} className="mt-6 btn-link text-sm font-semibold">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* AI TRAINING - Minimal Text, Image Focus */}
      <Section className="py-20 md:py-28 bg-gradient-to-br from-midnight to-blue/10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Minimal Content */}
          <div className="text-white">
            <SectionHeading
              eyebrow="AI Training"
              title="Learn modern AI"
              intro="Hands-on curriculum for your team's AI readiness."
              dark
            />
            <Link href="/ai-training" className="mt-10 btn-primary bg-white text-midnight hover:bg-blue hover:text-white px-8 py-4">
              Explore Curriculum
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative h-96">
            <Image
              src="/images/ai-training-visual.png"
              alt="AI training"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <CtaBand />
    </>
  );
}
