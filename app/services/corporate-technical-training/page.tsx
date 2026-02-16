import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, ArrowLeft, CheckCircle } from "lucide-react"

export default function CorporateTechnicalTrainingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" className="mb-8" asChild>
                <Link href="/services#corporates">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Services
                </Link>
              </Button>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    Corporate Technical Training Skills Program
                  </h1>
                  <p className="text-muted-foreground">Building Skilled Professionals for a Technology-Driven Workplace</p>
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Corporate Technical Training Skills Program</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    Building Skilled Professionals for a Technology-Driven Workplace. Pranaras Academy offers
                    comprehensive corporate technical training designed to enhance employee capability, improve
                    productivity, and strengthen organizational performance through practical, hands-on learning.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our programs focus on real-world applications, enabling professionals to adapt quickly to new tools,
                    systems, and technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Technical Training Matters</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Improves productivity and efficiency</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Reduces errors and operational costs</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Strengthens problem-solving skills</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Supports faster technology adoption</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Encourages innovation and continuous improvement</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Builds confident and competent teams</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">About Our Training Approach</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our training is interactive, industry-relevant, and results-oriented. Participants engage in
                    demonstrations, case studies, hands-on exercises, and real-time projects to ensure practical
                    understanding rather than theoretical knowledge alone.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Training Objectives</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Strengthen core technical competencies</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Upgrade knowledge with latest technologies</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Enhance practical implementation skills</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Improve troubleshooting and analytical abilities</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Increase workplace performance and accuracy</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Prepare teams for digital transformation</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Who Can Benefit</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Engineers and technicians</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">IT professionals</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Operations and production staff</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Supervisors and managers</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Entry-level employees</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Experienced professionals upgrading skills</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Key Technical Skills Covered</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Information Technology & Digital Skills</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Advanced computer proficiency</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">MS Office tools and productivity software</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Data management and reporting</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Cloud computing basics</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Cybersecurity awareness</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Collaboration tools</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Engineering & Operational Skills</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Process optimization</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Equipment handling and maintenance</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Quality control techniques</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Safety standards</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Technical troubleshooting</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Workflow management</span></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Training Methodology</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Instructor-led sessions</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Live demonstrations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Hands-on practice</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Case studies and simulations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Group projects</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Assessments and feedback</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Post-training support</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Training Formats Offered</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">On-site corporate training</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Classroom workshops</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Online live training</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Hybrid programs</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Short-term and long-term courses</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customized department-specific modules</span></li>
                  </ul>
                  <p className="text-base text-muted-foreground mt-4 italic">
                    Our flexible delivery ensures minimal disruption to daily operations while maximizing learning
                    outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Choose Pranaras Academy?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Industry-relevant curriculum aligned with market demands</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Experienced trainers with practical exposure</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customized solutions for each organization</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Interactive and engaging training methods</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Flexible scheduling options</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Focus on measurable results</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Continuous support and guidance</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Commitment to quality and professionalism</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary/5">
                <CardContent className="p-8 sm:p-10">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Vision</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To build technically skilled professionals who drive innovation and organizational success.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Mission</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To deliver high-quality, practical, and affordable technical training that empowers corporates and
                        employees alike.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center pt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">Partner with Pranaras Academy</Link>
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
