import Link from "next/link";
import { useProductContext } from "../../app/context/ProductContext ";
import { useRouter } from "next/router";
import Head from "next/head";
const PcBuilder = () => {
  const router = useRouter();
  const categories = [
    "CPU",
    "Storage",
    "RAM",
    "Monitor",
    "Motherboard",
    "Power Supply",
  ];
  const { setSelectedCategory, cart } = useProductContext();
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const isButtonDisabled = cart.length !== 6;
  const checkOut = () => {
    router.push("/cart/");
  };
  return (
    <>
      <Head>
        <title>PC BUILDER</title>
        <meta name="PC Builder page" />
      </Head>
      <div className=" mx-10 py-24 flex ">
        <div className=" px-10 flex flex-col h-screen w-screen border-solid border-2 border-sky-500 bg-gray-100 ">
          <div className=" flex justify-center ">
            <h3 className=" font-bold pb-5 ">
              PC Builder - Build Your Own Computer - Star Tech
            </h3>
          </div>
          <span className=" h-1 w-full rounded-full bg-black my-3 "></span>
          <div>
            {categories.map((category) => (
              <div key={category}>
                {/* =========== */}
                <div className=" flex justify-between my-2 ">
                  <div>
                    <h3>{category}</h3>
                  </div>
                  <div>
                    {cart.map((item) =>
                      category === item.category ? (
                        <p
                          key={item}
                          className=" text-pink-500 px-2 font-bold "
                        >
                          {item.category}{" "}
                        </p>
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  <div>
                    <Link href="/pcBuilder">
                      <button
                        className={`border-solid border-2 border-sky-500 rounded font-bold hover:bg-sky-500 hover:text-white hover:transition hover:duration-700 py-2 px-5 ${
                          cart.some((item) => category === item.category)
                            ? "cursor-not-allowed"
                            : ""
                        }`}
                        onClick={() => handleCategorySelect(category)}
                        disabled={cart.some(
                          (item) => category === item.category
                        )}
                      >
                        Choose
                      </button>
                    </Link>
                  </div>
                </div>
                {/* =========== */}
                <hr />
              </div>
            ))}
          </div>
          <div
            className={`${
              isButtonDisabled
                ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                : "bg-green-500 text-white cursor-pointer"
            } justify-center text-center font-bold text-lg rounded-lg py-2 mt-5`}
          >
            <button disabled={isButtonDisabled} onClick={checkOut}>
              Completed
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default PcBuilder;
