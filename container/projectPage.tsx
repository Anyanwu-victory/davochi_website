'use client'

import React from 'react'
import Hero from '@/components/project/Hero';
import HouseTypesCarousel from '@/components/project/HouseTypeCarousel';
import { getAllProjects } from '@/sanity/lib/data'

export default async function projectPage() {
  const projects = await getAllProjects();
  return (
    <div className="min-h-screen">
        <Hero/>

        <div>
          <HouseTypesCarousel projects={projects}/>
        </div>
    </div>
  )
}
