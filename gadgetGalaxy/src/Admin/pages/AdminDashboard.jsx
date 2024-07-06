import React from "react";
import Sidebar from "../layout/Sidebar";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-700">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex-col bg-gray-50 bg-opacity-90 backdrop-blur-lg">
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 border-b border-gray-200 bg-opacity-75 transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-lg">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-transform transform hover:scale-110">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">Notifications</button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">Profile</button>
          </div>
        </div>

        <div className="p-4 flex-1 transition-all duration-300 ease-in-out">
          {/* Add dashboard sections here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Section 1: Recent Orders */}
            <div className="bg-white bg-opacity-75 p-6 shadow-xl rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-100 hover:shadow-2xl">
              <h2 className="text-xl font-semibold mb-4 text-purple-600">Recent Orders</h2>
              <ul className="space-y-4">
                <li className="p-3 bg-purple-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-200">Order #1234</li>
                <li className="p-3 bg-purple-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-200">Order #1235</li>
                <li className="p-3 bg-purple-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-200">Order #1236</li>
              </ul>
            </div>

            {/* Section 2: User Management */}
            <div className="bg-white bg-opacity-75 p-6 shadow-xl rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-100 hover:shadow-2xl">
              <h2 className="text-xl font-semibold mb-4 text-green-600">User Management</h2>
              <ul className="space-y-4">
                <li className="p-3 bg-green-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-200">User #001</li>
                <li className="p-3 bg-green-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-200">User #002</li>
                <li className="p-3 bg-green-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-200">User #003</li>
              </ul>
            </div>

            {/* Section 3: Analytics */}
            <div className="bg-white bg-opacity-75 p-6 shadow-xl rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-100 hover:shadow-2xl">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">Analytics</h2>
              <div className="p-3 bg-blue-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-200">
                <p className="mb-2">Total Sales: <span className="font-bold">$1234</span></p>
                <p className="mb-2">Total Users: <span className="font-bold">56</span></p>
                <p>New Users: <span className="font-bold">5</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
