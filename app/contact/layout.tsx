import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch for Training & Coaching",
  description:
    "Contact Pranaras Academy in Madhapur, Hyderabad for soft skills training, life coaching, corporate training & motivational sessions. Call +91 888 6 999 022 or email sales@pranarasacademy.com.",
  keywords: [
    "contact Pranaras Academy",
    "soft skills training Hyderabad contact",
    "life coaching inquiry Hyderabad",
    "corporate training Hyderabad contact",
    "Madhapur Hyderabad training",
  ],
  openGraph: {
    title: "Contact Pranaras Academy - Hyderabad",
    description:
      "Get in touch for soft skills training, life coaching & corporate training in Hyderabad. Located in Madhapur.",
    url: "https://pranarasacademy.in/contact",
  },
  alternates: {
    canonical: "https://pranarasacademy.in/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
