import { ArrowUpRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink-950 text-paper hover:bg-ink-800',
  secondary: 'border border-ink-950/30 bg-transparent text-ink-950 hover:border-ink-950',
  ghost: 'bg-transparent text-ink-950 hover:bg-ink-950/5',
}

interface SharedProps {
  children: ReactNode
  variant?: Variant
  showArrow?: boolean
  className?: string
}

export function Button({ children, variant = 'primary', showArrow, className, ...props }: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn('button-base', variantClasses[variant], className)} {...props}>
      <span>{children}</span>{showArrow && <ArrowUpRight aria-hidden="true" size={17} />}
    </button>
  )
}

export function ButtonLink({ children, variant = 'primary', showArrow, className, ...props }: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn('button-base', variantClasses[variant], className)} {...props}>
      <span>{children}</span>{showArrow && <ArrowUpRight aria-hidden="true" size={17} />}
    </a>
  )
}
