import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, BookOpen, Heart, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every training session and program we deliver",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "We empower individuals to unlock their full potential and achieve their dreams",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "We put people first, understanding that every learner has unique needs and goals",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "We believe in lifelong learning and constantly updating our methodologies",
    },
  ]

  const sectionImages = {
    hero: "/stock-images/about_hero_section.jpeg",
    mission: "/stock-images/about_mission_vision.jpeg",
    founder: "/stock-images/about_foundation_section.jpeg",
    values: "/stock-images/about_values_section.jpeg",
    cta: "/stock-images/about_join_our_community.jpeg",
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
                <h1 className="text-4xl sm:text-5xl font-bold text-primary text-balance">About Pranaras Academy</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Transforming lives through world-class training and coaching — built for Indian students,
                  professionals, and corporate teams.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">Connect With Us</Link>
                </Button>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
                <img
                  src={sectionImages.hero}
                  alt="Professional training environment"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide transformative learning experiences that empower individuals and organizations to reach
                    their highest potential through expert-led training in soft skills, leadership, and personal
                    development.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the leading training academy that shapes futures by building essential skills, fostering
                    leadership, and creating lasting positive impact across all sectors of society.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-xl">
                <img
                  src={sectionImages.mission}
                  alt="Learning and mentorship"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                    <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg ring-4 ring-background">
                      <img
                        src={sectionImages.founder}
                        alt="Founder portrait"
                        className="w-full h-full object-cover object-[70%_10%]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <CardContent className="md:col-span-3 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-primary mb-2">Pranathi</h2>
                    <p className="text-lg text-accent font-semibold mb-4">Head Coach & Founder</p>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        With years of experience in corporate training, life coaching, and leadership development,
                        Pranathi has transformed the lives of hundreds of individuals and organizations.
                      </p>
                      <p>
                        Her expertise spans across soft skills training, motivational speaking, and personal
                        transformation, making her a sought-after coach for students, professionals, and corporates
                        alike.
                      </p>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-foreground mt-6">
                        "Every individual has unlimited potential. My mission is to help you discover and unleash
                        yours."
                      </blockquote>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 text-balance">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mb-10 max-w-5xl mx-auto relative overflow-hidden rounded-3xl border bg-background shadow-xl">
              <img
                src={sectionImages.values}
                alt="Teamwork and learning"
                className="w-full h-[240px] sm:h-[320px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
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
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Join Our Community</h2>
                  <p className="text-lg text-muted-foreground mb-8 text-pretty">
                    Become part of a growing community of learners and leaders committed to continuous growth.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href="/contact">Connect With Us</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={sectionImages.cta}
                    alt="Community learning"
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
