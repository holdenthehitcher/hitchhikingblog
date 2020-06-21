import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function AllArticlesCards({ blogposts }) {
  return (
    <>
      {blogposts.map(({ thumbnail, pageLink = "/allstories" }, i) => (
        <Card key={i}>
          <Link href={pageLink}>
            <a>
              <Card.Title className="quoteAuthor" style={{ textAlign: "center" }}>
                {thumbnail.title}
              </Card.Title>
              <Card.Img variant="top" src={thumbnail.image} />
              <Card.Body>
                <Card.Text className="quoteText">{thumbnail.description}</Card.Text>
              </Card.Body>
            </a>
          </Link>
        </Card>
      ))}
    </>
  );
}
