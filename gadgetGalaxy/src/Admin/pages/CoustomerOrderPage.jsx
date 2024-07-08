import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../layout/Sidebar';
import { MdDelete, MdEdit } from 'react-icons/md';

function CoustomerOrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/orders")
      .then(response => setOrders(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:4001/orders/' + id)
      .then(res => {
        console.log(res);
        setOrders(orders.filter(order => order._id !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-black text-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex-col">
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-800 to-red-600 shadow-xl">
          <h1 className="text-4xl font-bold text-white tracking-widest">Orders Management</h1>
        </div>

        <div className="p-6 flex-1">
          {/* Main content */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200 bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-1/12">Order ID</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-2/12">Customer Name</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-2/12">Product</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-1/12">Quantity</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-1/12">Price</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-2/12">Order Date</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-2/12">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition-colors duration-300">
                    <td className="px-4 py-2 border-b border-gray-600">{order.orderId}</td>
                    <td className="px-4 py-2 border-b border-gray-600">{order.customerName}</td>
                    <td className="px-4 py-2 border-b border-gray-600">{order.product}</td>
                    <td className="px-4 py-2 border-b border-gray-600">{order.quantity}</td>
                    <td className="px-4 py-2 border-b border-gray-600">₹{order.price}</td>
                    <td className="px-4 py-2 border-b border-gray-600">{order.orderDate}</td>
                    <td className="px-4 py-2 border-b border-gray-600">
                      <div className="flex space-x-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded transition-colors duration-300 shadow-md"><MdEdit /></button>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded transition-colors duration-300 shadow-md" onClick={() => handleDelete(order._id)}><MdDelete /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoustomerOrderPage;
