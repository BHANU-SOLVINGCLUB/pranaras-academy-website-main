import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pranarasacademy.in"
  const lastModified = new Date()

  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/programs`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/social-impact`, priority: 0.8, changeFrequency: "monthly" as const },
  ]

  const servicePages = [
    "life-coaching",
    "motivational-sessions",
    "communication-skills",
    "leadership-training",
    "counseling-sessions",
    "manifestation-mindset",
    "career-growth-coaching",
    "managerial-skills",
    "technical-skills",
    "corporate-soft-skills",
    "corporate-technical-training",
    "corporate-leadership-coaching",
    "team-building",
    "hire-deploy",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  const programPages = [
    { url: `${baseUrl}/programs/soft-skills-development`, priority: 0.8, changeFrequency: "monthly" as const },
  ]

  return [...mainPages, ...servicePages, ...programPages].map((page) => ({
    ...page,
    lastModified,
  }))
}
