import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leadership Training Sessions in Hyderabad - Develop Leaders",
  description:
    "Develop strong leadership skills with expert training at Pranaras Academy, Hyderabad. Leadership workshops for students, emerging leaders & professionals to build vision, influence & decision-making.",
  keywords: ["leadership training Hyderabad", "leadership development program", "leadership workshop Hyderabad", "leadership skills training", "emerging leaders program"],
  openGraph: {
    title: "Leadership Training - Pranaras Academy Hyderabad",
    description: "Expert leadership training workshops for students & professionals in Hyderabad.",
    url: "https://pranarasacademy.in/services/leadership-training",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/leadership-training" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
