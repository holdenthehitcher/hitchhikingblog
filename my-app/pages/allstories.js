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
  const blogposts = ALLPOSTS;
  ///// SORTING BUTTONS /////
  //// state for sorttype thats changed by the type setsorttype
  const [sortType, setSortType] = useState("date");
  // setting state of sortType to "date" with setSortType changing it
  const [sortDir, setSortDir] = useState("asc");
  // setting state of sortDir to "asc" with setSortDir changing it

  const sorted = blogposts.sort((a, b) => {
    //sorting the blogposts array and storing it in variable sorted
    const first = a[sortType].toUpperCase();
    // taking the first item by sort type and making it all uppercase
    const second = b[sortType].toUpperCase();
    // taking the second item by sort type and making it all uppercase
    if (first < second) {
      // if the first item is less than the second
      return sortDir === "asc" ? -1 : 1;
    }
    // return sortDir if it is "asc", put first before second, if it's not asc, then put it after
    if (first > second) {
      // if first item is greater than the second
      return sortDir === "asc" ? 1 : -1;
      // return if sortDir is asc, put first ahead of second, or if not, put it before`
    }
    return 0;
  });

  /// Button Arrows

  const [arrowDir, setArrowDir] = useState("fa-arrow-up");

  //// PAGINATION /////
  const [currentPage, setCurrentPage] = useState(1);
  ///state sets how many posts on each page
  const [postsPerPage] = useState(9);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);
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
          <div className="row d-flex justify-content-center mb-2">
            <Button
              onClick={() => {
                if (sortType === "date") {
                  setSortDir(sortDir === "asc" ? "dsc" : "asc");
                  setArrowDir(arrowDir === "fa-arrow-up" ? "fa-arrow-down" : "fa-arrow-up");
                } else {
                  setSortType("date");
                }
              }}
              className="sortButtons"
              type="button"
            >
              Sort by Date <i className={`fa ${arrowDir}`}></i>
            </Button>
            <Button
              onClick={() => {
                if (sortType === "className") {
                  setSortDir(sortDir === "asc" ? "dsc" : "asc");
                } else {
                  setSortType("className");
                }
              }}
              className="sortButtons"
              type="button"
            >
              Sort by Category
              <i className="fa fa-fw fa-sort"></i>
            </Button>
            <Button
              onClick={() => {
                // when the button is clicked
                if (sortType === "location") {
                  // if the sortType is "location"
                  setSortDir(sortDir === "asc" ? "dsc" : "asc");
                  // change sortDir from asc to dsc, or if not asc, to asc
                  setArrowDir(arrowDir === "fa-arrow-up" ? "fa-arrow-down" : "fa-arrow-up");
                } else {
                  setSortType("location");
                  // set sortType state to location
                }
              }}
              className="sortButtons"
              type="button"
            >
              Sort by Location <i className={`fa ${arrowDir}`}></i>
            </Button>
          </div>
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
