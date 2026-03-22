'use client'


import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Image from "next/image";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import MiddleImageSection from "@/components/home/MiddleImageSection";


import { getStats, getServices, getFaqs, getTestimonials } from "@/sanity/lib/data";


export default async function HomePage() {
  

  const stats = await getStats();
  const services = await getServices();
  const faqs = await getFaqs();
  const testimonials = await getTestimonials();

  return (
    <div>
      <Hero /> 
      <About />
      <div className="h-full lg:mb-100">
        <Stats stats={stats} />
      </div>
      {/* Image */}
      {/* Image Section */}
     <div>
      <MiddleImageSection/>
     </div>

      <div className="h-full mt-30">
        <Projects />
      </div>

      <div className="mt-10">
        <Services services={services}/>
      </div>

      <div className="mt-10">
        <FAQ faqs={faqs} />
      </div>

      <div className="mt-20">
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  );
};
