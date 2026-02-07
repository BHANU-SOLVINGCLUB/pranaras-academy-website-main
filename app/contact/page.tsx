"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your interest! We will get back to you soon.",
        })
        setFormData({ name: "", email: "", phone: "", organization: "", service: "", message: "" })
      } else {
        let errorMsg = data.error || "Something went wrong. Please try again later."
        if (data.details && process.env.NODE_ENV === "development") {
          errorMsg += ` (${data.details})`
        }
        setSubmitStatus({
          type: "error",
          message: errorMsg,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const heroImage = "/stock-images/contact_getintouch.jpeg"

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-primary text-balance">Get in Touch</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Ready to transform skills for yourself, your students, or your organization? Tell us what you need and
                  we&apos;ll craft the right program for you.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>✔ Custom programs for students, professionals, and corporates across India</li>
                  <li>✔ Live workshops, long-term programs, and social impact initiatives</li>
                  <li>✔ Quick response within 1–2 business days</li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
                <img
                  src={heroImage}
                  alt="Indian woman professional leading consultation, get in touch"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">sales@pranarasacademy.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 XXX XXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Corporate & Institution Enquiries</h3>
                    <p className="text-sm opacity-90">
                      For bulk training programs, campus engagements, and partnerships, please mention details like
                      location, audience size, and timelines in your message.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization (if applicable)</Label>
                          <Input
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Your company/institution"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          <option value="student">Student Training</option>
                          <option value="professional">Professional Development</option>
                          <option value="corporate">Corporate Training</option>
                          <option value="social">Social Impact Initiative</option>
                          <option value="coaching">Life Coaching</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your training needs..."
                          rows={5}
                        />
                      </div>

                      {submitStatus.type && (
                        <div
                          className={`p-4 rounded-lg ${
                            submitStatus.type === "success"
                              ? "bg-green-50 text-green-800 border border-green-200"
                              : "bg-red-50 text-red-800 border border-red-200"
                          }`}
                        >
                          <p className="text-sm font-medium">{submitStatus.message}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Submit Enquiry"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
