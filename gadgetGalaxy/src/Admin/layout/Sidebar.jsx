import React from "react";
import {
  FaHome,
  FaEye ,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdOutlineInventory2, MdQueryStats } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import image from "../../Components/img/gg.jpg"

const App = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="w-64 bg-black">
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-gray-300 rounded-md">
              <img src={image} alt="logo" />
            </div>
            <div>
              <div className="text-lg font-bold">GadgetGalaxy</div>
            </div>
          </div>
        </header>

        <nav className="mt-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="group">
                <Link
                  to={item.link}
                  className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-300"
                >
                  <item.icon className="h-6 w-6 text-white" />
                  <span className="text-white">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const menuItems = [
  { label: "Dashboard", link: "/Admindashboard", icon: FaHome },
  { label: "Add Products", link: "/Addproduct", icon: MdOutlineInventory2 },
  { label: "View Product", link: "/Viewproduct", icon: FaEye  },
  { label: "Add Category", link: "/Addcategory", icon: TbCategory  },
  { label: "Querys", link: "/Coustomerquery", icon: MdQueryStats },
  { label: "Orders", link: "/CoustomerOrderpage", icon: FaBoxOpen },
  { label: "Logout", link: "/Adminlogin", icon: FaSignOutAlt },
];

export default App;
