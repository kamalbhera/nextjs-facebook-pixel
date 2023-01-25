import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=2258009361089308&ev=PageView&noscript=1`}
          />
        </noscript>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
