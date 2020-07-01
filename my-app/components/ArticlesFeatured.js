import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import Link from "next/link";
import { CSSTransitionGroup } from "react-transition-group";

export default function ArticlesFeatured() {
  const articles = [
    {
      header: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.JPG",
      link: "/hitchhiking",
      catColor: "hitchhikingCard",
    },
    {
      header: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.JPG",
      link: "/volunteering",
      catColor: "volunteerCard",
    },
    {
      header: "Culinary",
      image: "blogmaterials/categories/culinary_category.JPG",
      link: "/culinary",
      catColor: "culinaryCard",
    },
    {
      header: "Gear",
      image: "/blogmaterials/gear/gear_category.JPG",
      link: "/gear",
      catColor: "gearCard",
    },
  ];

  const featuredCards = articles.map(({ header, image, link, catColor }, i) => (
      <Card className={`featuredCatCard ${catColor}`} key={i}>
        <Link href={link}>
          <a>
            <Card.Header className="featuredCardHeader">{header}</Card.Header>
            <Card.Img src={image} />
            <Card.Body></Card.Body>
          </a>
        </Link>
      </Card>
    ))

  return (
    <div className="row">
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <CardDeck className="featuredCatDeck">
          {featuredCards}
        </CardDeck>
      </CSSTransitionGroup>
    </div>
  );
}
