// app/(site)/layout.tsx  — wraps all site pages with Header + Footer


import dynamic from 'next/dynamic'
 
// ── Dynamic imports prevent framer-motion from running during SSG ─────────────
const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
 
export default function SiteLayout({
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