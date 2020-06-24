import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import AboutMeSection from "../components/AboutMeSection";
import HomePopularCarousel from "../components/HomePopularCarousel";
import InspirationalQuote from "../components/InspirationalQuote";
import HomeCategoryCards from "../components/HomeCategoryCards";
import Map from "../components/Map";
import HomeGearReviews from "../components/HomeGearReviews";

export default function Home() {
  return (
    <>
      <TitleName />
      <main>
        <Navigation />
        <div className="container">
          <div className="row"></div>
          <AboutMeSection />
          <HomePopularCarousel />
          <InspirationalQuote />
          <HomeCategoryCards />
          <HomeGearReviews />
          <Map />
        </div>
        <Footer />
      </main>
    </>
  );
}
