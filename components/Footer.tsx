"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Button from './Button'

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <footer ref={ref} className="bg-black text-white pt-20 pb-10">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 py-5 ">
        {/* Main Grid */}
        <div className="gap-16 flex flex-col lg:flex-row justify-between ">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[50px] font-extrabold mb-4 font-mono">
              Get In Touch
            </h2>

            <p className="text-[#F0F4F8] font-mano text-[16px] mb-6 leading-relaxed max-w-md">
              Ready to step into the world of Devachi excellence? Reach out now
              to start your extraordinary real estate experience.
            </p>

            {/* Form */}
            <form className="space-y-3 max-w-md md:max-w-full lg:max-w-125">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] px-4 py-3 text-sm rounded text-[#757575]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] px-4 py-3 text-sm rounded text-[#757575]"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] px-4 py-3 text-sm rounded text-[#757575]"
              />

              <textarea
                name="message"
                placeholder="Type a message..."
                rows={3}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] px-4 py-3 text-sm rounded resize-none text-[#757575] active:text-white"
              />

              <Button
                type="submit"
                className="bg-white text-black text-sm px-6 py-1 mt-4 "
              >
                Submit
              </Button>
            </form>
          </motion.div>

          {/* CENTER COLUMN */}
          <div className="text-sm space-y-6">
            <div className="mb-10">
              <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                Call Us
              </h4>
              <p className="text-[#F0F4F8] mb-1 text-[16px]">
                +234 805 257 1134
              </p>
              <p className="text-[#F0F4F8] text-[16px]">+234 701 455 5869</p>
            </div>

            <div className="mb-10">
              <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                Write Us
              </h4>
              <p className="text-[#F0F4F8] text-[16px]">
                devachihomes@gmail.com
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                Visit Us
              </h4>
              <p className="text-[#F0F4F8] leading-relaxed text-[16px] ">
                Suite B3, Upper Grace Plaza, Plot 217, Shettima Mungono Street,
                Utako-Abuja.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h4 className="font-bold mb-8 text-[#F0F4F8] font-mono text-[20px]">
              Quick Links
            </h4>

            <div className="flex gap-22 text-[16px] text-[#F0F4F8]">
              <div className="flex flex-col gap-8">
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#" className="whitespace-nowrap">Our Homes</a>
                <a href="#">Contact</a>
              </div>

              <div className="flex flex-col gap-8">
                <a href="#" className="whitespace-nowrap">Agent Registration</a>
                <a href="#">Projects</a>
                <a href="#" className="whitespace-nowrap">Term of service</a>
                <a href="#">Blog</a>
                <a href="#" className="whitespace-nowrap" >Privacy policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className=" mt-20 pt-6 text-xs text-[#F0F4F8]">
          ©2025 Davochihomes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
