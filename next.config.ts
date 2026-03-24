// next.config.ts
import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
   
  // serverExternalPackages: ['sanity', 'next-sanity', '@sanity/client', '@sanity/vision'],
  // turbopack: {},
  // experimental: {
  //   reactCompiler: true
  // },
  transpilePackages: ['sanity', '@sanity/ui'],
}

export default nextConfig