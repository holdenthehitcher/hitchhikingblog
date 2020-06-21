import React, { Component } from "react";
import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryBackground from "../components/CategoryBackground";
import CategoryHighlightedCards from "../components/CategoryHighlightedCards";

import { VOLUNTEERPOSTS } from "../shared/VOLUNTEERPOSTS";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "volunteerBackground",
      heading: "Volunteering",
      description:
        "Exchanging a few hours a day for room and board working on farms, in homes and hostels provide real-world experience in understanding how others make a living",
    };
  }

  render() {
    const blogposts = VOLUNTEERPOSTS;

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
            <CategoryHighlightedCards blogposts={blogposts} />
          </div>
          <Footer />
        </main>
      </>
    );
  }
}
