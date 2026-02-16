import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, ArrowLeft, CheckCircle } from "lucide-react"

export default function HireDeployPage() {
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
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    Hire & Deploy Programs
                  </h1>
                  <p className="text-muted-foreground">Skilled Talent. Ready from Day One.</p>
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Hire & Deploy Programs</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    Skilled Talent. Ready from Day One.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    Our Hire & Deploy Programs bridge the gap between education and employment by preparing
                    candidates with the exact technical, professional, and behavioral skills required by modern
                    organizations. We train, assess, and deploy industry-ready professionals who contribute from the
                    first day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Understanding Hire & Deploy</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Candidate sourcing and screening</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Role-based skill training</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Workplace readiness development</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Performance assessment</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Deployment to organizations</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">The Workforce Challenges We Address</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Skill gaps among new hires</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Long onboarding time</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">High training costs</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Low productivity during initial months</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Poor communication and confidence</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Early attrition</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Pre-Deployment Skill Training</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Technical competencies</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Domain knowledge</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Tools and software exposure</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Real-time assignments</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Practical simulations</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Professional & Behavioral Development</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Communication skills</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Business etiquette</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Time management</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Team collaboration</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Emotional intelligence</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Workplace ethics</span></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Industry-Specific Technical Programs</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Information Technology skills</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customer service & support</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Sales and marketing</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Banking & finance operations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Administrative and HR support</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Digital tools and platforms</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Campus to Corporate Transition</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Corporate culture orientation</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Confidence building</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Presentation skills</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Interview readiness</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Professional discipline</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Screening & Talent Assessment</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Skill tests</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Aptitude evaluation</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Behavioral assessments</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Mock interviews</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Performance reviews</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Benefits</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Benefits for Organizations</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Immediate job-ready workforce</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Reduced hiring risk</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Lower training expenses</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Faster onboarding</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Improved productivity</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Better employee retention</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Scalable workforce solutions</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Benefits for Candidates</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Industry-relevant skills</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Increased employability</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Higher confidence</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Professional behavior</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Career growth opportunities</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Real-world exposure</span></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Choose Pranaras Academy?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customized workforce solutions</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Job-ready trained professionals</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Practical learning methodology</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Experienced trainers and mentors</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Pre-screened talent pool</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Faster deployment process</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Continuous post-deployment support</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Long-term partnership approach</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary/5">
                <CardContent className="p-8 sm:p-10">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Vision</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To connect skilled individuals with meaningful career opportunities while helping organizations build
                        reliable and high-performing teams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center pt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">Build Your Future Workforce</Link>
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
