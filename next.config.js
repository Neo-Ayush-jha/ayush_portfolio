/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        
        {hostname :"developer.mozilla.org"},
        {hostname :"cdn.worldvectorlogo.com"},

      ],
      domains:["i.ibb.co"],
      
    },
    reactStrictMode: true,
  }
module.exports = nextConfig
