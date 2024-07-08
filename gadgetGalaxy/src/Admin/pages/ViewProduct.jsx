import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import { motion } from "framer-motion";

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
        setProduct(product.filter(product => product._id !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex-col">
        <header className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-700 to-indigo-700 shadow-lg">
          <h1 className="text-3xl font-bold text-white">Product Management</h1>
        </header>

        <main className="p-6 flex-1">
          <div className="flex flex-wrap -mx-4">
            {product.map((product, index) => (
              <motion.article 
                key={index} 
                className="max-w-sm w-full bg-white rounded-lg shadow-lg m-4 overflow-hidden transform transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className="object-cover h-48 w-full"
                  src={product.img}
                  alt="Product"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {product.productName}
                  </h2>
                  <p className="text-gray-600">
                    {product.category}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    ₹{product.price}
                  </p>
                </div>
                <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                  <Link to={`/Updateproduct/${product._id}`}>
                    <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                      <MdEdit className="mr-2" /> Edit
                    </button>
                  </Link>
                  <button 
                    className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300" 
                    onClick={() => handleDelete(product._id)}
                  >
                    <MdDelete className="mr-2" /> Delete
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ViewProduct;

