import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "../styles/styles.scss";
import GoogleFonts from "../styles/GoogleFonts";
import Head from "next/Head";

import "../styles/GoogleFonts.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <GoogleFonts />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
