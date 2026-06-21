import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV, SITE } from "@/lib/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line/50 bg-white">
      <div className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <BrandLogo className="h-10 w-auto transition-transform hover:scale-105" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-slate/80">{SITE.tagline}</p>
            <div className="mt-8 space-y-2 text-sm text-slate/60">
              <p className="flex items-center gap-2 hover:text-blue transition-colors"><span aria-hidden="true">✉️</span> {SITE.email}</p>
              <p className="flex items-center gap-2"><span aria-hidden="true">📞</span> {SITE.phone}</p>
              <p className="flex items-center gap-2"><span aria-hidden="true">📍</span> {SITE.location}</p>
            </div>
            <p className="mt-10 text-sm font-bold text-blue uppercase tracking-widest">
              Built for intelligent execution.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-midnight/40">Explore</h3>
            <ul className="mt-6 space-y-4 text-[14px] font-medium text-slate/70">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-all hover:text-blue hover:pl-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-midnight/40">Quick actions</h3>
            <ul className="mt-6 space-y-4 text-[14px] font-medium text-slate/70">
              <li>
                <Link href="/contact" className="transition-all hover:text-blue hover:pl-1">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/register" className="transition-all hover:text-blue hover:pl-1">
                  AI Training Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-all hover:text-blue hover:pl-1">
                  Corporate Inquiries
                </Link>
              </li>
              <li className="pt-4">
                <Link href="/privacy" className="text-xs text-slate/40 hover:text-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-slate/40 hover:text-blue">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line/30 pt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.company}
          </p>
          <div className="flex gap-6">
            <span>Automation</span>
            <span className="opacity-30">/</span>
            <span>AI</span>
            <span className="opacity-30">/</span>
            <span>Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
