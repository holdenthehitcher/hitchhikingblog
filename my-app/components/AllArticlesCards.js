import React from "react";
import Card from "react-bootstrap/Card";

export default function AllArticlesCards({ blogposts }) {
  return (
    <>
      {blogposts.map(({ thumbnail }, i) => (
        <Card key={i}>
          <Card.Title>{thumbnail.title}</Card.Title>
          <Card.Img variant="top" src={thumbnail.image} />
          <Card.Body>
            <Card.Text>{thumbnail.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
