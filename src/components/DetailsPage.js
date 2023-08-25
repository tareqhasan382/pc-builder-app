import Image from "next/image";
import React from "react";

const DetailsPage = ({ post }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 ">
        <div className=" w-full md:w-1/2  ">
          <Image
            src={post.img_url}
            width={300}
            height={100}
            layout="responsive"
            alt="img"
            loading="lazy"
          />
        </div>
        <div className=" w-full md:w-1/2  ">
          <p className=" text-lg font-bold text-blue-500 ">{post.title}</p>
          <p className=" font-bold ">
            Price: {post.price}
            <span className=" text-2xl font-extrabold text-orange-500 ">৳</span>
          </p>
          <p className=" font-bold ">Status:{post.Status} </p>
          <p className=" font-bold ">Reviews:{post.reviews} </p>
          <div>
            <p className=" font-bold ">Key Features: </p>
            {post.features?.map((item, index) => (
              <div
                key={index}
                className=" pl-2 text-sm font-normal text-gray-600 "
              >
                <p>Brand:{item.brand} </p>
                <p>Color:{item.color} </p>
                <p>Model:{item.model} </p>

                <p>Resulation:{item.resulation}</p>
              </div>
            ))}
          </div>
          <p className=" font-bold ">Model:{post.Model} </p>
          <p className=" font-bold ">Category:{post.category} </p>
          <p className=" text-justify px-3 ">
            {" "}
            <span className=" text-lg font-bold ">Description:</span>
            {post.desc}
          </p>
          <div className=" px-5 ">
            <button className=" bg-green-500 hover:bg-green-700 transition duration-300 w-full py-1 rounded my-2 font-bold ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
