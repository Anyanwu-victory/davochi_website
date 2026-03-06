"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

// ── Replace with your WhatsApp number (country code + number, no + or spaces) ─
const WHATSAPP_NUMBER =process.env.NEXT_WHATSAPP_NUMBER;

const Hero = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    name:    "",
    email:   "",
    phone:   "",
    message: "",
  });

  const [errors, setErrors]     = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error as user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  };

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim())    e.name    = "Name is required"
    if (!formData.email.trim())   e.email   = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email"
    if (!formData.phone.trim())   e.phone   = "Phone is required"
    if (!formData.message.trim()) e.message = "Message is required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // ── Submit → open WhatsApp ──────────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const text = [
      `*New Tour Booking from Davochi Website*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      ``,
      `*Message:*`,
      formData.message,
    ].join("\n")

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="hero" className="">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden mb-10">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/image/contact-hero-image.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48 py-5">
        <motion.div className="mt-5 flex flex-col lg:flex-row gap-5 justify-between">
          <div>
            <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
              Booking Tours
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal capitalize leading-tight mb-6 lg:mb-10">
              See it with your eyes.
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between md:flex-row gap-10 lg:gap-35">
          <div className="w-full md:w-1/2">
            <p className="font-inter text-[16px] text-[#585858] whitespace-pre-line leading-7">
              Visit a Davochi home and experience opulence merged with modern
              technology first-hand. Fill in the form below and one of our team
              members will be in touch.
            </p>

            {/* Address */}
            <div className="mt-5 bg-black/10 text-[16px] text-black rounded-[5px] px-4 py-3 w-full mb-3">
              Davochi Multihomes and Interior, Dape
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 max-w-md md:max-w-full lg:max-w-full" noValidate>

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className={`w-full bg-black/10 px-4 py-3 text-sm rounded text-[#757575] outline-none transition focus:ring-1 focus:ring-[#FBBD00] ${
                    errors.name ? "ring-1 ring-red-400" : ""
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className={`w-full bg-black/10 px-4 py-3 text-sm rounded text-[#757575] outline-none transition focus:ring-1 focus:ring-[#FBBD00] ${
                    errors.email ? "ring-1 ring-red-400" : ""
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone"
                  onChange={handleChange}
                  className={`w-full bg-black/10 px-4 py-3 text-sm rounded text-[#757575] outline-none transition focus:ring-1 focus:ring-[#FBBD00] ${
                    errors.phone ? "ring-1 ring-red-400" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Type a message..."
                  rows={3}
                  onChange={handleChange}
                  className={`w-full bg-black/10 px-4 py-3 text-sm rounded resize-none text-[#757575] outline-none transition focus:ring-1 focus:ring-[#FBBD00] ${
                    errors.message ? "ring-1 ring-red-400" : ""
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit + success */}
              <div className="flex items-center gap-4 flex-wrap">
                <Button
                  type="submit"
                  className="bg-black text-white text-sm px-6 py-1 mt-4 hover:bg-white hover:text-black hover:border hover:border-black"
                >
                  Submit
                </Button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-green-600 font-medium mt-4"
                  >
                    ✓ WhatsApp opened! Your message is ready to send.
                  </motion.p>
                )}
              </div>

            </form>
          </div>

          {/* Image */}
          <div className="md:mt-10 xl:mt-3 w-full md:w-1/2 h-90 md:h-80 lg:h-80">
            <div className="relative">
              <div className="absolute left-0 bottom-0 w-1 md:w-1.5 bg-[#FBBD00] z-10 h-1/2" />
              <div className="relative overflow-hidden">
                <Image
                  src="/image/contact-image.jpg"
                  alt="Contact Hero Image"
                  width={500}
                  height={300}
                  className="w-full object-cover"
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