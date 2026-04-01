import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Communication Skills Training in Hyderabad - Speak with Confidence",
  description:
    "Master communication skills with expert training at Pranaras Academy, Hyderabad. Improve public speaking, presentation skills, interpersonal communication & professional English for career success.",
  keywords: ["communication skills training Hyderabad", "public speaking training Hyderabad", "presentation skills", "spoken English training Hyderabad", "interpersonal communication"],
  openGraph: {
    title: "Communication Skills Training - Pranaras Academy Hyderabad",
    description: "Expert communication skills training for professionals & students in Hyderabad.",
    url: "https://pranarasacademy.in/services/communication-skills",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/communication-skills" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
