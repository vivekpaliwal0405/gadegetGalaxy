import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const { state } = location;
  const { products } = state || {};

  if (!products) {
    return <div>No products found.</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Order Successful!
        </h1>
        <p className="text-lg text-gray-600">
          Your order has been successfully placed. Below are the products you purchased:
        </p>
        <ul className="divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product.productId._id} className="flex py-6 sm:py-6">
              <div className="flex-shrink-0">
              <Link to={`/Singleproduct/${product.productId._id}`} className="font-semibold text-black">        
                <img
                  src={product.productId.img}
                  alt={product.productId.productName}
                  className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                />
                </Link>
              </div>
              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <h3 className="text-sm">
                      <Link to={`/Singleproduct/${product.productId._id}`} className="font-semibold text-black">
                        {product.productId.productName}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderSuccess;
