import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default AdminLayout;