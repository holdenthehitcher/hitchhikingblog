import React from "react";
import Card from "react-bootstrap/Card";

export default function ArticlesFeatured() {
  const articles = [
    {
      header: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.jpg",
    },
    {
      header: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.jpg",
    },
    {
      header: "Culinary",
      image: "blogmaterials/categories/culinary_category.jpg",
    },
  ];

  return (
    <div className="row">
      {articles.map(({ header, image }, i) => (
        <div className="col">
          <Card key={i}>
            <Card.Header>{header}</Card.Header>
            <Card.Img src={image} />
            <Card.Body></Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
