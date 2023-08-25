import Link from "next/link";
import Image from "next/image";
const HomePage = ({ data }) => {
  return (
    <div className=" pb-5">
      <div className="flex flex-col justify-center items-center my-5 mt-20 ">
        <h3 className=" font-bold text-xl ">Featured Products</h3>
        <p className=" my-1 text-xl "> Check & Get Your Desired Product!</p>
      </div>
      <div className=" flex flex-wrap gap-3 justify-center ">
        {data?.data?.map((item) => (
          <div
            key={item._id}
            className="w-80 my-5 border rounded-t-xl shadow-lg hover:shadow-gray-400 flex flex-col justify-between "
          >
            <div className=" h-1/2 object-cover  overflow-hidden ">
              <Image
                src={item.img_url}
                layout="responsive"
                alt="img"
                className="rounded-t-xl max-h-1/2 object-cover "
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
            <hr />
            <div className="mx-2 mb-2 h-1/2  ">
              <Link href={`product/${item._id}`}>
                <p className="my-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50 hover:text-blue-500 hover:underline ">
                  {item.title}
                </p>
              </Link>
              <p className="text-lg">
                price:
                <span className=" font-bold text-orange-700 ">
                  {item.price}
                </span>
                <span className="  font-extrabold ">৳ </span>
              </p>
              <p className=" text-lg">Model:{item.Model} </p>
              <p className="text-lg">Status:{item.Status} </p>
              <p className="text-lg">Rating:{item.Rating.length} </p>
              {/* <button className=" bg-green-500 hover:bg-green-700 transition duration-300 w-full px-3 py-1 rounded my-2 font-bold ">
                Details
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-wrap gap-3 justify-center "></div>
    </div>
  );
};

export default HomePage;
