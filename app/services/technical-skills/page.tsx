import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, ArrowLeft, CheckCircle } from "lucide-react"

export default function TechnicalSkillsPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-100">
        <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/80 pt-10 sm:pt-14 pb-10 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Button variant="ghost" className="mb-6 -ml-2 text-white/80 hover:text-white hover:bg-white/10" asChild>
                <Link href="/services#professionals">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Services
                </Link>
              </Button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Technical Skills Training for Working Professionals
                  </h1>
                  <p className="text-lg text-white/80">Strengthen your technical expertise. Accelerate your career growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-primary/[0.08] via-muted/40 to-slate-200/70 pt-10 pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="service-detail-grid max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-stretch">
              <Card className="border border-primary/10 shadow-xl bg-white/95 backdrop-blur">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Technical Skills Training for Working Professionals</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    Strengthen your technical expertise. Accelerate your career growth. Pranaras Academy provides
                    comprehensive technical skills training that prepares professionals to perform efficiently in modern
                    workplaces.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our program bridges the gap between theory and practical application through hands-on learning,
                    demonstrations, and real-time projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Technical Skills Matter</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Improves productivity and efficiency</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Reduces errors and delays</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Helps adapt to new technologies quickly</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Enhances job performance and quality of work</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Builds professional confidence</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Supports long-term career growth</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">About the Program</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    This program is practical, industry-focused, and result-oriented. Participants actively practice each
                    concept instead of only learning theory. The training ensures immediate workplace application and
                    measurable improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Program Objectives</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Understand modern tools and technologies clearly</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Apply technical knowledge in daily tasks</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Improve work speed and accuracy</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Handle technical challenges independently</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Optimize and automate processes</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Enhance overall professional competence</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Who Should Attend?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Working professionals</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Corporate employees</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Administrative and operations staff</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">IT and technical teams</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Entrepreneurs</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Job seekers upgrading skills</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Core Technical Skill Areas Covered</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Digital literacy and workplace technology basics</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Advanced MS Excel, Word, and PowerPoint skills</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Data handling, reporting, and analysis</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Professional email and documentation practices</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Process improvement and productivity tools</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Troubleshooting and logical problem solving</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Automation techniques and smart work methods</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Technical communication and reporting</span></li>
                  </ul>
                  <p className="text-base text-muted-foreground mt-4 italic">
                    These modules equip participants with practical skills required to perform tasks efficiently and
                    deliver high-quality results in their roles.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Training Methodology</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Live demonstrations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Hands-on practice sessions</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Real-time projects</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Case studies</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Group exercises</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Simulations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Assignments and assessments</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Personalized feedback</span></li>
                  </ul>
                  <p className="text-base text-muted-foreground mt-4 italic">
                    Our learner-centered approach ensures participants gain confidence and real competence through
                    continuous practice and support.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Benefits of the Program</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Increased technical confidence</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Faster task completion</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Improved accuracy</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Better quality work output</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Greater independence</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Higher productivity</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Stronger professional image</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-white">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Choose Pranaras Academy?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Practical and hands-on learning approach</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Industry-relevant curriculum</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Experienced and supportive trainers</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customized training options</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Small batch sizes with individual attention</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Friendly and motivating learning environment</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Holistic development of technical and soft skills</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Flexible schedules for working professionals</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Proven success and positive learner outcomes</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-primary/20 shadow-xl bg-primary/10">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Vision</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To develop technically strong professionals who contribute effectively to their organizations and
                        society.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Mission</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To provide high-quality, practical, and industry-focused training that empowers individuals with real
                        technical competence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center pt-8 lg:col-span-2">
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
