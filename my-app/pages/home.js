import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        {/* Carousel Component: Popular articles */}
        {/* Inspirational Quote */}
        
        <Footer />
      </main>
    </>
  );
}
