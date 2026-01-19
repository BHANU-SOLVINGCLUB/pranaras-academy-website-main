import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pranaras Academy - Build Skills. Shape Futures.",
  description:
    "Professional training academy offering soft skills, leadership development, corporate training, and life coaching for students, professionals, and corporates.",
  generator: "v0.app",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
