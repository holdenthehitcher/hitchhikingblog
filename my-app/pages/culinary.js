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
      heading: "Food & Culture",
      description:
        "A culinary journey starts with a single bite. From seed to plate, the food displays the pride people have of their ingredients and preparation methods passed down from past generations",
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
          <div className="row">
            <CategoryCards blogposts={blogposts} heading={this.state.heading} />
          </div>
          <Footer />
        </main>
      </>
    );
  }
}
