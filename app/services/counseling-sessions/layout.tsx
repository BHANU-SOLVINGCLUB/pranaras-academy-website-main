import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Counseling Sessions in Hyderabad - Career & Personal Guidance",
  description:
    "Get expert counseling sessions at Pranaras Academy, Hyderabad. Career counseling, personal guidance & mentoring for students and professionals to overcome challenges and achieve goals.",
  keywords: ["counseling sessions Hyderabad", "career counseling Hyderabad", "personal counseling", "student counseling Hyderabad", "mentoring sessions"],
  openGraph: {
    title: "Counseling Sessions - Pranaras Academy Hyderabad",
    description: "Expert career & personal counseling for students and professionals in Hyderabad.",
    url: "https://pranarasacademy.in/services/counseling-sessions",
  },
  alternates: { canonical: "https://pranarasacademy.in/services/counseling-sessions" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
