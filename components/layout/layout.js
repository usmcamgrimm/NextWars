import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const name = 'Star Wars'
export const siteTitle = 'Next.js Star Wars Site'

export default function Layout({ children, home }) {
  return (
    <div className="container max-w-xl px-4 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Retrieve data about Star Wars characters and planets"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="header flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/sw-logo.png"
              height={252}
              width={2317}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/sw-logo.png"
                  height={252}
                  width={2317}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </div>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}