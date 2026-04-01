import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Manifestation & Mindset Coaching in Hyderabad - Transform Your Thinking",
  description:
    "Unlock your potential with manifestation & mindset coaching at Pranaras Academy, Hyderabad. Learn growth mindset techniques, positive thinking & manifestation practices for personal success.",
  keywords: ["manifestation coaching Hyderabad", "mindset coaching", "growth mindset training", "positive thinking coaching Hyderabad", "manifestation techniques"],
  openGraph: {
    title: "Manifestation & Mindset Coaching - Pranaras Academy Hyderabad",
    description: "Growth mindset & manifestation coaching for personal success in Hyderabad.",
    url: "https://pranarasacademy.in/services/manifestation-mindset",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/manifestation-mindset" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
