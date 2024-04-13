import GlobalStylesComponent from '@/styles/globals'
import ThemeConfig from '@/styles/theme'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GlobalStylesComponent />
      <ThemeConfig>
        <Component {...pageProps} />
      </ThemeConfig>
    </AppCacheProvider>
  )
}
