import React, { useEffect, useState } from "react";
import video from "../img/productad.mp4";
import axios from "axios";


const ProductPage = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/product")
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className="w-full bg-gray-100  flex flex-col ">
      {/* <main className="container mx-auto px-6 py-8"> */}
      <div className="bg-white rounded-md shadow-md  h-[489px] relative z-0 w-full">
        <video
          src={video}
          className="w-full h-[489px] object-cover rounded-md"
          autoPlay
          object-fill
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className=" w-full h-[100px] flex justify-center items-center text-5xl  font-medium font-serif text-black-600 text-neutral-900 ">
        Suggetion
      </div>
      {product.map((product, index) => (
      <div key={index} className="flex  mb-4">
        <div className="w-[300px] rounded-md border ml-4 hover:shadow-black hover:scale-105 duration-300 shadow-lg hover;shadow-3xl">
          <img
            src={product.img}
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold"> {product.productName}</h1>
            <p className="mt-3 text-sm text-gray-600">
            ₹{product.price}
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProductPage;
