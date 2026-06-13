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
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="chip mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
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
    <header className="container-page pt-16 md:pt-20">
      <div className="max-w-3xl">
        {eyebrow && <p className="chip mb-4">{eyebrow}</p>}
        <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
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
      <div className="bento overflow-hidden bg-gradient-to-br from-tide/70 via-night-2/90 to-night p-10 text-white md:p-14">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
            <p className="mt-3 max-w-xl text-muted">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link href="/contact" className="btn-primary">
              Book a Discovery Session
            </Link>
            <Link href="/register" className="btn-ghost">
              Register for AI Training
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
