import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: {
    default: `${SITE.company} — Business automation and AI productivity partner`,
    template: `%s — ${SITE.shortName}`,
  },
  description: SITE.tagline,
  metadataBase: new URL("https://nexwavy.com"),
  openGraph: {
    title: SITE.company,
    description: SITE.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
