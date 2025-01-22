// pages/index.js
import Head from "next/head";
import Map from "../Components/map";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Map in Next.js</title>
        <meta name="description" content="Google Maps Integration in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Google Maps with Next.js</h1>
        <Map />
      </main>
    </div>
  );
}
