import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "../styles/styles.scss";
import GoogleFonts from "../styles/GoogleFonts";

import "../styles/GoogleFonts.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <GoogleFonts />
      </head>
      <Component {...pageProps} />;
    </>
  );
}
