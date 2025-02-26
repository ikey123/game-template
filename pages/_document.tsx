import { Html, Head, Main, NextScript } from 'next/document'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/config/site'

export default function Document() {
  // 获取当前语言
  const locale = typeof window !== 'undefined' ? window.__NEXT_DATA__?.locale || DEFAULT_LOCALE : DEFAULT_LOCALE
  const htmlLang = SUPPORTED_LOCALES[locale]?.htmlLang || locale

  return (
    <Html lang={htmlLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 