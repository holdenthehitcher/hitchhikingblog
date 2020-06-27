import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import { useSpring, animated } from "react-spring";

import Link from "next/link";

const AllArticlesCards = ({ blogposts }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const AnimatedCard = animated(Card);

  return (
    <>
      {blogposts.map(({ thumbnail, pageLink = "/allstories", className }, i) => (
        <AnimatedCard style={props} className={`${className}`} key={i}>
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
        </AnimatedCard>
      ))}
    </>
  );
};
export default AllArticlesCards;
