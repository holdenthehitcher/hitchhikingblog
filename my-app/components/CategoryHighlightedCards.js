import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default function CategoryHighlightedCards({ blogposts }) {
  return (
    <CardDeck className="catCardDeck">
      {blogposts.map(({ thumbnail }, i) => (
        <Card key={i} className="catCard">
          <Card.Header className="catCardHeader" style={{ textAlign: "center" }}>
            {thumbnail.title}
          </Card.Header>
          <Card.Body className="catCardBody">
            <Card.Img src={thumbnail.image} />
            <Card.Text className="catCardText">{thumbnail.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
}
