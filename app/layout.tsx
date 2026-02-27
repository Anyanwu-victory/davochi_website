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

export const metadata: Metadata = {
  title: "Davochi Multihomes - Real Estate company",
  description: "Davochi Mutihomes and Interiors is a family-owned real estate and development company ",
};

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
      
        {children}
      
      </body>
    </html>
   );
}
