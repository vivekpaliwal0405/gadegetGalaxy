import React from 'react'
import Sidebar from "../layout/Sidebar";
import image from '../../Components/img/bg.jpg'

function AddCategory() {
  return (
    <div className="flex min-h-screen  text-gray-700">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex-col relative" style={{ height: '100vh' }}>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }} />
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200 bg-opacity-75 transition-all duration-300 ease-in-out hover:bg-gray-200">
          <h1 className="text-xl font-bold transition-transform transform hover:scale-105">Admin Dashboard</h1>
          {/* Add any header elements here */}
        </div>

        <div className="p-4 flex-1">
          <div className="max-w-md mx-auto">
            <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4 backdrop-filter backdrop-blur-lg bg-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105">
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2 transition-colors duration-300 ease-in-out hover:text-gray-300" htmlFor="category">
                  Category
                </label>
                <input className="shadow appearance-none w-96 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out transform hover:scale-105" id="category" type="text" placeholder="Enter category" />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out transform hover:scale-105" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
