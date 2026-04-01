import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Training Programs - Soft Skills, Leadership & Corporate Programs",
  description:
    "Explore Pranaras Academy's structured training programs: soft skills development, personal transformation, leadership development, corporate training & hire-train-deploy programs in Hyderabad.",
  keywords: [
    "soft skills training program Hyderabad",
    "leadership development program Hyderabad",
    "corporate training program",
    "personal transformation program",
    "hire train deploy Hyderabad",
    "placement training program",
  ],
  openGraph: {
    title: "Training Programs - Pranaras Academy Hyderabad",
    description:
      "Structured training programs for soft skills, leadership, corporate training & more in Hyderabad.",
    url: "https://pranarasacademy.in/programs",
  },
  alternates: {
    canonical: "https://pranarasacademy.in/programs",
  },
}

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
