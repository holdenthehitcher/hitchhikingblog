import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import ArticlesFeatured from "../components/ArticlesFeatured";
import RandomArticle from "../components/RandomArticle";

export default function Articles() {
  return (
    <>
      <Title />
      <main>
        <h1>Featured Articles</h1>
        <Navigation />
        <div className="container">
          <ArticlesFeatured />
          <RandomArticle />
        </div>
        <Footer />
      </main>
    </>
  );
}
