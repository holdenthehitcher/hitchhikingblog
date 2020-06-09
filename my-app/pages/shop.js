import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Articles() {
  return (
    <>
      <Title />
      <main>
        <div className="container">
          <Navigation />
        </div>
        <Footer />
      </main>
    </>
  );
}
