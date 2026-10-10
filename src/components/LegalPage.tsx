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
    <div className="bg-white/75 pb-16">
      <header className="container-page pt-10 md:pt-12">
        <div className="border-b border-line/80 pb-8 md:pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            <Link href="/" className="transition-colors hover:text-midnight">Nexwavy</Link>
            <span aria-hidden="true">/</span>
            <span>Legal</span>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)] md:items-end md:gap-12">
            <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-midnight md:text-5xl md:leading-[1.12]">
              {title}
            </h1>
            <p className="max-w-xl border-l-2 border-blue/30 pl-5 text-base leading-relaxed text-slate md:text-lg">{summary}</p>
          </div>
          <p className="mt-6 text-sm text-slate">
            Effective 2 July 2026 <span className="mx-2 text-line" aria-hidden="true">|</span> Last updated 2 July 2026
          </p>
        </div>
      </header>

      <div className="container-page grid gap-8 pt-7 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:pt-10">
        <aside className="lg:sticky lg:top-24 lg:self-start" aria-label={`${title} contents`}>
          <details className="border-y border-line py-4 lg:hidden">
            <summary className="cursor-pointer font-semibold text-midnight">On this page</summary>
            <LegalNavigation sections={sections} />
          </details>
          <div className="hidden lg:block">
            <p className="border-b border-line pb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue">On this page</p>
            <LegalNavigation sections={sections} />
          </div>
        </aside>
        <article className="legal-article min-w-0 max-w-4xl lg:border-l lg:border-line/70 lg:pl-10">
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
