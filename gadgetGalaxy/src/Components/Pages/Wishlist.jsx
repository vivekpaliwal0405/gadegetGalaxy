import React from 'react';
import image from '../img/sliderrr.jpg';
import { FaHeart } from 'react-icons/fa';

function Wishlist() {
  const productName = "Product Name"; // You can replace this with a dynamic value if needed

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Wishlist</h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover relative z-0 rounded-lg"
              />
              <div className="absolute top-2 right-2">
                <FaHeart className="text-white text-2xl" />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                {productName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
