import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/ai-training",
  "/contact",
  "/register",
  "/privacy",
  "/terms",
  "/refunds",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://nexwavy.com${route || "/"}`,
    lastModified: new Date("2026-07-04T00:00:00.000Z"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
