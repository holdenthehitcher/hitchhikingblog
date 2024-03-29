import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import FooterNav from "../components/FooterNav";
import ArticlesFeatured from "../components/ArticlesFeatured";
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

  const [arrowDate, setArrowDate] = useState("fa-arrow-up");
  const [arrowLocation, setArrowLocation] = useState("fa-arrow-up");

  //// PAGINATION /////
  const [currentPage, setCurrentPage] = useState(1);
  ///state sets how many posts on each page
  const [postsPerPage] = useState(8);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Transition

  /// to Local date string

  return (
    <>
      <TitleName />
      <main>
        <Navigation />
        <div className="container">
          <h1 className="storiesCategoryHeading" style={{ textAlign: "center" }}>
            Stories by Category
          </h1>
          <ArticlesFeatured />
          <h1 className="allStoriesHeader" style={{ textAlign: "center" }}>
            All Stories
          </h1>
          <div className="row d-flex justify-content-center mb-2">
            <Button
              onClick={() => {
                if (sortType === "date") {
                  ``;
                  setSortDir(sortDir === "asc" ? "dsc" : "asc");
                  setArrowDate(arrowDate === "fa-arrow-up" ? "fa-arrow-down" : "fa-arrow-up");
                } else {
                  setSortType("date");
                }
              }}
              className="sortBtnDate btn btn-lg sortButtons btn-success"
              type="button"
            >
              Sort by Date <i className={`fa ${arrowDate}`}></i>
            </Button>
            {/* <Button
              onClick={() => {
                if (sortType === "className") {
                  setSortDir(sortDir === "asc" ? "dsc" : "asc");
                } else {
                  setSortType("className");
                }
              }}
              className="sortBtnCat btn btn-lg sortButtons btn-success"
              type="button"
            >
              Sort by Category
              <i className="fa fa-fw fa-sort"></i>
            </Button> */}
            <Button
              onClick={() => {
                // when the button is clicked
                if (sortType === "location") {
                  // if the sortType is "location"
                  setSortDir(sortDir === "asc" ? "dsc" : "asc");
                  // change sortDir from asc to dsc, or if not asc, to asc
                  setArrowLocation(arrowLocation === "fa-arrow-up" ? "fa-arrow-down" : "fa-arrow-up");
                } else {
                  setSortType("location");
                  // set sortType state to location
                }
              }}
              className="sortBtnLocation btn btn-lg sortButtons btn-success"
              type="button"
            >
              Sort by Location <i className={`fa ${arrowLocation}`}></i>
            </Button>
          </div>
          <AllArticlesCards blogposts={currentPosts} currentPage={currentPage} />
          <ArticlesPaginate
            postsPerPage={postsPerPage}
            totalPosts={blogposts.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <FooterNav />
      </main>
    </>
  );
}
