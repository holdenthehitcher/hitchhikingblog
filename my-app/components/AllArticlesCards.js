import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const AllArticlesCards = ({ blogposts}) => {
  return (
    <>
        {blogposts.map(({ thumbnail, pageLink = "/allstories", className }, i) => (
          <Card className={`${className}`}>
            <Link href={pageLink}>
              <a>
                <Card.Title className="allCardTitle" style={{ textAlign: "center" }}>
                  {thumbnail.title}
                </Card.Title>
                <Card.Img variant="top" className="allCardImage" src={thumbnail.image} />
                <Card.Body className="">
                  <Card.Text className="quoteText allCardText">{thumbnail.description}</Card.Text>
                </Card.Body>
              </a>
            </Link>
          </Card>
        ))}
    </>
  );
};
export default AllArticlesCards;
