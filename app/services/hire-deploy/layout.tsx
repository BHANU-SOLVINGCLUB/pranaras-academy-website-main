import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hire, Train & Deploy Programs in Hyderabad - Talent Solutions",
  description:
    "End-to-end hire, train & deploy programs at Pranaras Academy, Hyderabad. We recruit, train and deploy job-ready talent for your organization. Reduce onboarding time and get skilled professionals fast.",
  keywords: ["hire train deploy Hyderabad", "talent solutions Hyderabad", "staffing and training", "job ready talent Hyderabad", "corporate hiring solutions"],
  openGraph: {
    title: "Hire, Train & Deploy - Pranaras Academy Hyderabad",
    description: "End-to-end hire, train & deploy talent solutions for organizations in Hyderabad.",
    url: "https://pranarasacademy.in/services/hire-deploy",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/hire-deploy" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
