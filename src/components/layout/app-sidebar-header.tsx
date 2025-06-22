import { loadFileFromAssets } from '@/utils'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/components/ui/sidebar'

export function AppSidebarHeader({
    sidebarHeader,
}: {
    sidebarHeader: {
        title: string
        logo: {
            light: string
            dark: string
        }
    }
}) {
    const { state } = useSidebar()
    const isExpanded = state === 'expanded'

    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center py-4 transition-all duration-200 ease-in-out',
                isExpanded ? 'space-y-1' : 'space-y-0'
            )}
        >
            {/* Logo */}
            {sidebarHeader.logo && (
                <div
                    className={cn(
                        'relative flex items-center justify-center',
                        isExpanded ? 'h-20 w-20' : 'h-6 w-6'
                    )}
                >
                    {/* Light mode logo */}
                    <img
                        src={loadFileFromAssets(sidebarHeader.logo.light)}
                        alt='Logo light'
                        className={cn(
                            'primary block object-contain dark:hidden',
                            isExpanded ? 'h-24 w-24' : 'h-7 w-7'
                        )}
                    />

                    {/* Dark mode logo */}
                    <img
                        src={loadFileFromAssets(sidebarHeader.logo.dark)}
                        alt='Logo dark'
                        className={cn(
                            'primary hidden object-contain dark:block',
                            isExpanded ? 'h-24 w-24' : 'h-7 w-7'
                        )}
                    />
                </div>
            )}

            {/* Title */}
            {isExpanded && (
                <div className='secondary-foreground text-center text-sm font-semibold transition-opacity duration-200 ease-in-out'>
                    {sidebarHeader.title}
                </div>
            )}
        </div>
    )
}
