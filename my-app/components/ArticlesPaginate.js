import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const ArticlesPaginate = ({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        onClick={() => paginate(i)}
        href="#"
        className={currentPage === i ? "currentPageHighlight shadow-none" : ""}
      >
        {i}
      </Pagination.Item>
    );
  }

  //className={cx('toggler', {
  //  'toggler--active': transition,
  //})}

  return (
    <div className="row d-flex justify-content-center paginationRow">
      <Pagination size="lg">
        <Pagination.First onClick={() => paginate(1)} href="#" />
        <Pagination.Prev onClick={() => (currentPage === 1 ? 1 : setCurrentPage(currentPage - 1))} href="#" />
        {pageNumbers}
        <Pagination.Next onClick={() => (currentPage === totalPages ? 1 : setCurrentPage(currentPage + 1))} href="#" />
        <Pagination.Last onClick={() => paginate(totalPages)} href="#" />
      </Pagination>
    </div>
  );
};

export default ArticlesPaginate;
