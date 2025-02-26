import * as React from 'react'
import { useRouter } from "nextra/hooks"
import Head from 'next/head'
import type { MainProps } from '@/theme/types'
import { layouts } from '@/theme/layouts'
import 'nextra-theme-docs/style.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SUPPORTED_LOCALES, SITE_CONFIG, LOCALE_CODES, DEFAULT_LOCALE } from '@/config/site'

export default function Layout({ children, pageOpts, themeConfig }: MainProps) {
    const router = useRouter()
    const { frontMatter, pageMap } = pageOpts
    const { locale = DEFAULT_LOCALE, asPath } = router
    
    // 获取当前语言的 meta 数据
    const meta = React.useMemo(() => {
        // 从 pageMap 中获取第一个元素的 data
        if (pageMap && pageMap[0] && pageMap[0].data) {
            console.log('Found meta data in pageMap[0]:', pageMap[0].data)
            return pageMap[0].data
        }
        
        // 如果没有找到，尝试直接导入对应的 meta 文件
        try {
            const metaModule = require(`../../pages/${locale}/_meta.js`)
            console.log('Imported meta module:', metaModule)
            return metaModule.default
        } catch (error) {
            console.error('Error loading meta file:', error)
            return {}
        }
    }, [pageMap, locale])

    // URL 清理和规范化
    const cleanPath = React.useMemo(() => {
        let path = asPath.replace(/\.(mdx|md)$/i, "")
        const [pathWithoutQuery] = path.split("?")
        const [cleanPath] = pathWithoutQuery.split("#")
        return cleanPath
    }, [asPath])

    // 生成规范的 canonical URL
    const canonicalUrl = React.useMemo(() => {
        const url = locale === DEFAULT_LOCALE
            ? `${SITE_CONFIG.url}${cleanPath}`
            : `${SITE_CONFIG.url}/${locale}${cleanPath.replace(new RegExp(`^/${locale}`), "")}`
        return url.replace(/\/$/, "")
    }, [cleanPath, locale])

    const { layout = 'default' } = frontMatter
    const LayoutComponent = layouts[layout] || layouts.default

    // 添加调试日志
    console.log('=== Theme Debug Logs ===')
    console.log('FrontMatter:', frontMatter)
    console.log('Meta:', meta)
    console.log('Canonical URL:', canonicalUrl)

    // 获取语言代码
    const htmlLang = React.useMemo(() => {
        const localeConfig = SUPPORTED_LOCALES[locale]
        return localeConfig?.htmlLang || locale
    }, [locale])

    // 生成页面标题
    const pageTitle = React.useMemo(() => {
        const baseTitle = frontMatter?.title || meta?.title || SITE_CONFIG.title
        const suffix = SUPPORTED_LOCALES[locale]?.titleSuffix || ''
        return `${baseTitle}${suffix}`
    }, [frontMatter?.title, meta?.title, locale])

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={frontMatter?.description} />
                <meta name="keywords" content={frontMatter?.keywords} />
                
                {/* HTML Language */}
                <meta httpEquiv="content-language" content={htmlLang} />
                <meta property="og:locale" content={SUPPORTED_LOCALES[locale]?.ogLocale || SUPPORTED_LOCALES[DEFAULT_LOCALE].ogLocale} />
                
                {/* Robots Tags */}
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />
                <meta
                    name="googlebot"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />
                <meta
                    httpEquiv="x-robots-tag"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />

                {/* Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={frontMatter?.description} />
                <meta property="og:image" content={frontMatter?.cover || frontMatter?.icon || '/og-image.jpg'} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_CONFIG.twitter} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={frontMatter?.description} />
                <meta name="twitter:image" content={frontMatter?.cover || frontMatter?.icon || '/og-image.jpg'} />
                
                {/* Canonical URL */}
                <link rel="canonical" href={canonicalUrl} />

                {/* 添加其他语言版本的替代链接 */}
                {LOCALE_CODES.map((lang) => {
                    if (lang !== locale) {
                        return (
                            <link
                                key={lang}
                                rel="alternate"
                                hrefLang={lang}
                                href={`${SITE_CONFIG.url}${cleanPath.replace(
                                    new RegExp(`^/${locale}`),
                                    `/${lang}`
                                )}`}
                            />
                        )
                    }
                    return null
                })}
                <link
                    rel="alternate"
                    hrefLang="x-default"
                    href={`${SITE_CONFIG.url}${cleanPath.replace(/\/$/, "")}`}
                />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                {/* 其他元标签 */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header themeConfig={themeConfig} meta={meta} />

            <LayoutComponent
                frontMatter={frontMatter}
                themeConfig={themeConfig}
                pageMap={pageMap}
            >
                {children}
            </LayoutComponent>

            <Footer themeConfig={themeConfig} />
        </div>
    )
}