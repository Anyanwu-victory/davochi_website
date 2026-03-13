// components/about/Hero.tsx
"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { iconComponents } from "../icons";
import MorphButton from "../ui/morphButton";

interface CompanyStats {
  _id:    string
  label:  string
  number: number
  suffix: string
  icon:   string
}

interface HeroProps {
  stats:   CompanyStats[]
  mission: string
  vision:  string
}

function useCounter(end: number, duration: number = 2) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, end, { duration, ease: "easeOut" });
    return controls.stop;
  }, [end, duration]);
  return rounded;
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const counter = useCounter(value);
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const unsubscribe = counter.on("change", (latest) => setDisplayValue(latest));
    return unsubscribe;
  }, [counter]);
  return <>{displayValue.toLocaleString()}{suffix}</>
}

const Hero = ({ stats, mission, vision }: HeroProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="home" className="">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden mb-10">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/image/about-hero-image.png')" }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48 py-5">
        <motion.div className="mt-5">
          <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
            About us
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal capitalize leading-tight mb-6 lg:mb-10">
            The Davochi Difference
          </h2>
        </motion.div>

        <div className="lg:w-[90%]">
          <p className="font-inter text-[16px] text-[#585858] leading-6 mb-7">
            Incorporated on 7th July 2013. Headquartered in Abuja, Nigeria, the
            company has built a reputation for integrity, delivery excellence,
            and value-driven property solutions across residential and mixed-use
            developments.
          </p>
          <p className="font-inter text-[16px] text-[#585858] leading-6">
            Davochi Multi Homes is led by a seasoned and purpose-driven
            management team with hands on industry experience. The leadership
            philosophy of Davochi Multi Homes is anchored on accountability,
            transparency, and long-term value creation.
          </p>

          {/* Mission — from Sanity */}
          <div className="mt-7 leading-8">
            <h2 className="font-inter text-xl font-bold">Our mission</h2>
            <p className="font-inter text-[16px] text-[#585858] leading-6">
              {mission}
            </p>
          </div>

          {/* Vision — from Sanity */}
          <div className="mt-7">
            <h2 className="font-inter text-xl font-bold">Our vision</h2>
            <p className="font-inter text-[16px] text-[#585858] leading-6">
              {vision}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lg:px-0 lg:w-[90%] lg:max-w-6xl lg:my-5 mx-auto"
        >
          <div className="bg-white shadow-stats px-6 md:p-10 lg:p-12 xl:p-16 mb-30 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 space-y-12 justify-center">
              {stats.map((stat, index) => (
                <motion.div key={stat._id ?? index} className="text-center">
                  <div className="flex justify-center items-center mb-3 md:mb-4 gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-gray-100">
                      {(() => {
                        const IconComponent = iconComponents[stat.icon as keyof typeof iconComponents];
                        return <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-gray-700" />;
                      })()}
                    </div>
                    <div className="text-3xl md:text-3xl lg:text-[34px] xl:text-5xl font-bold text-gray-900 mb-2 font-mono">
                      {isInView && <AnimatedNumber value={stat.number} suffix={stat.suffix} />}
                    </div>
                  </div>
                  <div className="text-[20px] md:text-[20px] lg:text-[30px] text-[#FFBA32] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-10 md:pt-10 lg:pt-13">
              <div className="px-4 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="rounded-2xl flex items-center justify-center shadow-sm">
                        {iconComponents.brochures({ className: "" })}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-base">
                      Explore our catalog<br />through our collection of brochures
                    </p>
                    <MorphButton label="Download Brochures" href="/download_brochures" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="rounded-2xl flex items-center justify-center shadow-sm">
                        {iconComponents.support({ className: "" })}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-base">
                      Get Started with Davochi by<br />speaking to one of our experts
                    </p>
                    <MorphButton label="Let's Talk" href="/contact" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;