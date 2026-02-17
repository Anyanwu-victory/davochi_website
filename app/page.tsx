import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomePage from '@/container/homePage'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomePage/>
      {/* <Hero />
      <About/>
      <Stats/> */}
      
      {/* <Stats />
      <About />
      <Projects />
      <Services />
      <FAQ />
      <Testimonials />
      <Footer /> */}
      <Footer/>
    </main>
  )
}
