import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
// import SignatureSection from '@/components/animations/DavochiSignature'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About/>
      <Stats/>
      
      {/* <Stats />
      <About />
      <Projects />
      <Services />
      <FAQ />
      <Testimonials />
      <Footer /> */}
    </main>
  )
}
