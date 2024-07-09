
import React, { useEffect, useState, useRef } from "react";
import video from "../img/productad.mp4";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isProductAdded, setIsProductAdded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4001/product")
      .then((response) => {
        setProducts(response.data);
        const uniqueCategories = ["All", ...new Set(response.data.map((item) => item.category))];
        setCategories(uniqueCategories);

        const category = new URLSearchParams(location.search).get("category");
        if (category) {
          setSelectedCategory(category);
        }
      })
      .catch((err) => console.log(err));
  }, [location.search]);

  useEffect(() => {
    if (selectedCategory === "All") {
      navigate("/Product");
    } else {
      navigate(`/Product?category=${selectedCategory}`);
    }
  }, [selectedCategory, navigate]);

  const handleSinglePage = (id) => {
    navigate(`/Singleproduct/${id}`);
  };

  const handleAddToCart = (productId) => {
    const token = localStorage.getItem('token'); // Assuming token contains user ID information
    if (!token) {
      console.log('User not logged in');
      return;
    }

    const userId = JSON.parse(atob(token.split('.')[1])).id; // Extract user ID from JWT token
    axios.post('http://localhost:4001/cart', { userId, productId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(`Product with id ${productId} added to cart.`, response.data);
      setIsProductAdded(true); // Update the state here
      setTimeout(() => {
        setIsProductAdded(false); // Reset the state after 2 seconds
      }, 500);
    })
    .catch(error => {
      console.error('Error adding product to cart:', error.response.data);
    });
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center">
      <div className="bg-white rounded-md shadow-md h-[489px] relative z-0 w-full">
        <video
          ref={videoRef}
          src={video}
          className="w-full h-[489px] object-cover rounded-md"
          autoPlay
          loop
          muted
          objectFill
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full flex">
        <div className="w-1/5 bg-gray-200 py-4 px-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="flex flex-col">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-4 py-2 mb-2 rounded-md hover:bg-gray-300 ${
                  selectedCategory === category ? "bg-gray-300" : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="w-4/5 flex flex-col items-center">
          <h2 className="text-2xl font-semibold my-4">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>

          <div className="w-full flex flex-wrap justify-center">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="w-[300px] rounded-md border ml-4 hover:shadow-black hover:scale-105 duration-300 shadow-lg m-4 relative cursor-pointer"
                onClick={(e) => {
                  if (!e.target.closest("button")) {
                    handleSinglePage(product._id);
                  }
                }}
              >
                <img
                  src={product.img}
                  alt="productpic"
                  className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-50 backdrop-blur-sm text-xs text-black px-2 py-1 rounded-md">
                  {product.category}
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{product.productName}</h1>
                  <p className="mt-3 text-sm text-gray-600">₹{product.price}</p>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product._id)}
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
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
            <div className="pl-4 text-sm font-normal">Added to cart</div>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
