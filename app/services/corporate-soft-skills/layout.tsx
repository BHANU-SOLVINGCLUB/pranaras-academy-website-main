import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Soft Skills Training in Hyderabad - Empower Your Workforce",
  description:
    "Customized corporate soft skills training programs at Pranaras Academy, Hyderabad. Improve employee communication, teamwork, customer service & professional etiquette for organizational excellence.",
  keywords: ["corporate soft skills training Hyderabad", "corporate training programs", "employee training Hyderabad", "workplace communication training", "professional etiquette training"],
  openGraph: {
    title: "Corporate Soft Skills Training - Pranaras Academy Hyderabad",
    description: "Customized corporate soft skills training for organizations in Hyderabad.",
    url: "https://pranarasacademy.in/services/corporate-soft-skills",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/corporate-soft-skills" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
