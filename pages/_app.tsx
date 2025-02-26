import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script';
import '../src/styles/globals.css';

const GA_MEASUREMENT_ID = 'id';
const ADSENSE_ID = 'id';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/twemoji@14.0.2/dist/twemoji.min.js" />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
      <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous" />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

    </>
  )
} 