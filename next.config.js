/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['img.youtube.com'],
  },
}

module.exports = nextConfig
