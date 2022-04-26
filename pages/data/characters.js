import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function Characters() {
  return (
    <Layout>
      <Head>
        <title>Characters Page</title>
      </Head>
        <h1>Characters</h1>
        <h2>
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </h2>
    </Layout>
  )
}