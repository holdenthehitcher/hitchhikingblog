import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export default function PopularPosts() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselSlides = [
    {
      image: "blogmaterials/ibiza_trip/ibizasailboat.JPG",
      alt: "sailboat",
      heading: "First time Hitchhiking, Ever!",
      text: "There's a first time for everything... by the way it happened, no one would believe it!",
    },
    {
      image: "blogmaterials/ibiza_trip/ibizaart.jpg",
      alt: "art",
      heading: "Art in Ibiza",
      text:
        "Known solely for its beautiful beaches and world-renowned nightlife, this small Spanish island has more to offer.",
    },
    {
      image: "blogmaterials/ibiza_trip/cavestairs.jpg",
      alt: "ocean",
      heading: "Right Directions from Wrong Turns",
      text:
        "Getting stuck somewhere can bring a sense of dread, allowing the kindness of strangers to shine onto the world.",
    },
  ];

  return (
    <>
      <div className="row">
        <h2>Popular Articles</h2>
      </div>
      <div className="row">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {carouselSlides.map(({ image, alt, heading, text }, i) => (
            <Carousel.Item key={i}>
              <Card className="carouselCard">
                <Card.Img top src={image} alt={alt} />
              </Card>
              <Carousel.Caption>
                <h3>{heading}</h3>
                <p>{text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
