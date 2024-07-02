import React from "react";

const Cart = () => {
  return (
    <div className="p-10">
      
      <div className="text-center uppercase mb-4">
        <h1>Your Shopping Cart</h1>
      </div>
      
      <hr className="mt-4 " />
      
      <div className="py-8 flex flex-col gap-8 ml-5 mr-5">
        <div className="grid grid-cols-[0.4fr_1fr] items-center gap-4 capitalize text-left">
          <img src="product-image.jpg" alt="Product" className="w-20 h-20 object-contain" />
          <div>
            <p>Product Name</p>
            <div className="flex items-center gap-4">
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span>Red</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-6 text-lg">
          <button className="border-none bg-white cursor-pointer">-</button>
          <span className="text-3xl text-blue-500">1</span>
          <button className="border-none bg-white cursor-pointer">+</button>
        </div>
        
        <span className="text-2xl text-red-500 cursor-pointer">&times;</span>
      </div>
      
      <div className="mt-8 flex justify-between">
        <button className="bg-red-600 text-white py-2 px-4 rounded">Clear Cart</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Checkout</button>
      </div>
      
      <div className="w-full mt-12 capitalize flex flex-col items-end">
        <div className="border border-gray-200 flex flex-col gap-6 p-8">
          <div className="flex justify-between gap-8">
            <p>Subtotal</p>
            <p>$99.99</p>
          </div>
          <div className="flex justify-between gap-8">
            <p>Tax</p>
            <p>$10.00</p>
          </div>
          <div className="flex justify-between gap-8 bg-gray-100">
            <p>Total</p>
            <p className="font-bold text-gray-900">$109.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
