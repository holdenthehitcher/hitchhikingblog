import React from "react";
import CardColumns from "react-bootstrap/CardColumns";

import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ArticlesFeatured from "../components/ArticlesFeatured";
import RandomArticle from "../components/RandomArticle";
import SortingButtons from "../components/SortingButtons";
import AllArticlesCards from "../components/AllArticlesCards";
import ArticlesPaginate from "../components/ArticlesPaginate";

import { ALLPOSTS } from "../shared/ALLPOSTS";

export default function Articles() {
  const blogposts = ALLPOSTS;

  return (
    <>
      <TitleName />
      <main>
        <Navigation />
        <div className="container">
          <h1 className="carouselCaptionHeading" style={{ textAlign: "center" }}>
            Featured Stories
          </h1>
          <ArticlesFeatured />
          <RandomArticle />
          <h1 className="carouselCaptionHeading" style={{ textAlign: "center" }}>
            All Stories
          </h1>
          <SortingButtons />
          <CardColumns>
            <AllArticlesCards blogposts={blogposts} />
          </CardColumns>
          <ArticlesPaginate />
        </div>
        <Footer />
      </main>
    </>
  );
}
