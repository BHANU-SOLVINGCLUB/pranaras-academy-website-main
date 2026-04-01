/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect www to non-www for SEO consistency
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pranarasacademy.in" }],
        destination: "https://pranarasacademy.in/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
