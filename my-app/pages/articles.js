import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ArticlesFeatured from "../components/ArticlesFeatured";
import RandomArticle from "../components/RandomArticle";
import AllArticles from "../components/AllArticles";

import { ALLPOSTS } from "../shared/ALLPOSTS";

export default function Articles() {

const blogposts = ALLPOSTS;

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
          <AllArticles blogposts={blogposts}/>
          {/* Pagination */}
        </div>
        <Footer />
      </main>
    </>
  );
}
