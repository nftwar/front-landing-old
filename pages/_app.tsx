import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "../containers/header";
import Footer from "../containers/footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>NFT WAR</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
  );
}

export default MyApp
