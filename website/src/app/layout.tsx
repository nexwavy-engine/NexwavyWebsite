import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexwavy Solutions Ltd — Business Automation & AI Training in Nigeria",
  description:
    "Nexwavy Solutions helps growing Nigerian businesses replace manual work with automation, practical AI training, and smarter digital systems.",
  metadataBase: new URL("https://nexwavy.com"),
  openGraph: {
    title: "Nexwavy Solutions Ltd — Business Automation & AI Training",
    description:
      "We help growing businesses replace manual work with automation, AI enablement, and practical productivity systems.",
    url: "https://nexwavy.com",
    siteName: "Nexwavy Solutions",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexwavy Solutions Ltd",
    description: "Business Automation, AI Training & IT Advisory — Lagos, Nigeria",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
