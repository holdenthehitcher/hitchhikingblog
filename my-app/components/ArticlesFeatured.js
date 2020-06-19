import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

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
      <CardDeck>
        {articles.map(({ header, image, link }, i) => (
          <div className="col-lg-4 mb-2">
            <Card key={i}>
              <Card.Header className="catCardHeader" style={{ textAlign: "center" }}>
                {header}
              </Card.Header>
              <Link href={link}>
                <a>
                  <Card.Img src={image} />
                </a>
              </Link>
              <Card.Body></Card.Body>
            </Card>
          </div>
        ))}
      </CardDeck>
    </div>
  );
}
