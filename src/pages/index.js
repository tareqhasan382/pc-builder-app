import Head from "next/head";
import dynamic from "next/dynamic";
export default function Home({ data }) {
  const DynamicHome = dynamic(() => import("../components/HomePage"), {
    loading: () => (
      <div className=" py-24 h-screen justify-center ">
        <p className=" text-pink-500 font-bold ">Loading......</p>
      </div>
    ),
    ssr: false,
  });

  return (
    <main>
      <Head>
        <title>Home page</title>
        <meta name="home page" />
      </Head>
      <div className=" flex justify-center ">
        <DynamicHome data={data} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://pc-builder-server-knfxakjmw-tareqhasan382.vercel.app/products"
  );
  const data = await res.json();
  return { props: { data } };
}
