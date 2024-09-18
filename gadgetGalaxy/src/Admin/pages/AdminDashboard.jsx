import React, { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import './AdminDashboard.css';
import { BackgroundBeams } from "./BackgroundBerams.jsx";

function AdminDashboard() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/product")
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-700">
      {/* Sidebar */}
      <Sidebar />
    <div className="relative h-screen w-full"> {/* Ensure this div is relative */}
      {/* Insert the BackgroundBeams component */}
      <BackgroundBeams className="z-0" />
      
      {/* Main Content */}
      <div className="flex-1 flex-col bg-gray-50 relative z-10 bg-opacity-90 backdrop-blur-lg">
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 border-b border-gray-200 bg-opacity-75 transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-lg">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-transform transform hover:scale-110">
            Admin Dashboard
          </h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              Notifications
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              Profile
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 transition-all duration-300 ease-in-out">
          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.map((product, index) => (
              <div key={index} className="card relative">
                {/* Product Image */}
                <img
                  className="img"
                  src={product.img}
                  alt={product.productName}
                />
                <div className="textBox absolute">
                  <p className="text head">{product.productName}</p>
                  <span>{product.category}</span>
                  <p className="text price">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
