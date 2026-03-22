// components/HeroSection.tsx
'use client'

import Image from 'next/image'

type HeroSectionProps = {
  image: string
  title: string
}

export default function HeroSection({ image, title }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  )
}
