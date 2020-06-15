import React from "react";
import Pagination from "react-bootstrap/Pagination";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const ArticlesPaginate = () => {
  return (
    <div className="row d-flex justify-content-center">
      <Pagination size="lg">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Ellipsis />
        {items}
        <Pagination.Ellipsis />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default ArticlesPaginate;
