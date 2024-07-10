import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { FaHeart } from 'react-icons/fa';
import {  Link, useNavigate } from 'react-router-dom';

function Wishlist() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlistData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate("/SignUp");
        return;
      }

      const userId = JSON.parse(atob(token.split('.')[1])).id;

      try {
        const response = await axios.get(`http://localhost:4001/wishlist/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProducts(response.data.items);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWishlistData();
  }, [navigate]);

const handleRemove = async (productId)=>{
  const token = localStorage.getItem('token');
    if (!token) {
      setError('User not logged in');
      return;
    }

    const userId = JSON.parse(atob(token.split('.')[1])).id;

    try {
      await axios.delete(`http://localhost:4001/wishlist/${userId}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const updatedProducts = products.filter(product => product.productId._id !== productId);
      setProducts(updatedProducts);
    } catch (err) {
      setError(err.message);
    }
}

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Wishlist</h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
                  <div key={product.productId._id}>
            <div className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <Link to={`/Singleproduct/${product.productId._id}`} className="font-semibold text-black">               
              <img
                src={product.productId.img}
                alt="prorduct"
                className="w-full h-full object-cover relative z-0 rounded-lg"
              />
              </Link>
              <button  onClick={() => handleRemove(product.productId._id)} className="absolute top-2 right-2">
                <FaHeart className="text-white text-2xl" />
              </button>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
              {product.productId.productName}
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
