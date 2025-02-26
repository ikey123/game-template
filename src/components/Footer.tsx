import type { ThemeConfig } from '../theme/types'

export function Footer({ themeConfig }: { themeConfig?: ThemeConfig }) {
    const siteName = themeConfig?.siteName

    return (
        <footer className="bg-theme-bg-primary/80 dark:bg-dark-secondary/80 backdrop-blur-sm border-t border-theme-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center text-sm text-theme-text-secondary">
                    © {new Date().getFullYear()} {siteName}. All rights reserved.
                </div>
            </div>
        </footer>
    )
} 