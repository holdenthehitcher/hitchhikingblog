import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopularPosts from "../components/PopularPosts";
import InspirationalQuote from "../components/InspirationalQuote";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hitch-Hike with Holden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <Header />
          <AboutMe />
          <PopularPosts />
          <InspirationalQuote />
          {/* Articles Cards */}
        </div>

        <Footer />
      </main>
    </>
  );
}
