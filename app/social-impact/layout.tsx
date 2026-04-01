import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Impact - Free Motivational Sessions for Schools & Welfare Institutions",
  description:
    "Pranaras Academy's social impact initiatives: free motivational sessions, confidence building & career guidance for government schools and social welfare institutions in Hyderabad & Telangana.",
  keywords: [
    "free motivational sessions Hyderabad",
    "social impact training",
    "government school programs Hyderabad",
    "confidence building students",
    "career guidance Hyderabad",
    "social welfare training Telangana",
  ],
  openGraph: {
    title: "Social Impact - Pranaras Academy",
    description:
      "Free motivational sessions & training for government schools and social welfare institutions in Hyderabad.",
    url: "https://pranarasacademy.in/social-impact",
  },
  alternates: {
    canonical: "https://pranarasacademy.in/social-impact",
  },
}

export default function SocialImpactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
