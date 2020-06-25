import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const ArticlesPaginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i}>
        <a onClick={() => paginate(i)} href="#">
          {i}
        </a>
      </Pagination.Item>
    );
  }
  return (
    <div className="row d-flex justify-content-center">
      <Pagination size="lg">
        <Pagination.First />
        <Pagination.Prev />
        {pageNumbers}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default ArticlesPaginate;
