import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Dr. Pranathi Shubhasri | Founder & Head Coach",
  description:
    "Meet Dr. Pranathi Shubhasri, founder of Pranaras Academy in Hyderabad. Learn about our mission to nurture confident, ethical leaders through expert soft skills training, life coaching & motivational sessions.",
  keywords: [
    "Pranaras Academy about",
    "Dr Pranathi Shubhasri",
    "life coach Hyderabad",
    "motivational trainer Hyderabad",
    "soft skills trainer Hyderabad",
    "leadership coach Hyderabad",
  ],
  openGraph: {
    title: "About Pranaras Academy - Dr. Pranathi Shubhasri",
    description:
      "Meet Dr. Pranathi Shubhasri, founder of Pranaras Academy. Expert soft skills training, life coaching & motivational sessions in Hyderabad.",
    url: "https://pranarasacademy.in/about",
  },
  alternates: {
    canonical: "https://pranarasacademy.in/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
