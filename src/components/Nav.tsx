"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV } from "@/lib/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/50 bg-white/70 backdrop-blur-md">
      <nav className="container-page flex h-20 items-center justify-between gap-8">
        <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-105">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-wider text-slate/80 transition-all duration-300 hover:text-blue hover:tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>

        <button
          className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-midnight lg:hidden transition-colors hover:bg-cloud"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white/95 backdrop-blur-lg lg:hidden">
          <div className="container-page flex flex-col gap-4 py-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide text-slate hover:text-blue transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-4" onClick={() => setOpen(false)}>
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
