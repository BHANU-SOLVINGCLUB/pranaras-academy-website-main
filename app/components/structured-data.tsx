export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Pranaras Academy",
    alternateName: "Pranaras",
    url: "https://pranarasacademy.in",
    logo: "https://pranarasacademy.in/Pranaras logo with text light.png",
    description:
      "Pranaras Academy is Hyderabad's leading soft skills training, life coaching, motivational sessions & corporate training institute offering expert-led programs for students, professionals & corporates.",
    founder: {
      "@type": "Person",
      name: "Dr. Pranathi Shubhasri",
      jobTitle: "Head Coach & Founder",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    telephone: "+91-888-6-999-022",
    email: "sales@pranarasacademy.com",
    sameAs: [
      "https://www.instagram.com/pranarasacademy",
      "https://www.linkedin.com/company/pranarasacademy",
      "https://www.youtube.com/@pranarasacademy",
      "https://www.facebook.com/pranarasacademy",
    ],
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    knowsAbout: [
      "Soft Skills Training",
      "Life Coaching",
      "Motivational Sessions",
      "Leadership Development",
      "Corporate Training",
      "Communication Skills",
      "Personality Development",
      "Career Coaching",
      "Team Building",
      "Executive Coaching",
      "Counseling",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pranarasacademy.in/#localbusiness",
    name: "Pranaras Academy",
    image: "https://pranarasacademy.in/Pranaras logo with text light.png",
    url: "https://pranarasacademy.in",
    telephone: "+91-888-6-999-022",
    email: "sales@pranarasacademy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4486,
      longitude: 78.3908,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSearchSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pranaras Academy",
    url: "https://pranarasacademy.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://pranarasacademy.in/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function CourseListSchema() {
  const courses = [
    {
      name: "Comprehensive Soft Skills Training",
      description: "Communication, personality, confidence, emotional intelligence, leadership, teamwork, time management & more.",
      provider: "Pranaras Academy",
      duration: "P3M",
    },
    {
      name: "Personal Transformation Program",
      description: "Goal setting, mindset transformation, work-life balance, manifestation & personal branding.",
      provider: "Pranaras Academy",
      duration: "P6M",
    },
    {
      name: "Leadership Development Program",
      description: "Visionary leadership, executive presence, strategic communication & organizational impact.",
      provider: "Pranaras Academy",
      duration: "P12M",
    },
    {
      name: "Life Coaching Sessions",
      description: "Personal life coaching for confidence, clarity, goal-setting & unlocking true potential.",
      provider: "Pranaras Academy",
      duration: "P3M",
    },
    {
      name: "Motivational Sessions",
      description: "Powerful motivational sessions for students, professionals & organizations to boost morale and drive.",
      provider: "Pranaras Academy",
      duration: "P1D",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.name,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: course.provider,
          url: "https://pranarasacademy.in",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Blended",
          courseWorkload: course.duration,
          instructor: {
            "@type": "Person",
            name: "Dr. Pranathi Shubhasri",
          },
        },
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
