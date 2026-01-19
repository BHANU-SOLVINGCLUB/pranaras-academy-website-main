import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GraduationCap,
  Users,
  Briefcase,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  MessageCircle,
  Brain,
  Heart,
} from "lucide-react"

export default function ServicesPage() {
  const studentServices = [
    {
      icon: Lightbulb,
      name: "Soft Skills Development & Personality Enhancement",
      description: "Comprehensive training to enhance communication, confidence, attitude, and workplace readiness through practical, activity-based learning",
    },
    { icon: Heart, name: "Life Coaching", description: "Personal growth and self-discovery sessions" },
    { icon: Target, name: "Motivational Sessions", description: "Inspiring talks to boost motivation and drive" },
    { icon: Brain, name: "Manifestation & Mindset", description: "Transform your mindset for success" },
    { icon: MessageCircle, name: "Counseling Sessions", description: "One-on-one guidance and support" },
    { icon: Award, name: "Leadership Training", description: "Develop leadership qualities early" },
  ]

  const professionalServices = [
    { icon: MessageCircle, name: "Communication Skills", description: "Enhance verbal and non-verbal communication, presentation skills, and professional interaction" },
    { icon: TrendingUp, name: "Managerial Skills", description: "Essential management and leadership abilities" },
    { icon: Award, name: "Technical Training", description: "Industry-specific technical expertise" },
    { icon: Target, name: "Career Growth Coaching", description: "Strategic career development planning" },
  ]

  const corporateServices = [
    { icon: Lightbulb, name: "Soft Skills Training (SS)", description: "Professional soft skills development focusing on communication, emotional intelligence, leadership, and workplace excellence" },
    { icon: Award, name: "Technical Training (TT)", description: "Upskilling your workforce" },
    { icon: Users, name: "Leadership & Executive Coaching", description: "Develop strong organizational leaders" },
    { icon: Target, name: "Team Building Sessions", description: "Strengthen team dynamics and motivation" },
    { icon: Briefcase, name: "Hire & Deploy Programs", description: "End-to-end talent solutions" },
  ]

  const sectionImages = {
    hero: "/stock-images/service_page_hero_section.jpeg",
    students: "/stock-images/servicepage_student_section.jpeg",
    professionals: "/stock-images/servicepage_professional_section.jpeg",
    corporates: "/stock-images/servicepage_corporate_section.jpeg",
    cta: "/stock-images/homepage_who_we_serve_cta.jpeg",
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-primary text-balance">Our Services</h1>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Professional soft skills training designed to enhance communication, confidence, attitude, and workplace readiness. Our holistic personality development programs help learners succeed in academics, career, and personal life through practical, activity-based, and learner-centered training.
                </p>
                <div className="grid grid-cols-2 gap-5 text-sm text-muted-foreground pt-4">
                  <div>✔ Workshops</div>
                  <div>✔ Long-term programs</div>
                  <div>✔ Custom corporate training</div>
                  <div>✔ Coaching support</div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
                <img
                  src={sectionImages.hero}
                  alt="Indian professional training workshop"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Students Section */}
        <section id="students" className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">For Students</h2>
                <p className="text-muted-foreground">Building foundational skills for future success</p>
              </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:gap-10">
              {studentServices.map((service) => (
                <Card key={service.name} className="bg-muted/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-6 pt-6 px-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight mb-3">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 px-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-3xl border bg-background shadow-xl">
                  <img
                    src={sectionImages.students}
                    alt="Indian students in a learning session"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover object-[55%_center]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professionals Section */}
        <section id="professionals" className="py-20 sm:py-24 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">For Working Professionals</h2>
                <p className="text-muted-foreground">Accelerate your career with advanced skills</p>
              </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:gap-10">
              {professionalServices.map((service) => (
                <Card key={service.name} className="bg-muted/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-6 pt-6 px-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg leading-tight mb-3">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 px-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
              </div>
              <div className="lg:sticky lg:top-24 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-3xl border bg-background shadow-xl">
                  <img
                    src={sectionImages.professionals}
                    alt="Indian professionals in a team discussion"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporates Section */}
        <section id="corporates" className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">For Corporates</h2>
                <p className="text-muted-foreground">Comprehensive workforce development solutions</p>
              </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:gap-10">
              {corporateServices.map((service) => (
                <Card key={service.name} className="bg-muted/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-6 pt-6 px-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight mb-3">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 px-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-3xl border bg-background shadow-xl">
                  <img
                    src={sectionImages.corporates}
                    alt="Indian corporate training environment"
                    className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-2">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 sm:p-16 lg:p-20 flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-balance">Ready to Get Started?</h2>
                  <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                    Tell us your goals and audience size — we’ll recommend the right program and timeline.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href="/contact">Contact Us Now</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={sectionImages.cta}
                    alt="Team collaboration and training"
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
