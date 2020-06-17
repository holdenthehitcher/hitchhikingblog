import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "../styles/styles.scss";
import Fonts from "../styles/Fonts";

import Head from "next/head";

import "../styles/fonts.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Fonts />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
