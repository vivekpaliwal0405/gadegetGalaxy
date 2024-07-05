// import React from "react";
// import Sidebar from "../layout/Sidebar";

// function AdminDashboard() {
//   return (
//     <div className="flex min-h-screen bg-white text-gray-700">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex-col ">
//         <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
//           <h1 className="text-xl font-bold">Admin Dashboard</h1>
//           {/* Add any header elements here */}
//         </div>

//         <div className="p-4 flex-1">
//           {/* Your main content goes here */}
//           <p>Main content area...</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React from "react";
import Sidebar from "../layout/Sidebar";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-white text-gray-700">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex-col bg-gray-50">
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200 bg-opacity-75 transition-all duration-300 ease-in-out hover:bg-gray-200">
          <h1 className="text-xl font-bold transition-transform transform hover:scale-105">Admin Dashboard</h1>
          {/* Add any header elements here */}
        </div>

        <div className="p-4 flex-1 transition-all duration-300 ease-in-out">
          {/* Your main content goes here */}
          <p className="transition-opacity duration-300 opacity-100 hover:opacity-75">
            Main content area...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
