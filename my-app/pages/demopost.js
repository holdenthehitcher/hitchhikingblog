import React, { Component } from "react";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PostImageTemplate from "../components/PostImageTemplate";

import { HITCHHIKINGPOSTS } from "../shared/HITCHHIKINGPOSTS";

export class templatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
        blogposts: HITCHHIKINGPOSTS,
    };
  }
  
  render() {

    const postInfo = this.state.blogposts[0];
    const {images} = postInfo

    return (
      <>
        <Title />
        <main>
          <Navigation />
          <h1>Headline for Article</h1>

            <PostImageTemplate image={images[0]} /> 
            {/* PostVideoTemplate */}
        
          <Footer />
        </main>
      </>
    );
  }
}

export default templatePost;
