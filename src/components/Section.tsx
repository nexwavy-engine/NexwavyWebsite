import Link from "next/link";

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`container-page py-16 md:py-20 ${className}`}>{children}</section>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-4xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow mb-6 inline-block">{eyebrow}</span>}
      <h2 className="text-balance text-4xl font-bold tracking-tight text-midnight md:text-[3.5rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate/80">{intro}</p>}
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
    <header className="container-page pt-20 md:pt-28 pb-12 md:pb-16 border-b border-line/20">
      <div className="max-w-5xl">
        {eyebrow && <span className="eyebrow mb-6 inline-block">{eyebrow}</span>}
        <h1 className="text-balance text-5xl font-bold tracking-tight text-midnight md:text-7xl md:leading-[1.05]">
          {title}
        </h1>
        {intro && <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate/70 md:text-2xl">{intro}</p>}
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
              Book a Strategy Session
            </Link>
            <Link href="/register" className="btn-ghost text-center">
              AI Training Path
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
