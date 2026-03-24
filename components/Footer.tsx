"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
interface PhoneNumber {
  number: string;
  dialCode: string;
}

interface SiteSettings {
  phoneNumbers: PhoneNumber[];
  email: string;
  address: string;
}

interface FooterProps {
  settings: SiteSettings;
}

const Footer = ({ settings }: FooterProps) => {
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
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    // try/catch block to handle error ad status timeout
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", email: "" });
      setTimeout(() => setStatus("idle"), 4000); // ← resets after 4 seconds
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      setTimeout(() => {
        // ← clears error after 4 seconds
        setStatus("idle");
        setError("");
      }, 4000);
    }
  };

  return (
    <footer ref={ref} className="bg-black text-white pt-20 pb-10">
      <div className="mx-auto px-6 sm:px-8 md:px-16 lg:px-12 xl:px-24 py-5">
        <div className="gap-16 flex flex-col lg:flex-row justify-between">
          {/* LEFT — form */}
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
              {error && <p className="text-red-400 text-xs">{error}</p>}
              {status === "success" && (
                <p className="text-green-400 text-xs">
                  ✓ You're on the list! You will be sent occassional
                  newsletters.
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

          {/* CENTER — contact info from Sanity */}
          <div className="text-sm space-y-6">
            {/* Phone numbers */}
            {settings.phoneNumbers?.length > 0 && (
              <div className="mb-10">
                <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                  Call Us
                </h4>
                {settings.phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.dialCode}`}
                    className="block text-[#F0F4F8] mb-1 text-[16px] hover:text-[#FBBD00] transition-colors"
                  >
                    {phone.number}
                  </a>
                ))}
              </div>
            )}

            {/* Email */}
            {settings.email && (
              <div className="mb-10">
                <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                  Write Us
                </h4>
                <a
                  href={`mailto:${settings.email}`}
                  className="text-[#F0F4F8] text-[16px] hover:text-[#FBBD00] transition-colors break-all"
                >
                  {settings.email}
                </a>
              </div>
            )}

            {/* Address */}
            {settings.address && (
              <div>
                <h4 className="font-bold mb-2 text-[#F0F4F8] font-mono text-[20px]">
                  Visit Us
                </h4>
                <p className="text-[#F0F4F8] leading-relaxed text-[16px]">
                  {settings.address}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT — links */}
          <div>
            <h4 className="font-bold mb-8 text-[#F0F4F8] font-mono text-[20px]">
              Quick Links
            </h4>
            <div className="flex gap-22 text-[16px] text-[#F0F4F8]">
              <div className="flex flex-col gap-8">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className="flex flex-col gap-8">
                <Link href="/projects">Projects</Link>
                <Link href="#" className="whitespace-nowrap">
                  Terms of Service
                </Link>
                <Link href="#" className="whitespace-nowrap">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 text-xs text-[#F0F4F8]">
          ©2025 Davochihomes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
