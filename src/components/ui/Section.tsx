import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  label?: string
  index?: string
  innerClassName?: string
  labelClassName?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section({ children, label, index, className, innerClassName, labelClassName, ...props }, ref) {
  return (
    <section ref={ref} className={cn('relative border-t border-ink-950/20 px-5 sm:px-8 lg:px-12', className)} {...props}>
      <div className={cn('mx-auto max-w-page py-24 sm:py-30 lg:py-36', innerClassName)}>
        {(label || index) && (
          <div className={cn('mb-20 flex items-center justify-between font-mono text-caption uppercase text-ink-600 sm:mb-24', labelClassName)}>
            <span>{label}</span>
            <span>{index}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  )
})
