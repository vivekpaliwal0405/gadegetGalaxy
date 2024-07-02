import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Login from "../registration/Login";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="mt-14">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
