/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'd1yvfvgonqvf8f.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'api.producthunt.com',
      },
    ],
  },
}

module.exports = nextConfig

