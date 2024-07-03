import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";

function ViewProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/product")
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:4001/product/' + id)
      .then(res => {
        console.log(res);
        // Optionally remove the deleted product from the state to update the UI
        setProduct(product.filter(product => product._id !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="flex min-h-screen bg-neutral-800 text-gray-700">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex-col ">
          <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
            <h1 className="text-xl font-bold">View Product</h1>
            {/* Add any header elements here */}
          </div>

          <div className="p-4 flex-1">
            {/* Your main content goes here */}
            <div className="flex flex-wrap -mx-2">
              {product.map((product, index) => (
                <article key={index} className="max-w-sm w-full bg-white rounded-lg shadow-lg m-2 overflow-hidden dark:bg-gray-700 hover:scale-105 duration-300">
                  <div>
                    <img
                      className="object-cover h-44 w-full"
                      src={product.img}
                      alt="Product"
                    />
                  </div>

                  <div className="flex flex-col gap-1 mt-4 px-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                      {product.productName}
                    </h2>
                    <span className="font-normal text-gray-600 dark:text-gray-300">
                      {product.category}
                    </span>
                    <span className="font-semibold text-gray-800 dark:text-gray-50">
                      ₹{product.price}
                    </span>
                  </div>
                  <div className="mt-2 p-3 border-t border-gray-200 dark:border-gray-500">
                    <div className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                      <span className="text-base">
                        <Link to = {`/Updateproduct/${product._id}`}>
                          <button className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-2 rounded ml-2">
                            <MdEdit />
                          </button>
                        </Link>
                      </span>
                      <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-2 rounded ml-2" onClick={() => handleDelete(product._id)}><MdDelete /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
