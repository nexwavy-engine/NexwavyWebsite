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
  ogImage,
  twitterCard = "summary_large_image",
}: PageMetadataInput & { ogImage?: string }): Metadata {
  const url = new URL(path, SITE.siteUrl).toString();
  const image = new URL(ogImage ?? SITE.ogImagePath, SITE.siteUrl).toString();

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

export function buildFAQJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildCourseJsonLd(course: {
  id: string;
  title: string;
  summary: string;
  priceNgn: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "Organization",
      name: SITE.company,
      sameAs: SITE.siteUrl,
    },
    offers: [
      {
        "@type": "Offer",
        category: "Paid",
        price: course.priceNgn,
        priceCurrency: "NGN",
      },
    ],
  };
}

export function buildSoftwareAppJsonLd(solution: {
  title: string;
  description: string;
  features: readonly string[];
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: solution.title,
    description: solution.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
    },
    featureList: solution.features.join(", "),
    url: `${SITE.siteUrl}${solution.path}`,
    provider: {
      "@type": "Organization",
      name: SITE.company,
      url: SITE.siteUrl,
    },
  };
}

