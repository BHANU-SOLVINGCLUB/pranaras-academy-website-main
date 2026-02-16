import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lightbulb, ArrowLeft, CheckCircle } from "lucide-react"

export default function CorporateSoftSkillsPage() {
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
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    Corporate Soft Skills Training Programs
                  </h1>
                  <p className="text-muted-foreground">Empowering people. Strengthening teams. Transforming organizations.</p>
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Corporate Soft Skills Training Programs</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    Empowering people. Strengthening teams. Transforming organizations. Pranaras Academy
                    delivers comprehensive corporate soft skills training that enhances communication, teamwork, and
                    leadership across organizations.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our programs focus on real workplace behavior and practical learning to create confident,
                    professional, and high-performing employees.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Soft Skills Are Critical for Corporates</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Improves workplace communication</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Strengthens collaboration and teamwork</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Enhances leadership effectiveness</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Reduces conflicts and misunderstandings</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Boosts productivity and morale</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Supports long-term business success</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">About Our Corporate Training Program</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our corporate training is practical, interactive, and results-driven. Instead of theory-based sessions,
                    participants engage in activities, discussions, and real-life scenarios that reflect everyday workplace
                    challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Training Objectives</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Communicate confidently and professionally</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Improve teamwork and collaboration</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Develop leadership qualities</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Handle clients and customers effectively</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Increase productivity and time management</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Build positive workplace behavior</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Who Can Benefit?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Entry-level employees</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Executives and team members</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Team leaders and managers</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customer service and sales staff</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Corporate departments and project teams</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Core Soft Skills Modules Covered</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Communication skills – verbal, non-verbal, business writing, presentations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Personality development and professional presence</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Teamwork and collaboration strategies</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Leadership and decision-making skills</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Time management and productivity techniques</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Emotional intelligence and stress management</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Conflict resolution and problem-solving</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customer service and workplace etiquette</span></li>
                  </ul>
                  <p className="text-base text-muted-foreground mt-4 italic">
                    Each module is designed to strengthen both individual effectiveness and team performance through
                    hands-on practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Training Methodology</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Interactive workshops</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Role plays and simulations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Group discussions</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Team activities and games</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Case studies</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Practice presentations</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Continuous feedback sessions</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Action plans for improvement</span></li>
                  </ul>
                  <p className="text-base text-muted-foreground mt-4 italic">
                    Our experiential learning approach ensures participants actively engage in every session and apply
                    skills immediately in the workplace.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Corporate Training Formats</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">On-site corporate training</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Off-site workshops</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Online sessions</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Hybrid programs</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Short-term or long-term courses</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customized modules for departments</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Why Choose Pranaras Academy?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Industry-focused and practical training methods</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Experienced and professional trainers</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Customized programs for organizational needs</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Engaging and activity-based sessions</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Holistic development of communication and leadership</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Flexible scheduling options</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Supportive partnership approach</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">Proven results and positive feedback from clients</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary/5">
                <CardContent className="p-8 sm:p-10">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Vision</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To build confident, skilled, and professional workforces that contribute to organizational excellence.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Mission</h2>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        To deliver high-quality corporate training that enhances communication, teamwork, and leadership
                        for sustainable growth.
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
