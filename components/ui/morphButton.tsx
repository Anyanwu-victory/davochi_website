'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface MorphButtonProps {
  label: string
  href: string
}

const MorphButton = ({ label, href }: MorphButtonProps) => {
  const router = useRouter()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)

    setTimeout(() => {
      router.push(href)
    }, 500)
  }

  return (
    <button
      onClick={handleClick}
      className={`relative group overflow-hidden px-8 py-3
        bg-black text-white text-sm font-medium w-60
        rounded-md border 
        shadow-[0_0_8px_rgba(198,168,90,0.5)]
        transition-all duration-300
        ${isAnimating ? 'text-black' : ''}`}
    >
      {/* White Morph Layer with Ellipse Shape */}
      <span
        className={`
          absolute  bottom-0 
          w-[40%] bg-white  left-1/2 -translate-x-1/2 
          transition-all duration-500 ease-out
          ${isAnimating 
            ? 'h-full rounded-md w-full' 
            : 'h-2 group-hover:h-[25%] group-hover:w-full '}
          }
        `}
        style={{
          borderRadius: isAnimating ? '0.375rem' : '50% 50% 0 0 / 100% 100% 0 0'
        }}
      />

      {/* Text */}
      <span className={`relative z-10 transition-colors duration-300 font-mano font-bold
        ${isAnimating ? 'text-black' : 'group-hover:text-white'}`}
      >
        {label}
      </span>
    </button>
  )
}

export default MorphButton