import React, { Component } from "react";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryTemplate from "../components/CategoryTemplate";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "gearBackground",
      heading: "Gear",
      description: "Trekking, and camping in all-four seasons in rural and urban environments that highlight some of the tools and equipment I used during two years on foot"
    };
  }

  render() {
    return (
      <>
        <Title />
        <main>
          <Navigation />
            
            <CategoryTemplate heading={this.state.heading} description={this.state.description}/>
            
          <Footer />
        </main>
      </>
    );
  }
}
