import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import AboutMe from "../components/AboutMe";
import PopularPosts from "../components/PopularPosts";
import InspirationalQuote from "../components/InspirationalQuote";
import ArticlesCategories from "../components/ArticlesCategories";
import Map from "../components/Map";
import GearReviews from "../components/GearReviews";

export default function Home() {
  return (
    <>
      <Title />
      <main>
        <Navigation />
        <div className="container">
          <AboutMe />
          <PopularPosts />
          <InspirationalQuote />
          <ArticlesCategories />
          <Map />
          <GearReviews />
        </div>
        <Footer />
      </main>
    </>
  );
}
