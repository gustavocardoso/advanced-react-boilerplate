import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/globals'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Advanced React - Boilerplate</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
