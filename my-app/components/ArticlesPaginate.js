import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const ArticlesPaginate = ({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} onClick={() => paginate(i)} href="#" className={currentPage === i ? "currentPageHighlight" : ""}>
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div className="row d-flex justify-content-center">
      <Pagination size="lg">
        <Pagination.First onClick={() => paginate(1)} href="#" />
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} href="#" />
        {pageNumbers}
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} href="#" />
        <Pagination.Last onClick={() => paginate(Math.ceil(totalPosts / postsPerPage))} href="#" />
      </Pagination>
    </div>
  );
};

export default ArticlesPaginate;
