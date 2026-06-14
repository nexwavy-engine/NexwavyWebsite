"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV } from "@/lib/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/90 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-20 items-center justify-between gap-8">
        <Link href="/" className="shrink-0">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition-colors hover:text-midnight"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Book a Discovery Session
          </Link>
        </div>

        <button
          className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-midnight lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-page flex flex-col gap-3 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-slate"
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
    </header>
  );
}
