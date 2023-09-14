/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'export',
}
nextConfig =
  process.env.CF_PAGES_BRANCH === 'main'
    ? {
        ...nextConfig,
        env: { isProduct: true },
        images: {
          loader: 'imgix',
          path: 'https://uchikoshi-fes-2023.imgix.net/',
          domains: ['img.youtube.com'],
        },
      }
    : {
        ...nextConfig,
        env: { isProduct: false },
        images: {
          unoptimized: true,
          domains: ['img.youtube.com'],
        },
      }

nextConfig = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})(nextConfig)

console.log(nextConfig)
module.exports = () => nextConfig
