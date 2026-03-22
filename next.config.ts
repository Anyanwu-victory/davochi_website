import type { NextConfig } from 'next'
import path from "path"


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
    serverExternalPackages: ['sanity', 'next-sanity'],
     // ── Force all packages to use the same single React instance ─────────────
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    }
    return config
  },
}

export default nextConfig;