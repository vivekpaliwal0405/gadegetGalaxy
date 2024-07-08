// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Sidebar from '../layout/Sidebar';
// import { MdDelete } from 'react-icons/md';

// function CustomerQuery() {
//   const [contact, setContact] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:4001/contact")
//       .then(response => setContact(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete('http://localhost:4001/contact/' + id)
//       .then(res => {
//         console.log(res);
//         // Optionally remove the deleted contact from the state to update the UI
//         setContact(contact.filter(contact => contact._id !== id));
//       })
//       .catch(err => console.log(err));
//   }

//   return (
//     <>
//       <div
//         className="flex min-h-screen text-gray-700"
//         style={{
//           backgroundImage: "url('')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <div className="flex-1 flex-col bg-white bg-opacity-70">
//           <div className="flex justify-between items-center p-4 bg-neutral-800 border-b border-gray-200">
//             <h1 className="text-xl font-bold text-white">Coustomer Query</h1>
//           </div>

//           <div className="p-4 flex-1">
//             {/* Your main content goes here */}
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto border-collapse border border-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="px-2 py-2 bg-gray-100 border-b border-gray-200 w-1/12">First Name</th>
//                     <th className="px-2 py-2 bg-gray-100 border-b border-gray-200 w-1/12">Last Name</th>
//                     <th className="px-2 py-2 bg-gray-100 border-b border-gray-200 w-2/12">E-mail</th>
//                     <th className="px-2 py-2 bg-gray-100 border-b border-gray-200 w-1/12">Phone Number</th>
//                     <th className="px-4 py-2 bg-gray-100 border-b border-gray-200 w-5/12">Message</th>
//                     <th className="px-2 py-2 bg-gray-100 border-b border-gray-200 w-2/12">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {contact.map((contact, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="px-2 py-2 border-b border-gray-200">{contact.firstName}</td>
//                       <td className="px-2 py-2 border-b border-gray-200">{contact.lastName}</td>
//                       <td className="px-2 py-2 border-b border-gray-200">{contact.email}</td>
//                       <td className="px-2 py-2 border-b border-gray-200">{contact.mobile}</td>
//                       <td className="px-4 py-2 border-b border-gray-200">
//                         <div className="max-h-20 overflow-hidden text-ellipsis">
//                           {contact.message}
//                         </div>
//                       </td>
//                       <td className="px-2 py-2 border-b border-gray-200">
//                         {/* Add action buttons or links here */}
//                         <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-2 rounded ml-2" onClick={() => handleDelete(contact._id)}><MdDelete /></button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CustomerQuery;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../layout/Sidebar';
import { MdDelete } from 'react-icons/md';

function CustomerQuery() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/contact")
      .then(response => setContact(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:4001/contact/' + id)
      .then(res => {
        console.log(res);
        // Optionally remove the deleted contact from the state to update the UI
        setContact(contact.filter(contact => contact._id !== id));
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
          <h1 className="text-4xl font-bold text-white tracking-widest">Customer Query</h1>
        </div>

        <div className="p-6 flex-1">
          {/* Main content */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200 bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-1/12">First Name</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-1/12">Last Name</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-2/12">E-mail</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-1/12">Phone Number</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-5/12">Message</th>
                  <th className="px-4 py-2 bg-gray-700 border-b border-gray-600 w-2/12">Action</th>
                </tr>
              </thead>
              <tbody>
                {contact.map((contact, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition-colors duration-300">
                    <td className="px-4 py-2 border-b border-gray-600">{contact.firstName}</td>
                    <td className="px-4 py-2 border-b border-gray-600">{contact.lastName}</td>
                    <td className="px-4 py-2 border-b border-gray-600">{contact.email}</td>
                    <td className="px-4 py-2 border-b border-gray-600">{contact.mobile}</td>
                    <td className="px-4 py-2 border-b border-gray-600">
                      <div className="max-h-20 overflow-hidden text-ellipsis">
                        {contact.message}
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-gray-600">
                      {/* Add action buttons or links here */}
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded transition-colors duration-300 shadow-md" onClick={() => handleDelete(contact._id)}><MdDelete /></button>
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

export default CustomerQuery;

