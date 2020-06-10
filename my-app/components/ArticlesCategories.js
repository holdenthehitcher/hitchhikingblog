import React from "react";
import Card from "react-bootstrap/Card";

export default function ArticlesCategories() {
  const articleCategories = [
    {
      heading: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.jpg",
      description: "Check out examples of altruism from people around the world.",
    },
    {
      heading: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.jpg",
      description: "How other people live says a lot about how people adapt to different factors in life",
    },
    {
      heading: "Culinary",
      image: "blogmaterials/categories/culinary_category.jpg",
      description: "Food, Friends, and Fun: a reflection of culture from seed to plate",
    },
  ];

  return (
    <div className="row">
      {articleCategories.map(({ heading, image, description }, i) => (
        <div className="col">
          <Card key={i}>
            <Card.Header>{heading}</Card.Header>
            <Card.Body>
              <Card.Img src={image} />
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
