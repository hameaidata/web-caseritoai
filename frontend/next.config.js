/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Output static HTML para GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
