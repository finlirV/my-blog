/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  basePath: '/my-blog',
  assetPrefix: '/my-blog/',
  trailingSlash: true,
}

module.exports = nextConfig
