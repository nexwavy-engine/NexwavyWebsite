import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV, SITE } from "@/lib/content/site";

const SERVICES_LINKS = [
  { href: "/services#business-automation", label: "Business Automation" },
  { href: "/services#it-consulting", label: "IT Advisory" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/solutions", label: "Sample Solutions" },
];

const QUICK_LINKS = [
  { href: "/contact", label: "Book a Discovery Session" },
  { href: "/register", label: "Register for AI Training" },
  { href: "/contact", label: "Request Corporate Training" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          {/* Brand column */}
          <div>
            <BrandLogo className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              {SITE.tagline}
            </p>
            <address className="mt-5 not-italic">
              <ul className="space-y-1.5 text-sm text-slate">
                <li>
                  <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-blue">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-blue">
                    {SITE.phone}
                  </a>
                </li>
                <li className="text-slate">{SITE.location}</li>
              </ul>
            </address>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexwavy on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-slate transition-colors hover:border-blue hover:text-blue"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={SITE.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexwavy on X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-slate transition-colors hover:border-blue hover:text-blue"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexwavy on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-slate transition-colors hover:border-blue hover:text-blue"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-midnight">Navigate</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate transition-colors hover:text-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-midnight">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate transition-colors hover:text-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick actions column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-midnight">Get started</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate transition-colors hover:text-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-xs">
                Book a Discovery Session
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-slate md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.company}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Business Automation · AI Training · IT Advisory</span>
            <span className="hidden md:inline text-line">|</span>
            {LEGAL_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-blue">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
