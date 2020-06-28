import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import Link from "next/link";

export default function ArticlesFeatured() {
  const articles = [
    {
      header: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.JPG",
      link: "/hitchhiking",
    },
    {
      header: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.JPG",
      link: "/volunteering",
    },
    {
      header: "Culinary",
      image: "blogmaterials/categories/culinary_category.JPG",
      link: "/culinary",
    },
    {
      header: "Gear",
      image: "/blogmaterials/gear/gear_category.JPG",
      link: "/gear",
    },
  ];

  return (
    <div className="row">
      <CardDeck className="featuredCatDeck">
        {articles.map(({ header, image, link }, i) => (
          <Card className="featuredCat" key={i}>
            <Link href={link}>
              <a>
                <Card.Header className="featuredCardHeader">{header}</Card.Header>
                <Card.Img src={image} />
                <Card.Body></Card.Body>
              </a>
            </Link>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
