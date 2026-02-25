// components/ProjectSights.tsx

'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ProjectSight } from '@/lib/proj'

type ProjectSightsProps = {
  sights: ProjectSight[]
  projectTitle: string
}

type FilterType = 'all' | 'exterior' | 'interior'

export default function ProjectSights({ sights, projectTitle }: ProjectSightsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredSights =
    activeFilter === 'all'
      ? sights
      : sights.filter((s) => s.category === activeFilter)

  return (
    <section className="max-w-6xl mx-auto px-4 xl:px-2 pb-16">

      {/* Header + Filter */}
      <div className="flex flex-col gap-4 mb-6">
        <div>
          <p className="text-[20px] font-semibold text-[#FBBD00] tracking-widest font-inter">
            Gallery
          </p>
          <h2 className="text-[30px] lg:text-[47px] font-inter font-bold text-black ">Sights from the Project</h2>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 bg-black p-1 rounded-full w-fit items-center mx-auto">
          {(['all', 'exterior', 'interior'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-[#FBBD00] text-black shadow-sm'
                  : 'text-white hover:text-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredSights.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {filteredSights.map((sight, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2 h-70' : 'h-32.5'
              }`}
            >
              <Image
                src={sight.image}
                alt={`${projectTitle} sight ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400 text-sm">
          No {activeFilter} images available.
        </div>
      )}

      <div></div>
    </section>
  )
}
