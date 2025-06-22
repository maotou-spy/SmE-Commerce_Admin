import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-[var(--destructive)]/20 dark:aria-invalid:ring-[var(--destructive)]/40 aria-invalid:border-[var(--destructive)] transition-[color,box-shadow] overflow-hidden',
    {
        variants: {
            variant: {
                default:
                    'bg-[var(--primary)] text-[var(--primary-foreground)] border-transparent hover:bg-[color-mix(in oklch, var(--primary) 90%, black)]',
                secondary:
                    'bg-[var(--secondary)] text-[var(--secondary-foreground)] border-transparent hover:bg-[color-mix(in oklch, var(--secondary) 90%, black)]',
                destructive:
                    'bg-[var(--destructive)] text-white border-transparent hover:bg-[color-mix(in oklch, var(--destructive) 90%, black)] focus-visible:ring-[var(--destructive)]/20 dark:focus-visible:ring-[var(--destructive)]/40',
                outline:
                    'text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
                muted:
                    'bg-[var(--muted)] text-[var(--muted-foreground)] border-transparent',
                cardForeground:
                    'bg-[var(--card-foreground)] text-[var(--background)] border-transparent',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

function Badge({
                   className,
                   variant,
                   asChild = false,
                   ...props
               }: React.ComponentProps<'span'> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : 'span'

    return (
        <Comp
            data-slot='badge'
            className={cn(badgeVariants({variant}), className)}
            {...props}
        />
    )
}

export {Badge, badgeVariants}
