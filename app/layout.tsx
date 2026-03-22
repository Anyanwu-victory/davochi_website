import type { Metadata } from "next";
import { Cousine, Anton, Nunito, Manrope, Inter, Abel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500", "700", "800"],
  variable: "--font-inter",
})

const abel = Abel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abel",
})


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300","400","500", "700", "800"],
  variable: "--font-manrope",
})
const nunito = Nunito({
  subsets: ["latin"],
 weight: ["300","400","500", "700"],
  variable: "--font-nunito",
})

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cousine",
})

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://davochi.ng/'),
  title: {
    default: 'Davochi Multihomes and Interiors — Premium Real Estate in Abuja',
    template: '%s | Davochi Multihomes',  // ← page titles become "About | Davochi Multihomes"
  },
  description: 'Davochi Multihomes and Interiors is a family-owned real estate company in Abuja, Nigeria. Premium residential and commercial properties.',
  keywords: ['real estate Abuja', 'buy house Nigeria', 'luxury homes Abuja', 'property investment Nigeria','real estate'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://davochi.ng/',
    siteName: 'Davochi Multihomes',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davochi Multihomes — Premium Real Estate in Abuja',
    description: 'Premium residential and commercial properties in Abuja, Nigeria.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${abel.variable} ${cousine.variable} ${anton.variable} ${nunito.variable} ${manrope.variable} ${inter.variable} antialiased`}
      >
      
        {/* {children} */}
        <div>Test</div>
      
      </body>
    </html>
   );
}
