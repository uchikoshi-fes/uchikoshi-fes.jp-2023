/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'export',
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
    // If you use `MDXProvider`, uncomment the following line.
    //providerImportSource: '@mdx-js/react',
  },
})(nextConfig)

console.log(nextConfig)
module.exports = () => nextConfig
