import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "../styles/styles.scss";
// import "~bootstrap/scss/bootstrap";
import "../styles/NavbarStyles.scss";
import "../styles/AboutMe.scss";
import "../styles/HomePopularCarousel.scss";
import "../styles/InspirationalQuote.scss";
import "../styles/HomeCategoryCards.scss";
import "../styles/HomeGearCategory.scss";
import "../styles/BlogStyles.scss";
import "../styles/CatBackgrounds.scss";
import "../styles/Map.scss";
import "../styles/Transitions.scss";
import "../styles/CategoryCards.scss";
import "../styles/AllArticles.scss";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
