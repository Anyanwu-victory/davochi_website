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
  serverExternalPackages: ['sanity', 'next-sanity'],

  // ── Disable experimental React Compiler that causes duplicate React ────────
  experimental: {
    reactCompiler: false,
  },

  // ── Force single React instance using __dirname (works on Vercel) ─────────
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react:     path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    }
    return config
  },
}

export default nextConfig