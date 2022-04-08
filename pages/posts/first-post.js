import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import YourComponent from '../../components/your-component'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={ () =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1>First Post</h1>
      <YourComponent />
    </Layout>
  )
}
