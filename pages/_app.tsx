import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "../containers/header";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>NFT WAR</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
