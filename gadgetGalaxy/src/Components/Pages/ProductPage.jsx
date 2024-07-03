import React, { useEffect, useState, useRef } from "react";
import video from "../img/productad.mp4";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const videoRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:4001/product")
      .then((response) => {
        setProduct(response.data);
        const uniqueCategories = ["All", ...new Set(response.data.map(item => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };




  const handleSinglePage = (id) => {
    axios.get('http://localhost:4001/product/' + id)
      .then(res => {
        console.log(res);
        // Optionally remove the deleted product from the state to update the UI
        setProduct(product.filter(product => product._id !== id));
      })
      .catch(err => console.log(err));

      // if (res.ok) {
      //   Navigate('/Singleproduct/:id');
      // } else {
      //   console.log('Error updating product');
      // }
  }




  const filteredProducts = selectedCategory === "All" 
    ? product 
    : product.filter(item => item.category === selectedCategory);

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
          object-fill
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
                onClick={() => handleCategoryClick(category)}
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
                    // onClick={() => handleSinglePage(product._id)}
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
