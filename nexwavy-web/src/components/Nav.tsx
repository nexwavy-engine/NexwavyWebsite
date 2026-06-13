"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-white/10 bg-night/70 backdrop-blur-xl">
        <nav className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-tide via-night-2 to-night text-sm text-accent shadow-soft">
              N
            </span>
            <span>{SITE.shortName}</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Book a Discovery Session
            </Link>
          </div>

          <button
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
                Book a Discovery Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
