import Document, { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "@/utils/AppConfig";

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            // crossorigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content={AppConfig.title} />
          <meta property="twitter:title" content={AppConfig.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={AppConfig.canonical} />
          <meta property="twitter:url" content={AppConfig.canonical} />
          <meta property="og:image" content={AppConfig.previewImg} />
          <meta property="twitter:image" content={AppConfig.previewImg} />
          {!!AppConfig.description && (
            <>
              <meta property="og:description" content={AppConfig.description} />
              <meta
                name="twitter:description"
                content={AppConfig.description}
              />
              <meta name="description" content={AppConfig.description} />
            </>
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="Web3 Savings Network" />
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
