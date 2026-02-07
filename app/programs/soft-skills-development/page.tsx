import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, ArrowLeft, CheckCircle } from "lucide-react"

export default function SoftSkillsDevelopmentPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
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
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    Soft Skills Development & Personality Enhancement
                  </h1>
                  <p className="text-muted-foreground">
                    Empowering individuals with confidence, communication, and character for lifelong success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Content */}
        <section className="py-8 sm:py-12 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Program Overview */}
              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Program Overview</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    The Soft Skills Development & Personality Enhancement Program at Pranaras Academy is a comprehensive
                    training initiative designed to help learners build strong interpersonal skills, emotional balance, and professional
                    confidence. The program bridges the gap between academic knowledge and real-life application by developing
                    the attitudes, behaviors, and mindset required for success.
                  </p>
                </CardContent>
              </Card>

              {/* Program Objectives */}
              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Program Objectives</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg text-muted-foreground">
                        Improve communication and interpersonal effectiveness
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg text-muted-foreground">
                        Build self-confidence and a positive self-image
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg text-muted-foreground">
                        Develop emotional intelligence and self-discipline
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg text-muted-foreground">
                        Encourage leadership qualities and teamwork
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg text-muted-foreground">
                        Prepare learners for academic, professional, and social challenges
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="flex justify-center pt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">Enroll Now</Link>
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
