import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import AboutMe from "../components/AboutMe";
import PopularPosts from "../components/PopularPosts";
import InspirationalQuote from "../components/InspirationalQuote";
import HomeArticlesCategories from "../components/HomeArticlesCategories";
import Map from "../components/Map";
import HomeGearReviews from "../components/HomeGearReviews";

export default function Home() {
  return (
    <>
      <Title />
      <main>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="d-flex justify-content-center">About Holden the Hitcher</h3>
            </div>
          </div>
          <AboutMe />
          <PopularPosts />
          <InspirationalQuote />
          <HomeArticlesCategories />
          <Map />
          <HomeGearReviews />
        </div>
        <Footer />
      </main>
    </>
  );
}
