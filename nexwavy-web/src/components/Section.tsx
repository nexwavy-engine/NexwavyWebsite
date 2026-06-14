import Link from "next/link";

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
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
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-midnight md:text-[2.75rem] md:leading-[1.08]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{intro}</p>
      )}
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
    <header className="container-page pt-14 pb-2 md:pt-18">
      <div className="max-w-4xl">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-midnight md:text-6xl md:leading-[1.02]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate md:text-xl">
            {intro}
          </p>
        )}
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
      <div className="overflow-hidden rounded-[2rem] bg-midnight px-8 py-12 md:px-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4 text-teal/80">Start a conversation</p>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl md:leading-[1.04]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate/80">{body}</p>
          </div>
          <div className="grid gap-4 lg:justify-end">
            <Link
              href="/contact"
              className="btn bg-white text-midnight hover:bg-cloud active:scale-[0.98] justify-center"
            >
              Book a Discovery Session
            </Link>
            <Link
              href="/register"
              className="btn border border-white/20 text-white hover:bg-white/10 active:scale-[0.98] justify-center"
            >
              Register for AI Training
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
