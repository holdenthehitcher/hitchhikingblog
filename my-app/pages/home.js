import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopularPosts from "../components/PopularPosts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hitch-Hike with Holden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <AboutMe />
        <PopularPosts />
        {/* Inspirational Quote */}

        <Footer />
      </main>
    </>
  );
}
