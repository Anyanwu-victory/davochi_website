// components/ProjectInfo.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "./FeatureIcon";
import type { ProjectStat } from "@/lib/proj";
import MorphButton from "../ui/morphButton";
import { iconComponents } from "../icons";
import { motion, useInView } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type ProjectInfoProps = {
  category: string;
  fullTitle: string;
  description: string;
  stats: ProjectStat[];
  mainImage: string;
};

export default function ProjectInfo({
  category,
  fullTitle,
  description,
  stats,
  mainImage,
}: ProjectInfoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="max-w-6xl mx-auto px-4  xl:px-2 py-12">
      {/* Title */}
      <div>
        {/* Breadcrumbs home/project/davochi-mall Tag */}
        <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
          {category}
        </p>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal
           capitalize leading-tight mb-3"
        >
          {fullTitle}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-2">
        {/* ── Left Column ──────────────────────────────────────────────── */}
        <div className="flex-1">
          {/* Description */}
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8 font-inter">
            {description}
          </p>

          {/* CTA Cards Section */}
          <div className=" pt-6 ">
            <div className="">
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto justify-center md:justify-between">
                {/* Download Brochures Card */}
                <motion.div className="text-center md:text-start">
                  <div className="flex justify-center md:justify-start mb-6">
                    <div className="rounded-2xl flex items-start justify-center shadow-sm">
                      {iconComponents.brochures({ className: "" })}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-10 text-base">
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
                <motion.div className="text-center md:text-start">
                  <div className="flex justify-center md:justify-start mb-6">
                    <div className="  rounded-2xl flex items-start justify-center shadow-sm">
                      {iconComponents.support({ className: "" })}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-10 text-base ">
                    Get Started with Davochi by
                    <br />
                    speaking to one of our experts
                  </p>

                  <MorphButton label="Let's Talk" href="/contact" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 ">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col justify-start w-50 items-start ">
                <div className="flex justify-start gap-2 items-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center ">
                    <FeatureIcon type={stat.icon} />
                  </div>

                  <span className="text-3xl md:text-3xl lg:text-[34px] font-bold text-gray-900 mb-2 font-mono">
                    {stat.value}
                  </span>
                </div>

                <span className="text-[17.81px]  text-[#FFBA32] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column — Main Render ──────────────────────────────── */}
        <div className="lg:w-[43%] xl:w-[45%] shrink-0 pt-10 ">
          <div className="relative">
            {/* Yellow Border */}
            <div className="absolute left-0  bottom-0 w-1 md:w-1.5 bg-[#FBBD00] z-10 h-1/2" />

            <div className="relative w-full h-105 md:h-137.5 ">
              <Image
                src={mainImage}
                alt={`${fullTitle} render`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
