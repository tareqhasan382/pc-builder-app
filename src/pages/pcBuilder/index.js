import Image from "next/image";
import { useProductContext } from "../../app/context/ProductContext ";
import { useRouter } from "next/navigation";
const Page = ({ products }) => {
  const router = useRouter();
  const { selectedCategory, addToCart } = useProductContext();
  // Filter products based on the selectedCategory
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  // add to card
  const handleAddToCart = (product) => {
    addToCart(product);
    router.push("/pcBuilder/PcBuilder");
  };

  return (
    <div className=" px-2 py-24 flex flex-col items-center h-screen ">
      <div>
        <h3 className=" font-bold ">Products</h3>
      </div>

      <div>
        <ul className=" ">
          {filteredProducts.map((product) => (
            <li key={product._id} className=" my-5 rounded ">
              <div className="flex flex-col justify-around md:flex-row w-full p-2 bg-gray-100 rounded-lg">
                <div className=" p-5 flex justify-center ">
                  <Image
                    src={product.img_url}
                    width={500}
                    height={500}
                    alt="img"
                    className=" w-48 "
                  />
                </div>
                <div className=" px-4 flex flex-col justify-center py-2 ">
                  <h4 className=" text-lg font-bold ">{product.title}</h4>
                  <p>
                    Price: {product.price}
                    <span className=" text-2xl font-extrabold text-orange-500 ">
                      ৳
                    </span>
                  </p>
                  <p>Category: {product.category}</p>
                </div>
                <div className=" px-4 flex flex-col justify-center ">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className=" bg-blue-600 hover:bg-blue-900 transition hover:duration-500 px-5 py-3 rounded-md text-white font-bold "
                  >
                    Add to Card
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;

// This also gets called at build time
export async function getServerSideProps() {
  // Fetch data from your API or database
  const res = await fetch(
    "https://pc-builder-server-knfxakjmw-tareqhasan382.vercel.app/products"
  );
  const products = await res.json();
  return { props: { products: products.data } };
}
