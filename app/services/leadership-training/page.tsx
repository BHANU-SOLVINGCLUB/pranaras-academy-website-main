import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, ArrowLeft, CheckCircle } from "lucide-react"

export default function LeadershipTrainingPage() {
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
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    Leadership Training Sessions
                  </h1>
                  <p className="text-muted-foreground">
                    Develop confident, responsible, and effective leaders
                  </p>
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Leadership Training Sessions</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    Pranaras Academy offers comprehensive Leadership Training Sessions designed to develop
                    confident, responsible, and effective leaders. We believe leadership is not limited to titles or
                    positions. It is a quality that helps individuals guide themselves and others toward success.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    Our training focuses on building strong character, clear communication, teamwork, and smart
                    decision-making skills. Through practical and engaging sessions, we help participants discover their
                    strengths and learn how to lead with purpose and integrity.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    At Pranaras Academy, leadership is about creating positive influence, taking initiative, and inspiring
                    others to grow together.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Our Leadership Philosophy</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Leadership begins with self-discipline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Confidence grows through clarity and preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Communication builds trust and connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Responsibility creates respect</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">True leaders serve and support others</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Objectives of Our Training</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Develop strong self-confidence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Improve communication and presentation skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Encourage teamwork and cooperation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Strengthen decision-making abilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Build problem-solving mindset</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Prepare individuals for academic and professional leadership roles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Core Areas of Leadership Development</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Self-Leadership</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Self-awareness and goal setting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Time management and discipline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Emotional control and resilience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Positive attitude and responsibility</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Communication & Influence</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Public speaking skills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Active listening</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Body language and confidence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Conflict resolution and persuasion</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Teamwork & Collaboration</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Team coordination and trust building</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Delegation and support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base text-muted-foreground">Cooperation and shared goals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Our Training Methodology</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Interactive workshops and discussions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Group activities and leadership games</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Role plays and real-life simulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Case studies and problem-solving tasks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Presentations and peer feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Personal mentoring and guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Benefits of Leadership Training</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Increased confidence and clarity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Stronger communication skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Better decision-making ability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Improved teamwork and cooperation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Leadership presence and influence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Ability to handle challenges calmly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Greater career opportunities and growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Personal and professional success</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Choose Pranaras Academy?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Holistic development approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Practical and activity-based learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Experienced and supportive trainers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Friendly and motivating environment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Personalized attention for each learner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Real-life application of skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Affordable and accessible programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Focus on long-term transformation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary/5">
                <CardContent className="p-8 sm:p-10">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Mission</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To nurture confident, ethical, and responsible leaders who can create positive change in society
                        and inspire others through their actions.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Vision</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To become a trusted center for leadership excellence, empowering individuals with the skills and
                        mindset needed to lead successfully in every area of life.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center pt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">Join Pranaras Academy Today</Link>
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
