import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

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

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Nexwavy Solutions Ltd — Business Automation & AI Training in Nigeria",
    description:
      "Nexwavy Solutions helps growing Nigerian businesses replace manual work with automation, practical AI training, and smarter digital systems.",
    path: "/",
    ogTitle: "Nexwavy Solutions Ltd — Business Automation & AI Training",
    ogDescription:
      "We help growing businesses replace manual work with automation, AI enablement, and practical productivity systems.",
  }),
  metadataBase: new URL(SITE.siteUrl),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE.siteUrl}/#organization`,
      name: SITE.company,
      url: SITE.siteUrl,
      logo: `${SITE.siteUrl}/brand/logo.png`,
      image: `${SITE.siteUrl}/images/hero-automation.png`,
      description: "Nexwavy Solutions Ltd is a business automation, AI training, and IT advisory company in Lagos, Nigeria.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressRegion: "Lagos State",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "6.5244",
        longitude: "3.3792",
      },
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "AdministrativeArea", name: "Lagos State" },
      ],
      founder: [
        {
          "@type": "Person",
          name: "Femi Olawuyi",
          jobTitle: "Co-Founder",
          worksFor: { "@id": `${SITE.siteUrl}/#organization` },
        },
        {
          "@type": "Person",
          name: "Oloyede Akinmade",
          jobTitle: "Co-Founder",
          worksFor: { "@id": `${SITE.siteUrl}/#organization` },
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SITE.email,
          telephone: "+2348169697844",
          areaServed: "NG",
          availableLanguage: ["English"],
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <Nav />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
