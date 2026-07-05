import type { Metadata } from "next";
import { SITE } from "@/lib/content/site";

type TwitterCard = "summary" | "summary_large_image";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: TwitterCard;
}

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  twitterCard = "summary_large_image",
}: PageMetadataInput): Metadata {
  const url = new URL(path, SITE.siteUrl).toString();
  const image = new URL(SITE.ogImagePath, SITE.siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
      siteName: SITE.company,
      locale: "en_US",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: twitterCard,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
