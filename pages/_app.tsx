import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/main.css'
import { MDXComponents } from '../components/mdx'
import { GeistSans } from 'geist/font/sans'

export default function Nextra({ Component, pageProps }) {
  const components = MDXComponents()

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <main className={GeistSans.className}>
        <Component {...pageProps} components={components} />
      </main>
    </>
  )
}
