import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ArticlesFeatured from "../components/ArticlesFeatured";
import RandomArticle from "../components/RandomArticle";

import { ALLPOSTS } from "../shared/ALLPOSTS";

export default function Articles() {

const blogposts = ALLPOSTS;
console.log(blogposts);

  return (
    <>
      <Title />
      <main>
        <h1>Featured Articles</h1>
        <Navigation />
        <div className="container">
          <ArticlesFeatured />
          <RandomArticle />
          {/* Sort buttons 1.Location 2.Category 3.Date */}
          {/* Cards of every post */}
          {/* Pagination */}
        </div>
        <Footer />
      </main>
    </>
  );
}
