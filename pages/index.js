import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
      {/* result component */}
    </div>
  );
}
