import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-widest mb-4 inline-block px-4 py-2 rounded-full border ${
            dark
              ? "bg-blue/20 border-blue/40 text-blue/80"
              : "bg-signal/10 border-signal/30 text-signal"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight ${
          dark ? "text-white" : "text-midnight"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed font-medium ${
            dark ? "text-white/80" : "text-slate/75"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28 bg-gradient-to-r from-blue via-signal to-blue text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black leading-tight">
          Ready to build smarter systems?
        </h2>
        <p className="mt-6 text-lg md:text-xl font-medium text-white/90">
          Let's discuss your workflow and explore what we can build.
        </p>
        <a
          href="/contact"
          className="mt-10 inline-block px-8 py-4 bg-white text-blue font-bold rounded-full hover:bg-blue hover:text-white transition-all shadow-lg hover:shadow-xl"
        >
          Start a Discovery Session
        </a>
      </div>
    </section>
  );
}
