import Link from "next/link";
import { NAV, SITE } from "@/lib/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-night/50">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-ink">
              <span className="grid h-8 w-8 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-tide via-night-2 to-night text-sm text-accent shadow-soft">
                N
              </span>
              {SITE.company}
            </div>
            <p className="mt-3 max-w-md text-sm text-muted">{SITE.tagline}</p>
            <p className="mt-4 text-sm text-muted">
              {SITE.email} · {SITE.phone}
              <br />
              {SITE.location}
            </p>
            <p className="mt-5 text-sm font-medium text-gold">Move from manual effort to intelligent execution.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Quick Actions</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/contact" className="hover:text-ink">
                  Book a Discovery Session
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-ink">
                  Register for AI Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink">
                  Request Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted/80 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.company}. All rights reserved.
          </p>
          <p>Business Automation · AI Training · IT Advisory</p>
        </div>
      </div>
    </footer>
  );
}
