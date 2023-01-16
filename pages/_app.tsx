import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

import generateRssFeed from "../utils/generateRSSFeed";
export async function getStaticProps() {
  await generateRssFeed();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
