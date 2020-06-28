import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Link from "next/link";

import { Fade, Stagger } from "react-animation-components";

const AllArticlesCards = ({ blogposts, currentPage }) => {
  useEffect(() => {
    console.log("rerendered");
  }, [currentPage]);
  return (
    <CardColumns className="cardColumn">
      <Stagger in>
        {blogposts.map(({ thumbnail, pageLink = "/allstories", className }, i) => (
          <Fade key={i}>
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
          </Fade>
        ))}
      </Stagger>
    </CardColumns>
  );
};
export default AllArticlesCards;
