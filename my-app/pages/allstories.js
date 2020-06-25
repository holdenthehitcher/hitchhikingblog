import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

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
  /*  const [type, setSortType] = useState([...blogposts]);

  useEffect(() => {
    <AllArticlesCards blogposts = {sortType} />
  }, [sortType]);

  const sortArray = (type) => {
    const types = {
      location: "location",
      date: "date",
      category: "className",
    };
    const blogposts = types[type];
    const sorted = [...blogposts].sort((a, b) => b.location - a.location);
  };
  sortArray(sortType);
*/

  const blogposts = ALLPOSTS;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  ///state sets how many posts on each page
  const [postsPerPage] = useState(7);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogposts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          <h1 className="postHeader" style={{ textAlign: "center" }}>
            All Stories
          </h1>
          {/*<div className="row d-flex justify-content-center">
            <Button
              disabled={sortType === "category"}
              onClick={() => setSortType("category")}
              className="sortButtons"
              type="button"
            >
              Sort by Category
            </Button>
            <Button
              disabled={sortType === "location"}
              onClick={() => setSortType("location")}
              className="sortButtons"
              type="button"
            >
              Sort by Location
            </Button>
            <Button
              disabled={sortType === "date"}
              onClick={() => setSortType("date")}
              className="sortButtons"
              type="button"
            >
              Sort by Date
            </Button>
  </div>*/}
          <CardColumns>
            <AllArticlesCards blogposts={currentPosts} />
          </CardColumns>
          <ArticlesPaginate postsPerPage={postsPerPage} totalPosts={blogposts.length} paginate={paginate} />
        </div>
        <Footer />
      </main>
    </>
  );
}
