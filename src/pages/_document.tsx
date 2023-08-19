import Document, { Head, Html, Main, NextScript } from 'next/document';
import { GTAG_ID } from '../constants';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html className='color-scheme:normal'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap'
            rel='stylesheet'
          />
          {/* Google tag (gtag.js) */}
          <Script
            // src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','${GTAG_ID}' );
            `}
          </Script>

          {/* // eslint-disable-next-line @next/next/no-title-in-document-head */}
          {/* <title>
            {`${APP_NAME}`}
          </title>
          <meta
            name="description"
            content="Fullcover a booking site where you can earn rewards"
            key="desc"
           /> */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
