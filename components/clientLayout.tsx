// components/ClientLayout.tsx
'use client'

import dynamic from 'next/dynamic'

// ── ssr: false is allowed here because this is a client component ─────────────
const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}