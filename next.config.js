/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brottsplatskartan.se',
      },
      {
        protocol: 'https',
        hostname: 'kartbilder.brottsplatskartan.se',
      },
    ],
  },
}

module.exports = nextConfig