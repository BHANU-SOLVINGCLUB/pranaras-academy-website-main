import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Leadership & Executive Coaching in Hyderabad",
  description:
    "Executive coaching & corporate leadership development at Pranaras Academy, Hyderabad. Develop senior leaders, CXOs & managers with personalized coaching for strategic thinking, influence & organizational impact.",
  keywords: ["executive coaching Hyderabad", "corporate leadership coaching", "CXO coaching", "senior leadership development", "executive development program Hyderabad"],
  openGraph: {
    title: "Corporate Leadership & Executive Coaching - Pranaras Academy",
    description: "Executive coaching & leadership development for senior leaders in Hyderabad.",
    url: "https://pranarasacademy.in/services/corporate-leadership-coaching",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/corporate-leadership-coaching" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
