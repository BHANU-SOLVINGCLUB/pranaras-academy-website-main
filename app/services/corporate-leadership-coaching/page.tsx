import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Crown, ArrowLeft, CheckCircle } from "lucide-react"

export default function CorporateLeadershipCoachingPage() {
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
                  <Crown className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    Corporate Leadership & Executive Coaching
                  </h1>
                  <p className="text-muted-foreground">Build confident, capable, and visionary leaders</p>
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Corporate Leadership & Executive Coaching</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    At Pranaras Academy, we help organizations build confident, capable, and visionary leaders. Our
                    Corporate Leadership and Executive Coaching programs are designed to strengthen
                    decision-making, communication, people management, and strategic thinking so that businesses
                    can grow sustainably in today&apos;s competitive world.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We believe leadership is not just a position but a responsibility. Our programs focus on practical
                    transformation, helping professionals translate knowledge into measurable workplace performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Our Approach</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Experiential and activity-based learning</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Real business case studies</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Personalized coaching</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Group workshops and simulations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Continuous feedback and improvement</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Action plans with measurable outcomes</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Executive Coaching Services</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Executive Coaching</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Strategic thinking and decision-making</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Executive presence and confidence</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Stakeholder management</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">High-impact communication</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Emotional intelligence</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Stress and pressure management</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Leadership Development Programs</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Team leadership and delegation</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Motivation and accountability</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Performance management</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Conflict resolution</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Coaching and mentoring skills</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Ethical leadership practices</span></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Corporate Skill Enhancement</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Professional & Soft Skills for Leaders</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Business communication mastery</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Presentation and public speaking skills</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Negotiation and influencing techniques</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Business etiquette and professionalism</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Relationship building and networking</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Cross-cultural communication</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Change & Transformation Leadership</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Leading during organizational change</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Resilience and adaptability</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Innovation mindset</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Managing resistance</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Crisis leadership</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Driving continuous improvement</span></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Benefits</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Benefits for Organizations</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Higher productivity and efficiency</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Improved employee engagement</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Stronger teamwork</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Better decision-making</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Reduced conflicts</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Positive workplace culture</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Stronger succession planning</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Benefits for Leaders</h3>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Greater confidence and clarity</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Improved communication</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Strategic mindset</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Better problem-solving skills</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Professional credibility</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span><span className="text-base text-muted-foreground">Work-life balance</span></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Choose Pranaras Academy?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customized programs for every organization</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Practical and results-oriented training</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Experienced and professional trainers</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Holistic leadership development</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Flexible delivery – on-site, virtual, hybrid</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Measurable progress and outcomes</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Long-term learning partnership</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Who Can Attend?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Senior Executives</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Managers and Team Leads</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Entrepreneurs and Business Owners</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">HR Professionals</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">High-potential employees</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Future leaders</span></li>
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
                        and inspire others through their actions. We provide high-quality training that transforms individuals into effective communicators, inspiring leaders, and skilled professionals who contribute positively to organizations and society.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Vision</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To become a trusted center for leadership excellence, empowering individuals with the skills and
                        mindset needed to lead successfully in every area of life. We aim to create confident, competent, and communication-ready professionals who succeed in every workplace, building strong, ethical, and impactful leaders who drive innovation and organizational success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary/5">
                <CardContent className="p-8 sm:p-10">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center italic">
                    Let&apos;s build strong, ethical, and impactful leaders together. Partner with Pranaras Academy to
                    transform your workforce and achieve sustainable success.
                  </p>
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
