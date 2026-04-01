import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical Skills Training in Hyderabad - Upskill for Success",
  description:
    "Upgrade your technical skills with expert training at Pranaras Academy, Hyderabad. Industry-relevant technical training programs for working professionals to stay competitive and advance their careers.",
  keywords: ["technical skills training Hyderabad", "technical training institute", "upskilling programs Hyderabad", "professional technical training", "IT training Hyderabad"],
  openGraph: {
    title: "Technical Skills Training - Pranaras Academy Hyderabad",
    description: "Industry-relevant technical training for working professionals in Hyderabad.",
    url: "https://pranarasacademy.in/services/technical-skills",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/technical-skills" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
