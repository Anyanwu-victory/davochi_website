"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // phone and message are optional — the API handles missing fields
        body: JSON.stringify({ name: formData.name, email: formData.email }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <footer ref={ref} className="bg-black text-white pt-20 pb-10">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 py-5">
        {/* Main Grid */}
        <div className="gap-16 flex flex-col lg:flex-row justify-between">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[50px] font-extrabold mb-4 font-mono">
              Get In Touch
            </h2>

            <p className="text-[#F0F4F8] font-mono text-[16px] mb-6 leading-relaxed max-w-md">
              Ready to step into the world of Davochi excellence? Reach out now
              to start your extraordinary real estate experience.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-3 max-w-md md:max-w-full lg:max-w-125"
              noValidate
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] px-4 py-3 text-sm rounded text-white placeholder:text-[#aaa] outline-none focus:ring-1 focus:ring-[#FBBD00]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] px-4 py-3 text-sm rounded text-white placeholder:text-[#aaa] outline-none focus:ring-1 focus:ring-[#FBBD00]"
              />

              {/* Error message */}
              {error && <p className="text-red-400 text-xs">{error}</p>}

              {/* Success message */}
              {status === "success" && (
                <p className="text-green-400 text-xs">
                  ✓ You're on the list! We'll be in touch soon.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-white text-black text-sm px-6 py-1 mt-4 disabled:opacity-60"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </motion.div>

          {/* CENTER COLUMN */}
          <div className="text-sm space-y-6">
            <div className="mb-10">
              <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                Call Us
              </h4>

              <a
                href="tel:+2348052571134"
                className="block text-[#F0F4F8] mb-1 text-[16px] hover:text-[#FBBD00] transition-colors"
              >
                +234 805 257 1134
              </a>
              <a
                href="tel:+2347014555869"
                className="block text-[#F0F4F8] text-[16px] hover:text-[#FBBD00] transition-colors"
              >
                +234 701 455 5869
              </a>
            </div>

            <div className="mb-10">
              <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                Write Us
              </h4>
              <a
                href="mailto:devachihomes@gmail.com"
                className="text-[#F0F4F8] text-[16px] hover:text-[#FBBD00] transition-colors"
              >
                devachihomes@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                Visit Us
              </h4>
              <p className="text-[#F0F4F8] leading-relaxed text-[16px]">
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
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                {/* <Link href="#">Careers</Link> */}
                {/* <Link href="/projects" className="whitespace-nowrap">Our Homes</Link> */}
                <Link href="/contact">Contact</Link>
              </div>
              <div className="flex flex-col gap-8">
                {/* <Link href="#" className="whitespace-nowrap">Agent Registration</Link> */}
                <Link href="/projects">Projects</Link>
                <Link href="#" aria-disabled className="whitespace-nowrap">
                  Terms of Service
                </Link>
                <Link href="#" aria-disabled className="whitespace-nowrap">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 pt-6 text-xs text-[#F0F4F8]">
          ©2025 Davochihomes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
