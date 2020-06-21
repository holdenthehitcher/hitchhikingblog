import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import AboutMe from "../components/AboutMe";
import HomePopularCarousel from "../components/HomePopularCarousel";
import InspirationalQuote from "../components/InspirationalQuote";
import HomeArticlesCategories from "../components/HomeArticlesCategories";
import Map from "../components/Map";
import HomeGearReviews from "../components/HomeGearReviews";

export default function Home() {
 
  return (
    <>
      <TitleName />
      <main>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="d-flex justify-content-center styled-heading">About Holden the Hitcher</h3>
            </div>
          </div>
          <AboutMe />
          <HomePopularCarousel />
          <InspirationalQuote />
          <HomeArticlesCategories />
          <HomeGearReviews />
          <Map />
        </div>
        <Footer />
      </main>
    </>
  );
}
