import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function RandomArticle() {
  return (
    <div className="row my-4">
      <div className="col">
        <Card className="text-center">
          <Card.Header className="">Random Article Generator</Card.Header>
          <Card.Body>
            <Card.Title className="">Needing Some Inspiration?</Card.Title>
            <Card.Text className="">Check out our a random article chooser to add novelty to your day!</Card.Text>
            <Button className="primary btn btn-lg">Pick A Story</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
