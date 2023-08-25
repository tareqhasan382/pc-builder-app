import dynamic from "next/dynamic";
const Details = ({ post }) => {
  const DynamicPage = dynamic(() => import("../../components/DetailsPage"), {
    loading: () => (
      <div className=" py-24 h-screen justify-center ">
        <p className=" text-pink-500 font-bold ">Loading......</p>
      </div>
    ),
    ssr: false,
  });
  return (
    <>
      <div className="flex justify-center items-center px-2 py-20 ">
        <DynamicPage post={post} />
      </div>
    </>
  );
};
export default Details;

export async function getStaticPaths() {
  const res = await fetch(
    "https://pc-builder-server-knfxakjmw-tareqhasan382.vercel.app/products"
  );
  const posts = await res.json();
  const paths = posts?.data.map((post) => ({
    params: { id: post._id },
  }));
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-knfxakjmw-tareqhasan382.vercel.app/products/${params.id}`
  );
  const post = await res.json();
  return { props: { post: post.data } };
}
