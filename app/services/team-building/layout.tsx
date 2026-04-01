import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team Building Sessions in Hyderabad - Strengthen Your Teams",
  description:
    "Engaging team building sessions at Pranaras Academy, Hyderabad. Activity-based team bonding, collaboration workshops & trust-building exercises for corporate teams to improve productivity and morale.",
  keywords: ["team building Hyderabad", "team building activities", "corporate team building", "team bonding sessions", "collaboration workshops Hyderabad"],
  openGraph: {
    title: "Team Building Sessions - Pranaras Academy Hyderabad",
    description: "Engaging team building sessions & collaboration workshops for corporate teams in Hyderabad.",
    url: "https://pranarasacademy.in/services/team-building",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/team-building" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
