import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, School, Users, Sparkles, Target, TrendingUp } from "lucide-react"

export default function SocialImpactPage() {
  const initiatives = [
    {
      icon: School,
      title: "Government Schools",
      description:
        "Motivational sessions and soft skills training for students in government schools to inspire and empower the next generation.",
      impact: "500+ students reached",
      image: "/stock-images/socialimpact_government_schools.jpeg",
    },
    {
      icon: Heart,
      title: "Social Welfare Institutions",
      description: "Life coaching and confidence-building programs for individuals in social welfare organizations.",
      impact: "200+ individuals impacted",
      image: "/stock-images/socialimpact_social_welfare.jpeg",
    },
  ]

  const focuses = [
    {
      icon: Sparkles,
      title: "Confidence Building",
      description: "Helping students discover their inner strength and build self-confidence",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Teaching the power of setting and achieving meaningful goals",
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Providing insights into career paths and opportunities",
    },
    {
      icon: Users,
      title: "Communication Skills",
      description: "Developing essential communication and interpersonal abilities",
    },
  ]

  const sectionImages = {
    hero: "/stock-images/socialimpact_hero_section.jpeg",
    mission: "/stock-images/socialimpact_our_commitment.jpeg",
    initiatives: "/stock-images/socialimpact_hero_section.jpeg",
    focuses: "/stock-images/socialimpact_focus_area.jpeg",
    cta: "/stock-images/socialimpact_partner_with_us.jpeg",
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
                <div className="inline-flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-accent">Community-first initiatives</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary text-balance">Social Impact</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Giving back to the community through transformative training and motivational sessions.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
                <img
                  src={sectionImages.hero}
                  alt="Students learning in a classroom"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary text-balance">Our Commitment to Society</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  We bring quality training and motivation to government schools and social welfare institutions — so
                  more people can access the tools they need to succeed.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-xl">
                <img
                  src={sectionImages.mission}
                  alt="Mentorship and guidance session"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 text-balance">Our Initiatives</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {initiatives.map((initiative) => (
                <Card key={initiative.title} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                      <initiative.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{initiative.description}</p>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {initiative.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 text-balance">What We Focus On</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our social impact programs cover essential life skills and motivation
              </p>
            </div>
            <div className="mb-10 max-w-5xl mx-auto relative overflow-hidden rounded-3xl border bg-background shadow-xl">
              <img
                src={sectionImages.focuses}
                alt="Community learning and support"
                className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focuses.map((focus) => (
                <Card key={focus.title} className="border-2 hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <focus.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{focus.title}</h3>
                    <p className="text-sm text-muted-foreground">{focus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-2">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 sm:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Partner With Us</h2>
                  <p className="text-lg text-muted-foreground mb-8 text-pretty">
                    If you represent a government school or social welfare institution, we’d love to support your
                    community with our programs.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={sectionImages.cta}
                    alt="Community collaboration"
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
