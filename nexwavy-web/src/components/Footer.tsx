import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV, SITE } from "@/lib/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <BrandLogo className="h-10 w-auto" />
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate">{SITE.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              {SITE.email}
              <br />
              {SITE.phone}
              <br />
              {SITE.location}
            </p>
            <p className="mt-6 text-sm font-medium text-blue">Move from manual effort to intelligent execution.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-midnight">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-midnight">Quick actions</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li>
                <Link href="/contact" className="transition-colors hover:text-blue">
                  Book a Discovery Session
                </Link>
              </li>
              <li>
                <Link href="/register" className="transition-colors hover:text-blue">
                  Register for AI Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-blue">
                  Request Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-blue">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-slate md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.company}. All rights reserved.
          </p>
          <p>Business Automation · AI Training · IT Advisory</p>
        </div>
      </div>
    </footer>
  );
}
