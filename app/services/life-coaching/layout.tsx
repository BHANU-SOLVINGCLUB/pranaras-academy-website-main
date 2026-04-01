import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Life Coaching Sessions in Hyderabad - Personal Transformation",
  description:
    "Transform your life with expert life coaching sessions at Pranaras Academy, Hyderabad. Build confidence, clarity, goal-setting skills & unlock your true potential with Dr. Pranathi Shubhasri.",
  keywords: ["life coaching Hyderabad", "life coach near me", "personal transformation coaching", "confidence coaching Hyderabad", "goal setting coaching"],
  openGraph: {
    title: "Life Coaching Sessions - Pranaras Academy Hyderabad",
    description: "Expert life coaching sessions to build confidence, clarity & unlock your potential in Hyderabad.",
    url: "https://pranarasacademy.in/services/life-coaching",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/life-coaching" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
