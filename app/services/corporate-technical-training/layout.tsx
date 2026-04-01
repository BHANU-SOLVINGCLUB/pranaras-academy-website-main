import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Technical Training in Hyderabad - Upskill Your Teams",
  description:
    "Industry-specific corporate technical training programs at Pranaras Academy, Hyderabad. Upskill your workforce with customized technical training aligned to business objectives and industry standards.",
  keywords: ["corporate technical training Hyderabad", "employee technical upskilling", "corporate IT training", "workforce technical development", "custom technical training"],
  openGraph: {
    title: "Corporate Technical Training - Pranaras Academy Hyderabad",
    description: "Customized corporate technical training programs for organizations in Hyderabad.",
    url: "https://pranarasacademy.in/services/corporate-technical-training",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/corporate-technical-training" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
