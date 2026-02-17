'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface MorphButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'gold'
}

const MorphButton = forwardRef<HTMLButtonElement, MorphButtonProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(' morphButton',
          variant === 'gold' && 'gold',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

MorphButton.displayName = 'MorphButton'

export default MorphButton