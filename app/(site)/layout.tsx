// app/(site)/layout.tsx
import { getSiteSettings } from '@/sanity/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings();


  console.log('Site settings:', JSON.stringify(settings, null, 2)) 
  return (
    <>
      <Header />
      {children}
      <Footer settings={settings} />
    </>
  )
}