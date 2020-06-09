import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import AboutMe from "../components/AboutMe";
import PopularPosts from "../components/PopularPosts";
import InspirationalQuote from "../components/InspirationalQuote";
import ArticleCategories from "../components/ArticleCategories";
import Map from "../components/Map";
import GearReviews from "../components/GearReviews";

export default function Home() {
  return (
    <>
      <Title />
      <main>
        <div className="container">
          <Navigation />
          <AboutMe />
          <PopularPosts />
          <InspirationalQuote />
          <ArticleCategories />
          <Map />
          <GearReviews />
        </div>
        <Footer />
      </main>
    </>
  );
}
