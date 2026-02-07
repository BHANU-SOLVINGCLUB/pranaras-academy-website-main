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
      description:
        "A holistic program designed to enhance communication, confidence, attitude, and workplace readiness. This practical, activity-based, and learner-centered training equips participants with essential soft skills for personal growth and professional success through real-life examples and interactive learning methods.",
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
        {/* Hero Section - fits within viewport */}
        <section className="h-[100dvh] min-h-0 flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="container mx-auto max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-balance">Training Programs</h1>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  Comprehensive learning pathways designed to accelerate your professional growth.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href="/contact">Talk to Us</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
                <img
                  src={sectionImages.hero}
                  alt="Professional training program session"
                  className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid - viewport height minimum */}
        <section className="min-h-[100dvh] flex flex-col justify-center bg-muted/30 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="container mx-auto w-full">
            <div className="space-y-4 sm:space-y-6">
              {programs.map((program, index) => (
                <Card key={program.title} className="overflow-visible hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    <div
                      className={`p-4 sm:p-6 ${index % 2 === 0 ? "bg-primary/5" : "bg-accent/5"} flex flex-col justify-center`}
                    >
                      <div className="relative overflow-hidden rounded-xl border bg-background shadow-sm mb-3 sm:mb-4">
                        <img
                          src={program.image}
                          alt={`${program.category} program`}
                          className="h-36 sm:h-40 lg:h-48 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-background shadow-md flex items-center justify-center mb-3 sm:mb-4">
                        <program.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1 sm:mb-2">{program.category}</div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{program.title}</h3>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        <span className="font-semibold">Duration:</span> {program.duration}
                      </div>
                    </div>
                    <div className="md:col-span-2 p-4 sm:p-6 flex flex-col justify-between min-h-0 overflow-visible">
                      <div className="min-h-0 overflow-visible">
                        <CardDescription className="text-sm sm:text-base mb-2 sm:mb-3">{program.description}</CardDescription>
                        <div className="mb-3 sm:mb-4">
                          <h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">Key Topics Covered:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {program.topics.map((topic) => (
                              <span key={topic} className="px-2 py-0.5 bg-muted text-[10px] sm:text-xs font-medium rounded-full">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 pt-2">
                        <Button
                          size="sm"
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

        {/* Custom Programs - viewport height */}
        <section className="h-[100dvh] min-h-0 flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="container mx-auto w-full">
            <Card className="overflow-hidden border-2">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4 text-balance">
                    Custom Corporate Programs
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-pretty">
                    Bespoke training programs tailored to your organization&apos;s needs — from onboarding to leadership
                    development.
                  </p>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">Request Custom Program</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={sectionImages.custom}
                    alt="Corporate training and collaboration"
                    className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
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
