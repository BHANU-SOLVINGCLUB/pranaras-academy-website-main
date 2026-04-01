import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Managerial Skills Training in Hyderabad - Lead Teams Effectively",
  description:
    "Develop essential managerial skills at Pranaras Academy, Hyderabad. Training in team management, decision-making, delegation, conflict resolution & strategic thinking for new and experienced managers.",
  keywords: ["managerial skills training Hyderabad", "management training Hyderabad", "team management training", "manager development program", "leadership management skills"],
  openGraph: {
    title: "Managerial Skills Training - Pranaras Academy Hyderabad",
    description: "Essential managerial skills training for new and experienced managers in Hyderabad.",
    url: "https://pranarasacademy.in/services/managerial-skills",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/managerial-skills" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
