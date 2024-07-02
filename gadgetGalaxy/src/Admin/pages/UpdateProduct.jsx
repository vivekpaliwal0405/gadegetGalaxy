import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import image from '../../Components/img/addproduct.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
  const { id } = useParams();
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4001/product/${id}`)
      .then((response) => {
        const product = response.data;
        setProductName(product.productName);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setPhoto(product.photo);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!photo) {
        alert('Please select a file first!');
        return;
      }

      const formData = new FormData();
      formData.append('img', photo);
      formData.append('productName', productName);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('description', description);

      const response = await fetch(`http://localhost:4001/product/${id}`, {
        method: 'PUT',
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        setProductName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setPhoto('');
        navigate('/Viewproduct');
      } else {
        console.log('Error updating product');
      }
    } catch (error) {
      console.log('register', error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex-col " style={{ backgroundImage: `url(${image})` }}>
        <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
          <h1 className="text-xl font-bold">Update Product</h1>
        </div>
        <div className="p-4 flex-1">
          <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-300">Update Product</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-400">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-400">
                  Description
                </label>
                <textarea
                  id="description"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-400">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-400">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-gray-400">
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  <label
                    htmlFor="upload-button"
                    className="cursor-pointer bg-gray-700 rounded-md py-2 px-3 border border-gray-600 shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    Upload Photo
                  </label>
                  <input
                    id="upload-button"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                    name="img"
                    required
                  />
                  <span className="ml-2 text-gray-500">{photo ? photo.name : 'No file chosen'}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
