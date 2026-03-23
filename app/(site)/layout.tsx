// app/(site)/layout.tsx — server component, no dynamic imports

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<>
  <Header/>
  {children}

  <Footer />
</>
)}
