import axios from "axios";
import React from "react";

const Cart = () => {
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4001/product/" + id)
  //     .then((response) => setProduct(response.data))
  //     .catch((err) => console.log(err));
  // }, []);


  return (
    <div className="p-10">
      <div className="text-center uppercase mb-4">
        <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
      </div>

      <hr className="mt-4" />

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mt-8">
        <div className="lg:w-2/3 flex flex-col gap-8">
          <div className="py-8 flex flex-col gap-8">
            <div className="grid grid-cols-[0.4fr_1fr] items-center gap-4 capitalize text-left">
              <img src="product-image.jpg" alt="Product" className="w-20 h-20 object-contain" />
              <div>
                <p className="text-lg font-semibold">Product Name</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="w-4 h-4 rounded-full bg-red-500"></span>
                  <span>Red</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 text-lg">
              <button className="border-none bg-white cursor-pointer p-2 rounded">-</button>
              <span className="text-3xl text-blue-500">1</span>
              <button className="border-none bg-white cursor-pointer p-2 rounded">+</button>
            </div>

            <span className="text-2xl text-red-500 cursor-pointer">&times;</span>
          </div>

          <div className="flex justify-between items-center">
            <button className="bg-red-600 text-white py-2 px-4 rounded">Clear Cart</button>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col items-end">
          <div className="border border-gray-200 flex flex-col gap-6 p-8 w-full">
            <div className="flex justify-between gap-8">
              <p>Subtotal</p>
              <p>$99.99</p>
            </div>
            <div className="flex justify-between gap-8">
              <p>Tax</p>
              <p>$10.00</p>
            </div>
            <div className="flex justify-between gap-8 bg-gray-100 p-4">
              <p>Total</p>
              <p className="font-bold text-gray-900">$109.99</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
