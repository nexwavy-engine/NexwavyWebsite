import Link from "next/link";
import { SITE } from "@/lib/content/site";

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`container-page py-12 md:py-16 ${className}`}>{children}</section>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-4xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className={`eyebrow mb-6 inline-block ${dark ? "bg-blue/20 text-blue/90 border-blue/40" : ""}`}>{eyebrow}</span>}
      <h2 className={`text-balance text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.12] ${dark ? "text-white" : "text-midnight"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-6 max-w-3xl text-lg leading-relaxed font-medium ${dark ? "text-white/80" : "text-slate/75"}`}>{intro}</p>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="page-header container-page py-10 md:py-12">
      <div className="grid gap-6 border-b border-line/80 pb-8 md:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)] md:items-end md:gap-12 md:pb-10">
        <div>
          {eyebrow && <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-blue">{eyebrow}</span>}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-midnight md:text-5xl md:leading-[1.12]">
            {title}
          </h1>
        </div>
        {intro && <p className="max-w-xl border-l-2 border-blue/30 pl-5 text-base leading-relaxed text-slate md:text-lg">{intro}</p>}
      </div>
    </header>
  );
}

export function CtaBand({
  title = "Ready to remove manual work and build smarter systems?",
  body = "Start with a discovery conversation. We will help you understand what to fix, what to automate, and what solution makes the most business sense.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section>
      <div className="soft-band overflow-hidden p-10 md:p-20 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent -z-10 group-hover:opacity-80 transition-opacity" />
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <span className="eyebrow mb-6 inline-block">Start a project</span>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-midnight md:text-6xl md:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate/80 font-medium">{body}</p>
          </div>
          <div className="flex flex-col gap-5">
            <Link href="/contact" className="btn-primary text-center">
              Start a Project
            </Link>
            <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="btn-ghost text-center">
              {SITE.whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
