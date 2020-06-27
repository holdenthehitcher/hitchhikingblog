import React, { Component } from "react";
import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryBackground from "../components/CategoryBackground";
import CategoryCards from "../components/CategoryCards";

import { CULINARYPOSTS } from "../shared/CULINARYPOSTS";

export default class Culinary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "culinaryBackground",
      heading: "Culinary",
      description:
        "Embarking on a journey of food culture begins with a single bite. From seed to plate, the food displays the pride people have of their ingredients and preparation methods passed down from past generations",
    };
  }

  render() {
    const blogposts = CULINARYPOSTS;

    return (
      <>
        <TitleName />
        <main>
          <Navigation />
          <CategoryBackground
            heading={this.state.heading}
            description={this.state.description}
            backgroundId={this.state.backgroundId}
          />
          <CategoryCards blogposts={blogposts} heading={this.state.heading} />
          <Footer />
        </main>
      </>
    );
  }
}
