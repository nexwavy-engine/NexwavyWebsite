import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const url = "https://nexwavy.com"; // Default URL, should be updated with real domain

export const metadata: Metadata = {
  title: {
    default: SITE.company,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.tagline,
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.company,
    description: SITE.tagline,
    url: "/",
    siteName: SITE.company,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
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
