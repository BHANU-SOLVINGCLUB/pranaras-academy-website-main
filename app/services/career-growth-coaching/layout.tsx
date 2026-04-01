import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Growth Coaching in Hyderabad - Accelerate Your Career",
  description:
    "Accelerate your career with expert career growth coaching at Pranaras Academy, Hyderabad. Get personalized coaching for career transitions, promotions, professional development & workplace success.",
  keywords: ["career growth coaching Hyderabad", "career coaching near me", "professional development coaching", "career transition coaching", "promotion coaching Hyderabad"],
  openGraph: {
    title: "Career Growth Coaching - Pranaras Academy Hyderabad",
    description: "Personalized career growth coaching for professionals in Hyderabad.",
    url: "https://pranarasacademy.in/services/career-growth-coaching",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/career-growth-coaching" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
