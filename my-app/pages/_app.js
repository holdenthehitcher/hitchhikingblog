import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "../styles/styles.scss";
import Fonts from "../styles/Fonts";

import "../styles/fonts.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <Fonts />
      </head>
      <Component {...pageProps} />;
    </>
  );
}
