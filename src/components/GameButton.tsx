import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function GameButton({ children, className, ...props }: GameButtonProps) {
  return (
    <button
      className={cn(
        'relative overflow-hidden border border-white py-2 px-4 transition-all duration-200',
        'font-bold uppercase text-sm tracking-widest text-white flex items-center justify-center gap-2',
        'hover:bg-white/10 active:bg-white/20 group',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  )
}
