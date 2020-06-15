import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function ArticlesCategories() {
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

  return (
    <div className="row">
      {articleCategories.map(({ heading, image, description, link }, i) => (
        <div key={i} className="col">
          <Card>
            <Card.Header>{heading}</Card.Header>
            <Card.Body>
              <Link href={link}>
                <a>
                  <Card.Img src={image} />
                </a>
              </Link>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
