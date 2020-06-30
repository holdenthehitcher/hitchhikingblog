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
      catBgStyle: "hitchhikingCard",
    },
    {
      header: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.JPG",
      link: "/volunteering",
      catBgStyle: "volunteerCard",
    },
    {
      header: "Culinary",
      image: "blogmaterials/categories/culinary_category.JPG",
      link: "/culinary",
      catBgStyle: "culinaryCard",
    },
    {
      header: "Gear",
      image: "/blogmaterials/gear/gear_category.JPG",
      link: "/gear",
      catBgStyle: "gearCard",
    },
  ];

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
          {articles.map(({ header, image, link, catBgStyle }, i) => (
            <Card className={`featuredCatCard ${catBgStyle}`} key={i}>
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
      </CSSTransitionGroup>
    </div>
  );
}
