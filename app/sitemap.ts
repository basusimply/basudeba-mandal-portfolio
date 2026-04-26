import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app";

  const blogPosts = getAllPosts();

  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...caseStudies.map((cs) => ({
      url: `${base}/work/${cs.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return entries;
}
