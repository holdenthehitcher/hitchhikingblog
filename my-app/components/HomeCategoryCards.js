import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { CSSTransitionGroup } from "react-transition-group";

import Link from "next/link";

export default function HomeCategoryCards() {
  const articleCategories = [
    {
      heading: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.JPG",
      description: "Check out examples of altruism from people around the world.",
      link: "/hitchhiking",
    },
    {
      heading: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.JPG",
      description: "How other people live says a lot about how people adapt to different factors in life",
      link: "/volunteering",
    },
    {
      heading: "Culinary",
      image: "blogmaterials/categories/culinary_category.JPG",
      description: "Food, Friends, and Fun: a reflection of culture from seed to plate",
      link: "/culinary",
    },
  ];

  return (
    <>
      <div className="row my-4 d-flex justify-content-center">
        <h1 id="homeCatHeader">Story Categories</h1>
      </div>
      <div className="row mb-5">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <CardDeck className="homeCategoryDeck">
            {articleCategories.map(({ heading, image, description, link }, i) => (
              <Card key={i} className="homeCategoryCard mt-4 ">
                <Card.Header className="d-flex justify-content-center catCardHeader">{heading}</Card.Header>
                <Card.Body className="catCardBody">
                  <Link href={link}>
                    <a>
                      <Card.Img className="boxShadow" src={image} />
                    </a>
                  </Link>
                  <Card.Text className="mt-1 catCardText">{description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </CSSTransitionGroup>
      </div>
    </>
  );
}
