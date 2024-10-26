/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [

      { hostname: "developer.mozilla.org" },
      { hostname: "cdn.worldvectorlogo.com" },
      { hostname: "ayush-jha.netlify.app" },
      { hostname: "blogger.googleusercontent.com" },

    ],
    domains: ["i.ibb.co"],

  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BLOGGER_API_KEY: process.env.NEXT_PUBLIC_BLOGGER_API_KEY,
    NEXT_PUBLIC_BLOGGER_BLOG_ID: process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID,
  },
}
module.exports = nextConfig