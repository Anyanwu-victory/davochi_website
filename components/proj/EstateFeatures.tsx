// components/EstateFeatures.tsx

'use client'

import { useCallback, useEffect, useState } from 'react'
import FeatureIcon from './FeatureIcon'
import type { EstateFeature } from '@/lib/proj'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type EstateFeaturesProps = {
  features: EstateFeature[]
}

export default function EstateFeatures({ features }: EstateFeaturesProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [current, setCurrent] = useState(0)
  const [total, setTotal] = useState(0)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!api) return
    setTotal(api.scrollSnapList().length)
    onSelect(api)
    api.on('select', () => onSelect(api))
    api.on('reInit', () => onSelect(api))
    return () => {
      api.off('select', () => onSelect(api))
      api.off('reInit', () => onSelect(api))
    }
  }, [api, onSelect])

  return (
    <section className="max-w-6xl mx-auto px-4  xl:px-2 pb-12">
      <h2 className="font-bold text-black mb-6 text-[20px] font-inter">
        Estate Features
      </h2>

      <div className="flex items-center gap-3">

        {/* Left Arrow */}
        <button
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Previous"
          className={`hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all ${
            !canScrollPrev ? 'invisible pointer-events-none' : ''
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: false }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {features.map((feature, i) => (
              <CarouselItem
                key={i}
                className="pl-2 basis-1/3 sm:basis-1/5 lg:basis-1/6"
                
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600">
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <span className="text-[10px] sm:text-xs lg:text-sm text-black leading-tight font-semibold font-inter">
                    {feature.label}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Right Arrow */}
        <button
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Next"
          className={`hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all ${
            !canScrollNext ? 'invisible pointer-events-none' : ''
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

      {/* Pagination Dots */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                current === i
                  ? 'w-2 h-2 bg-[#FBBD00]'
                  : 'w-2 h-2 bg-gray-200 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}