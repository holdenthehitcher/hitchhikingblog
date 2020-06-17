import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import AboutMe from "../components/AboutMe";
import HomePopularCarousel from "../components/HomePopularCarousel";
import InspirationalQuote from "../components/InspirationalQuote";
import HomeArticlesCategories from "../components/HomeArticlesCategories";
import Map from "../components/Map";
import HomeGearReviews from "../components/HomeGearReviews";

import styled from "styled-components";

export default function Home() {
  const StyledHeading = styled.h3`
    color: white;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 50px;
  `;
  return (
    <>
      <Title />
      <main>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col">
              <StyledHeading className="d-flex justify-content-center">About Holden the Hitcher</StyledHeading>
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
