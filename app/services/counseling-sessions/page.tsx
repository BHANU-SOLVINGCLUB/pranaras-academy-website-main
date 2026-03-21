import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react"

// DRAFT - awaiting final content from client
export default function CounselingSessionsPage() {
  const topics = [
    "One-to-one guidance for academic concerns",
    "Managing stress, anxiety, and emotional overload",
    "Communication in family, campus, and peer circles",
    "Confidence recovery after setbacks",
    "Study-life balance and routine planning",
    "Action plans for placements and career readiness",
  ]

  return (
    <>
      <Header />

      <main>
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" className="mb-8" asChild>
                <Link href="/services#students">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Services
                </Link>
              </Button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Counseling Sessions</h1>
                  <p className="text-muted-foreground">One-on-one guidance and support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">What This Service Covers</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our Counseling Sessions provide a confidential and supportive space for students to discuss
                    challenges and find practical direction. Each session helps learners understand their concerns,
                    regulate emotions, and build healthier coping strategies. This service is intended for college
                    students and final-year students who need guided support for academics, personal growth, and career
                    transitions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Key Topics</h2>
                  <ul className="space-y-3">
                    {topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Who Is This For?</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    This program is designed for college and final-year students who are facing stress, low confidence,
                    confusion, or emotional pressure and want structured one-to-one support to move ahead with clarity.
                  </p>
                </CardContent>
              </Card>

              <div className="flex justify-center pt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">Contact Us for This Program</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
