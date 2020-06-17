import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import styled from "styled-components";

import Link from "next/link";

export default function HomeArticlesCategories() {
  const articleCategories = [
    {
      heading: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.jpg",
      description: "Check out examples of altruism from people around the world.",
      link: "/hitchhiking",
    },
    {
      heading: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.jpg",
      description: "How other people live says a lot about how people adapt to different factors in life",
      link: "/volunteering",
    },
    {
      heading: "Culinary",
      image: "blogmaterials/categories/culinary_category.jpg",
      description: "Food, Friends, and Fun: a reflection of culture from seed to plate",
      link: "/culinary",
    },
  ];

  const Title = styled.h1`
  font-size: 40px,
  font-color: blue,
  `;

  const styleHeader = {
    fontSize: "30px",
    color: "silver",
  };

  return (
    <>
      <div className="row my-4 d-flext justify-content-center">
        <Title>Story Categories</Title>
      </div>
      <div className="row mb-5">
        <CardDeck>
          {articleCategories.map(({ heading, image, description, link }, i) => (
            <Card key={i}>
              <Card.Header className="d-flex justify-content-center" style={styleHeader}>
                {heading}
              </Card.Header>
              <Card.Body>
                <Link href={link}>
                  <a>
                    <Card.Img src={image} />
                  </a>
                </Link>
                <Card.Text className="mt-1">{description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>
    </>
  );
}
