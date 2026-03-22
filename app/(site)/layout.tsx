// app/(site)/layout.tsx — server component, no dynamic imports
import ClientLayout from '@/components/clientLayout'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}