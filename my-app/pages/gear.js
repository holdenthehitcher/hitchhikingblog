import React, { Component } from "react";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryBackground from "../components/CategoryBackground";
import CategoryHighlightedCards from "../components/CategoryHighlightedCards";
import { GEARPOSTS } from "../shared/GEARPOSTS";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "gearBackground",
      heading: "Gear",
      description:
        "Trekking, and camping in all-four seasons in rural and urban environments that highlight some of the tools and equipment I used during two years on foot",
    };
  }

  render() {
    const blogposts = GEARPOSTS;

    return (
      <>
        <Title />
        <main>
          <Navigation />
          <CategoryBackground
            heading={this.state.heading}
            description={this.state.description}
            backgroundId={this.state.backgroundId}
          />
          <div className="row">
            <CategoryHighlightedCards blogposts={blogposts} />
          </div>
          <Footer />
        </main>
      </>
    );
  }
}
