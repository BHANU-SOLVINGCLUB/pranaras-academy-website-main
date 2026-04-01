import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Soft Skills, Life Coaching, Corporate Training & More",
  description:
    "Explore Pranaras Academy's services: soft skills training, life coaching, motivational sessions, leadership development, counseling, corporate training, team building & hire-train-deploy programs in Hyderabad.",
  keywords: [
    "soft skills training services Hyderabad",
    "life coaching services",
    "corporate training services Hyderabad",
    "leadership training Hyderabad",
    "motivational sessions",
    "counseling sessions Hyderabad",
    "team building Hyderabad",
    "personality development",
  ],
  openGraph: {
    title: "Services - Pranaras Academy Hyderabad",
    description:
      "Soft skills training, life coaching, motivational sessions, corporate training & more in Hyderabad.",
    url: "https://pranarasacademy.in/services",
  },
  alternates: {
    canonical: "https://pranarasacademy.in/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
