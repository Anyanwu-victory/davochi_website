'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { projects } from '@/lib/proj';

const HouseTypesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-6 sm:px-24 lg:px-30 xl:px-48 py-5">
        
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-2xl font-mono font-normal text-gray-900">
            House Types
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((house) => (
                <CarouselItem
                  key={house.id}
                  className="pl-4 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
                >
                  <HouseCard {...house} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-20
                w-10 h-10 md:w-12 md:h-12 rounded-full bg-white opacity-[30px] shadow-lg border border-black
                flex items-center justify-center
                hover:bg-gray-50 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed z-10"
              disabled={!api?.canScrollPrev()}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-20
                w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg opacity-[30px] border border-black
                flex items-center justify-center
                hover:bg-gray-50 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed z-10"
              disabled={!api?.canScrollNext()}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-8 bg-[#FFBA32]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// House Card Component
const HouseCard = ({
  title,
  subtitle,
  category,
  mainImage,
  slug,
}: {
  title: string
  subtitle: string
  category: string
  mainImage: string
  slug: string
}) => {
  return (
    
      <div className="group relative h-120 md:h-125 rounded-[10px] overflow-hidden cursor-pointer">
        {/* Image */}
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {/* Title */}
          <h3 className="text-2xl md:text-[38px] font-mono font-normal mb-2 group-hover:-translate-y-1 transition-transform duration-300">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm md:text-[16px] leading-4 font-inter font-semibold text-white/80 mb-4">
            {subtitle}
          </p>

          {/* View Project Link */}
            <Link href={`/projects/${slug}`}>
          <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-[16px]
            transition-all duration-300 font-inter">
             
             View Project
            <ArrowRight className="w-4 h-4 group-hover:text-[#FBBD00]" />
            
          </div>
          </Link>
        </div>
      </div>
  
  )
}

export default HouseTypesCarousel;