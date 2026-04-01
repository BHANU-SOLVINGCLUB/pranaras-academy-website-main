import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Motivational Sessions in Hyderabad - Inspire & Empower",
  description:
    "Book powerful motivational sessions at Pranaras Academy, Hyderabad. Inspiring talks for students, professionals & organizations. Boost morale, confidence & drive with expert motivational speakers.",
  keywords: ["motivational sessions Hyderabad", "motivational speaker Hyderabad", "motivational talks for students", "inspirational sessions Hyderabad", "motivational training"],
  openGraph: {
    title: "Motivational Sessions - Pranaras Academy Hyderabad",
    description: "Powerful motivational sessions for students, professionals & organizations in Hyderabad.",
    url: "https://pranarasacademy.in/services/motivational-sessions",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/motivational-sessions" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
