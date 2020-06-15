import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export default function AllArticles({ blogposts }) {
  return (
    <div className="row">
      <CardColumns>
        {blogposts.map(({ thumbnail }, i) => (
          <Card key={i}>
            <Card.Img variant="top" src={thumbnail.image} />
            <Card.Body>
              <Card.Title>{thumbnail.title}</Card.Title>
              <Card.Text>{thumbnail.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}
