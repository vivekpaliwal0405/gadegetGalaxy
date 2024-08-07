import React, { useEffect, useState } from 'react';
import { Heart, Share } from 'lucide-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function Singleproduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:4001/product/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('User not logged in');
      return;
    }

    const userId = JSON.parse(atob(token.split('.')[1])).id;
    axios.post('http://localhost:4001/cart', { userId, productId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(`Product with id ${productId} added to cart.`, response.data);
      setToastMessage('Added to cart');
      setIsProductAdded(true);
      setTimeout(() => {
        setIsProductAdded(false);
      }, 1000);
    })
    .catch(error => {
      console.error('Error adding product to cart:', error.response.data);
    });
  };


  const handleAddToWishlist = (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('User not logged in');
      return;
    }

    const userId = JSON.parse(atob(token.split('.')[1])).id;
    axios.post('http://localhost:4001/wishlist', { userId, productId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(`Product with id ${productId} added to wishlist.`, response.data);
      setToastMessage('Added to wishlist');
      setIsProductAdded(true);
      setTimeout(() => {
        setIsProductAdded(false);
      }, 1000);
    })
    .catch(error => {
      console.error('Error adding product to wishlist:', error.response.data);
    });
  };

  return (
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Product gallery 1"
                      src={product.img}
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>             
                </div>
               
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-3">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">{product.productName}</h2>
                <p className="mt-4 font-semibold">{product.price}</p>
              </div>
              <div className="pt-1 xl:pt-4">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                  {product.description}
                </p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    8 UK
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    9 UK
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    10 UK
                  </li>
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product._id)}
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add To Cart
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleAddToWishlist(product._id)}
                    className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <Heart size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Share size={16} className="mr-3" />
                      <span className="block">Share</span>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {isProductAdded && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            id="toast-simple"
            className="flex items-center p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
            role="alert"
          >
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
            <div className="pl-4 text-sm font-normal">{toastMessage}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Singleproduct;