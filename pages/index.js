import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (Star Wars site under construction using the{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}