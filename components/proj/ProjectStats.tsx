"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { iconComponents } from "../icons";
import MorphButton from "../ui/morphButton";

// Counter animation hook
function useCounter(end: number, duration: number = 2) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [end, duration]);

  return rounded;
}

// Component to display animated number
function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const counter = useCounter(value);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = counter.onChange((latest) => setDisplayValue(latest));
    return unsubscribe;
  }, [counter]);

  return (
    <>
      {displayValue.toLocaleString()}
      {suffix}
    </>
  );
}

const ProjStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: 1000, suffix: "+", label: "Homes Built", icon: "homeBuilt" },
    {
      number: 1000,
      suffix: "+",
      label: "Global Clients",
      icon: "globalClients",
    },
    { number: 30, suffix: "+", label: "Awards", icon: "awards" },
    { number: 10, suffix: "+", label: "Projects", icon: "projects" },
  ];

  return (
    <>
      {/* stats */}
      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lg:px-0 lg:w-[90%] lg:max-w-6xl lg:my-5 mx-auto "
        >
          <div className="bg-white shadow-stats px-6 md:p-10 lg:p-12 xl:p-16 mb-30 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 space-y-12 justify-center ">
              {stats.map((stat, index) => (
                <motion.div key={index} className="text-center">
                  {/* Icon and numbers */}
                  <div className="flex justify-start items-center mb-3 md:mb-4 gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-gray-100">
                      {(() => {
                        const IconComponent =
                          iconComponents[
                            stat.icon as keyof typeof iconComponents
                          ];
                        return (
                          <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-gray-700" />
                        );
                      })()}
                    </div>

                    {/* Animated Number */}
                    <div className="text-3xl md:text-3xl lg:text-[34px] xl:text-5xl font-bold text-gray-900 mb-2 font-mono">
                      {isInView && (
                        <AnimatedNumber
                          value={stat.number}
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-[20px] md:text-[20px] lg:text-[30px] text-[#FFBA32] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Cards Section */}
            <div className=" pt-10 md:pt-10 lg:pt-13 ">
              <div className=" px-8 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                  {/* Download Brochures Card */}
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
                      Explore our catalog
                      <br />
                      through our collection of brochures
                    </p>

                    <MorphButton
                      label="Download Brochures"
                      href="/download_brochures"
                    />
                  </motion.div>

                  {/* Let's Talk Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="  rounded-2xl flex items-center justify-center shadow-sm">
                        {iconComponents.support({ className: "" })}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-base ">
                      Get Started with Davochi by
                      <br />
                      speaking to one of our experts
                    </p>

                    <MorphButton label="Let's Talk" href="/contact" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjStats;
