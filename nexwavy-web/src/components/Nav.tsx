"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV } from "@/lib/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled || !isHome
          ? "border-line/80 bg-white/95 shadow-nav backdrop-blur-md"
          : "border-transparent bg-blue"
      }`}
    >
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <nav
        className="container-page flex h-[4.5rem] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="shrink-0 focus-visible:rounded-lg" aria-label="Nexwavy Solutions home">
          <BrandLogo />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex" role="list">
          {NAV.filter((item) => item.href !== "/").map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const isDark = isHome && !scrolled;
            return (
              <Link
                key={item.href}
                href={item.href}
                role="listitem"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? isDark
                      ? "bg-white/10 text-white"
                      : "bg-blue/8 text-blue"
                    : isDark
                    ? "text-white/70 hover:bg-white/10 hover:text-white"
                    : "text-slate hover:bg-cloud hover:text-midnight"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`btn ${isHome && !scrolled ? "border border-white/20 bg-white/10 text-white hover:bg-white/20" : "bg-blue text-white hover:bg-midnight"} active:scale-[0.98]`}
            >
              Book a Discovery Session
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${isHome && !scrolled ? "border-white/20 bg-white/10 text-white hover:bg-white/20" : "border-line bg-white hover:border-blue hover:text-blue"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              className="transition-transform"
            >
              {open ? (
                <>
                  <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-page flex flex-col gap-1 py-4 pb-6">
            {NAV.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? "bg-blue/8 text-blue" : "text-slate hover:bg-cloud hover:text-midnight"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 border-t border-line pt-3">
              <Link href="/contact" className="btn-primary w-full">
                Book a Discovery Session
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
