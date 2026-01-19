import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, Target, Briefcase, GraduationCap, Heart, TrendingUp, Award, Sparkles } from "lucide-react"

export default function HomePage() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Comprehensive soft skills development and personality enhancement programs designed to build communication, confidence, and workplace readiness for academic and career success.",
      href: "/services#students",
      gradient: "from-primary to-accent",
      image: "/stock-images/homepage_who_we_serve.jpeg",
      highlights: ["Confidence & communication", "Placement readiness"],
    },
    {
      icon: Users,
      title: "Working Professionals",
      description: "Communication, confidence, managerial skills, and career growth coaching for professionals.",
      href: "/services#professionals",
      gradient: "from-primary to-accent",
      image: "/stock-images/homepage_who_we_serve_working.jpeg",
      highlights: ["Leadership & ownership", "Career growth coaching"],
    },
    {
      icon: Briefcase,
      title: "Corporates",
      description: "Technical training, leadership development, team building, and hire & deploy programs.",
      href: "/services#corporates",
      gradient: "from-primary to-accent",
      image: "/stock-images/homepage_who_we_serve_corporates.jpeg",
      highlights: ["Upskilling programs", "Team building & coaching"],
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Motivational sessions for government schools and social welfare institutions.",
      href: "/social-impact",
      gradient: "from-primary to-accent",
      image: "/stock-images/homepage_who_we_serve_social_impact.jpeg",
      highlights: ["Government schools", "Welfare institutions"],
    },
  ]

  const features = [
    {
      icon: Target,
      title: "Live Sessions & Workshops",
      description: "Interactive training sessions with real-world applications",
    },
    {
      icon: TrendingUp,
      title: "Skill Development Programs",
      description: "Comprehensive programs designed for career advancement",
    },
    {
      icon: Award,
      title: "Expert-Led Training",
      description: "Learn from experienced coaches and industry professionals",
    },
    {
      icon: Sparkles,
      title: "Hire & Deploy Programs",
      description: "Corporate solutions for talent development and deployment",
    },
  ]

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Corporate Clients" },
    { value: "100+", label: "Workshops Conducted" },
    { value: "95%", label: "Satisfaction Rate" },
  ]

  const images = {
    hero: "/stock-images/homepage_hero_section.jpeg",
    features: "/stock-images/homepage_features_section.jpeg",
    testimonials: "/stock-images/homepage_testimonial_section.jpeg",
    cta: "/stock-images/homepage_who_we_serve_cta.jpeg",
  }

  const testimonials = [
    {
      name: "Ananya, Engineering Student",
      role: "Final-year student, Bengaluru",
      quote:
        "The soft skills and mindset sessions at Pranaras Academy helped me build confidence for campus placements.",
    },
    {
      name: "Rahul, Team Lead",
      role: "IT professional, Hyderabad",
      quote:
        "Our team saw a clear improvement in communication and ownership after the managerial skills workshop.",
    },
    {
      name: "HR Manager",
      role: "Corporate client, Chennai",
      quote:
        "Pranaras designed a custom training plan that aligned perfectly with our business goals and culture.",
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
                <Sparkles className="w-4 h-4" />
                Professional Training & Coaching
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                <span className="text-foreground">Build Skills.</span>{" "}
                <span className="text-primary">
                  Shape Futures.
                </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
                  Transform your potential into performance with professional soft skills training designed to enhance communication, confidence, attitude, and workplace readiness through practical, activity-based learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start pt-2">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 h-14 shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <Link href="/programs">
                      Explore Programs <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 bg-transparent" asChild>
                    <Link href="/contact">Schedule a Session</Link>
                  </Button>
                </div>
                <div className="pt-4 text-sm text-muted-foreground">
                  Trusted by learners and teams across India • Workshops • Long-term programs • Corporate partnerships
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
                  <img
                    src={images.hero}
                    alt="Indian corporate training session"
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="hidden sm:block absolute -bottom-6 -left-6 w-48 rounded-2xl border bg-background shadow-xl p-4">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Students Trained</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Trusted by Students, Professionals & Corporates
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Hear from people and organizations across India who have experienced our programs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 items-stretch">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="h-full border-2 bg-background hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-3 flex flex-col justify-between h-full">
                    <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-border bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
                <span className="text-primary">Who</span> We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Empowering diverse audiences with tailored training solutions for every stage of growth
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {audiences.map((audience) => (
                <Link key={audience.title} href={audience.href} className="group">
                  <Card className="h-full overflow-hidden border-2 hover:border-accent/50 hover:shadow-2xl transition-all duration-300">
                    <div className="grid md:grid-cols-5 h-full">
                      <div className="relative md:col-span-2 min-h-56 md:min-h-full">
                        <img
                          src={audience.image}
                          alt={`${audience.title} training`}
                          className="h-full w-full min-h-[300px] sm:min-h-[350px] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-background/30"></div>
                      </div>
                      <CardContent className="md:col-span-3 p-6 sm:p-7 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between gap-3">
                            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                              Ideal for <span className="text-foreground">{audience.title}</span>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                              <audience.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                              {audience.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
                          </div>

                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {audience.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-5 flex items-center text-accent font-medium">
                          Explore {audience.title} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
                <span className="text-primary">What</span> We Offer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive training solutions designed to accelerate your personal and professional growth
              </p>
            </div>
            <div className="mb-10 grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-xl">
                <img
                  src={images.features}
                  alt="Indian participants in a training workshop"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-balance">Designed for real outcomes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practical sessions, live workshops, and structured programs that help you communicate with confidence,
                  lead effectively, and perform at your best.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/programs">Browse Programs</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-2">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 sm:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl sm:text-5xl font-bold mb-5 text-balance">Ready to Transform Your Skills?</h2>
                  <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                    Join students, professionals, and corporate teams who are building confidence, leadership, and
                    career-ready skills with Pranaras Academy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 h-14 shadow-lg"
                      asChild
                    >
                      <Link href="/contact">
                        Get Started <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-10 h-14" asChild>
                      <Link href="/programs">Explore Programs</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={images.cta}
                    alt="Professional coaching session in India"
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
