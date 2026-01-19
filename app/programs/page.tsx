import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, Users, Code, Award, Brain } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      icon: MessageCircle,
      category: "Soft Skills Development & Personality Enhancement",
      title: "Comprehensive Soft Skills Training Program",
      duration: "1-2 Weeks (Short Term) • 1-3 Months (Certificate) • Custom Programs Available",
      description: "A holistic program designed to enhance communication, confidence, attitude, and workplace readiness. This practical, activity-based, and learner-centered training equips participants with essential soft skills for personal growth and professional success through real-life examples and interactive learning methods.",
      image: "/stock-images/trainingprograms_comprehensive_soft.jpeg",
      topics: [
        "Communication Skills (Verbal & Non-Verbal)",
        "Personality Development",
        "Self-Confidence Building",
        "Positive Attitude & Mindset",
        "Emotional Intelligence",
        "Leadership Skills",
        "Teamwork & Collaboration",
        "Time Management",
        "Problem-Solving Skills",
        "Stress Management",
        "Workplace Etiquette & Ethics",
        "Interview & Presentation Skills",
      ],
    },
    {
      icon: Users,
      category: "Managerial Skills (MS)",
      title: "Leadership & Management Essentials",
      duration: "10-14 weeks",
      description:
        "Develop critical managerial capabilities including team management, decision-making, and strategic thinking.",
      image: "/stock-images/trainingprograms_leadrership_management.jpeg",
      topics: [
        "Team Management",
        "Decision Making",
        "Strategic Planning",
        "Performance Management",
        "Change Management",
      ],
    },
    {
      icon: Code,
      category: "Technical Training (TT)",
      title: "Industry-Specific Technical Skills",
      duration: "12-16 weeks",
      description: "Gain hands-on technical expertise aligned with industry standards and market demands.",
      image: "/stock-images/trainingprograms_industry_specific.jpeg",
      topics: [
        "Industry Tools & Technologies",
        "Best Practices",
        "Quality Standards",
        "Innovation Techniques",
        "Project Implementation",
      ],
    },
    {
      icon: Award,
      category: "Leadership Development",
      title: "Executive & Leadership Coaching",
      duration: "6-12 months",
      description: "Transform into an inspiring leader with advanced leadership principles and executive presence.",
      image: "/stock-images/trainingprograms_executive_leadership.jpeg",
      topics: [
        "Visionary Leadership",
        "Executive Presence",
        "Strategic Communication",
        "Organizational Impact",
        "Coaching & Mentoring",
      ],
    },
    {
      icon: Brain,
      category: "Life Coaching",
      title: "Personal Transformation Programs",
      duration: "3-6 months",
      description:
        "Unlock your full potential through mindset coaching, goal setting, and personal development strategies.",
      image: "/stock-images/trainingprogram_personal_transformation.jpeg",
      topics: [
        "Goal Setting & Achievement",
        "Mindset Transformation",
        "Work-Life Balance",
        "Manifestation Techniques",
        "Personal Branding",
      ],
    },
  ]

  const sectionImages = {
    hero: "/stock-images/trainingprogram_hero_section.jpeg",
    programs: "/stock-images/trainingprogram_hero_section.jpeg",
    custom: "/stock-images/trainingprogram_custom_corporate.jpeg",
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-primary text-balance">Training Programs</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Comprehensive learning pathways designed to accelerate your professional growth.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href="/contact">Talk to Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
                <img
                  src={sectionImages.hero}
                  alt="Professional training program session"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {programs.map((program, index) => (
                <Card key={program.title} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div
                      className={`p-6 ${index % 2 === 0 ? "bg-primary/5" : "bg-accent/5"} flex flex-col justify-center`}
                    >
                      <div className="relative overflow-hidden rounded-xl border bg-background shadow-sm mb-5">
                        <img
                          src={program.image}
                          alt={`${program.category} program`}
                          className="h-52 sm:h-60 lg:h-72 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-background shadow-md flex items-center justify-center mb-4">
                        <program.icon className={`w-7 h-7 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                      </div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">{program.category}</div>
                      <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold">Duration:</span> {program.duration}
                      </div>
                    </div>
                    <div className="md:col-span-2 p-8 flex flex-col justify-between">
                      <div>
                        <CardDescription className="text-base mb-4">{program.description}</CardDescription>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-3 text-foreground">Key Topics Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.topics.map((topic) => (
                              <span key={topic} className="px-3 py-1 bg-muted text-xs font-medium rounded-full">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button
                          variant="default"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          asChild
                        >
                          <Link href="/contact">Enroll Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Programs */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-2">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 sm:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-balance">
                    Custom Corporate Programs
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 text-pretty">
                    Bespoke training programs tailored to your organization&apos;s needs — from onboarding to leadership
                    development.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">Request Custom Program</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={sectionImages.custom}
                    alt="Corporate training and collaboration"
                    className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
