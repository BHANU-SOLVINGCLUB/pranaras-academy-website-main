import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebsiteSearchSchema,
  CourseListSchema,
} from "@/app/components/structured-data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://pranarasacademy.in"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pranaras Academy - Soft Skills Training & Life Coaching in Hyderabad",
    template: "%s | Pranaras Academy",
  },
  description:
    "Pranaras Academy is Hyderabad's leading soft skills training, life coaching, motivational sessions & corporate training institute. Expert-led programs for students, professionals & corporates. Build confidence, communication & leadership skills.",
  keywords: [
    "soft skills training Hyderabad",
    "life coaching Hyderabad",
    "motivational sessions Hyderabad",
    "corporate training Hyderabad",
    "leadership development Hyderabad",
    "personality development Hyderabad",
    "communication skills training",
    "confidence building",
    "career coaching Hyderabad",
    "team building Hyderabad",
    "soft skills training institute",
    "motivational speaker Hyderabad",
    "life coach Hyderabad",
    "corporate soft skills training",
    "executive coaching Hyderabad",
    "placement training Hyderabad",
    "interview skills training",
    "personality enhancement",
    "Pranaras Academy",
    "Pranaras",
    "Dr Pranathi Shubhasri",
    "counseling sessions Hyderabad",
    "manifestation mindset coaching",
    "managerial skills training",
    "hire train deploy Hyderabad",
  ],
  authors: [{ name: "Pranaras Academy" }],
  creator: "Pranaras Academy",
  publisher: "Pranaras Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Pranaras Academy",
    title: "Pranaras Academy - Soft Skills Training & Life Coaching in Hyderabad",
    description:
      "Hyderabad's leading soft skills training, life coaching & corporate training institute. Expert-led programs for students, professionals & corporates.",
    images: [
      {
        url: "/Pranaras logo with text light.png",
        width: 1200,
        height: 630,
        alt: "Pranaras Academy - Build Skills. Shape Futures.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranaras Academy - Soft Skills Training & Life Coaching in Hyderabad",
    description:
      "Hyderabad's leading soft skills training, life coaching & corporate training institute. Expert-led programs for students, professionals & corporates.",
    images: ["/Pranaras logo with text light.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      {
        url: "/Pranaras Chrome tab transparent.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/Pranaras Chrome tab transparent.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/Pranaras Chrome tab transparent.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/Pranaras Chrome tab transparent.png",
    apple: [
      {
        url: "/Pranaras Chrome tab transparent.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  verification: {
    // Add your Google Search Console verification code here after setting it up
    // google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSearchSchema />
        <CourseListSchema />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
