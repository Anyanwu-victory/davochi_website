"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  const ref = useRef(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="hero" className="">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden   mb-10">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/image/contact-hero-image.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48  py-5">
        <motion.div className="mt-5 flex flex-col lg:flex-row gap-5 justify-between">
          {/* Label */}
          <div>
            <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
              Booking Tours
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal capitalize leading-tight mb-6 lg:mb-10">
              See it with your eyes.
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between md:flex-row gap-10 lg:gap-35">
          <div className="w-full md:w-1/2">
            <p className="font-inter text-[16px] text-[#585858] whitespace-pre-line  leading-7">
              Visit a Davochi home and experience opulence merged with modern
              technology first-hand. Fill in the form below and one of our team
              members will be in touch.
            </p>

            {/* Address */}
            <div className="mt-5 bg-black/10 text-[16px] text-black rounded-[5px] px-4 py-3 w-full mb-3">
              Davochi Multihomes and Interior, Dape
            </div>
            {/* Form */}
            <form className="space-y-3 max-w-md md:max-w-full lg:max-w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="w-full bg-black/10 px-4 py-3 text-sm rounded text-[#757575] autofill:bg-transparent"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-black/10 px-4 py-3 text-sm rounded text-[#757575]"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="w-full bg-black/10 px-4 py-3 text-sm rounded text-[#757575]"
              />

              <textarea
                name="message"
                placeholder="Type a message..."
                rows={3}
                onChange={handleChange}
                className="w-full bg-black/10 px-4 py-3 text-sm rounded resize-none text-[#757575] active:text-white"
              />

              <Button
                type="submit"
                className="bg-black text-white text-sm px-6 py-1 mt-4 hover:bg-white hover:text-black"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="md:mt-10 xl:mt-3 w-full md:w-1/2 h-90 md:h-80 lg:h-80">
            <div className="relative">
              {/* Yellow Border */}
              <div className="absolute left-0  bottom-0 w-1 md:w-1.5 bg-[#FBBD00] z-10 h-1/2" />


              <div className="relative overflow-hidden">
                <Image
                  src="/image/contact-image.jpg"
                  alt="Contact Hero Image"
                  width={500}
                  height={300}
                  className="w-full  object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
