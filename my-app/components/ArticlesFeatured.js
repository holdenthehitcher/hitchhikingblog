import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function ArticlesFeatured() {
  const articles = [
    {
      header: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.jpg",
      link: "/hitchhiking",
    },
    {
      header: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.jpg",
      link: "/volunteering",
    },
    {
      header: "Culinary",
      image: "blogmaterials/categories/culinary_category.jpg",
      link: "/culinary",
    },
  ];

  return (
    <div className="row">
      {articles.map(({ header, image, link }, i) => (
        <div className="col" key={i}>
          <Card>
            <Card.Header>{header}</Card.Header>
            <Link href={link}>
              <a>
                <Card.Img src={image} />
              </a>
            </Link>
            <Card.Body></Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
