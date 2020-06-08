import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header />
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Holden the Hitcher</a>
        </h1>

        <AboutMe />

        <Footer />
      </main>
    </div>
  );
}
