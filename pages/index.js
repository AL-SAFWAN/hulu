import Head from "next/head";
import Image from "next/image";
import { Result } from "postcss";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Results from "../components/Results";
import request from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const req = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: req.results,
    },
  };
}
