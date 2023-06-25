import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content="Alex Kalinin"></meta>
        <meta name="author" content="Alex Kalinin"></meta>
        <script
          data-goatcounter="https://kalininator.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body className="bg-white dark:bg-slate-900 dark:text-violet-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
