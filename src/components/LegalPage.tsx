import Link from "next/link";

const sectionId = (title: string) =>
  title.toLowerCase().replace(/^\d+\.\s*/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function LegalPage({
  title,
  summary,
  sections,
  children,
}: {
  title: string;
  summary: string;
  sections: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="pb-20">
      <header className="bg-midnight text-white">
        <div className="container-page py-12 md:py-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            <Link href="/" className="transition-colors hover:text-white">Nexwavy</Link>
            <span aria-hidden="true">/</span>
            <span>Legal</span>
          </div>
          <h1 className="mt-5 max-w-5xl text-balance text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">{summary}</p>
          <p className="mt-7 border-t border-white/20 pt-5 text-sm text-white/70">
            Effective 2 July 2026 <span className="mx-2 text-white/35" aria-hidden="true">|</span> Last updated 2 July 2026
          </p>
        </div>
      </header>

      <div className="container-page grid gap-8 pt-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14 lg:pt-12">
        <aside className="lg:sticky lg:top-24 lg:self-start" aria-label={`${title} contents`}>
          <details className="rounded-2xl border border-line bg-white p-5 shadow-soft lg:hidden">
            <summary className="cursor-pointer font-semibold text-midnight">On this page</summary>
            <LegalNavigation sections={sections} />
          </details>
          <div className="hidden lg:block">
            <p className="border-b border-line pb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue">On this page</p>
            <LegalNavigation sections={sections} />
          </div>
        </aside>
        <article className="min-w-0 rounded-2xl border border-line bg-white px-6 py-7 shadow-soft sm:px-9 md:py-10 lg:px-12">
          {children}
        </article>
      </div>
    </div>
  );
}

function LegalNavigation({ sections }: { sections: string[] }) {
  return (
    <nav className="mt-4 max-h-[65vh] space-y-1 overflow-y-auto pr-2 text-sm" aria-label="Policy sections">
      {sections.map((section) => (
        <a key={section} href={`#${sectionId(section)}`} className="block rounded-lg px-2 py-2 leading-snug text-slate transition-colors hover:bg-cloud hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue">
          {section}
        </a>
      ))}
    </nav>
  );
}

export function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section id={sectionId(title)} className="scroll-mt-24 border-t border-line/70 py-7 first:pt-0">
      <h2 className="text-xl font-bold tracking-tight text-midnight md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-[15px] leading-7 text-ink/80 md:text-base md:leading-8 [&_a]:font-semibold [&_a]:text-blue [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}
