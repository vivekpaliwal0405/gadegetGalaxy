import logo from "../img/gg.jpg";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import "../../App.css";
import Darkmode from "../modules/Darkmode";
import LoginIcon from "../modules/LoginIcon";
import Login from "../registration/Login";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/About",
  },
  {
    name: "Contact",
    href: "/Contact",
  },
  
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [isInputVisible, setInputVisible] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className="fixed top-0 z-10 w-full dark:bg-neutral-900 duration-200 shadow-md backdrop-filter backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img width="30" height="30" src={logo} alt="Logo" />
          </span>
          <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
            GadgetGalaxy
          </span>
        </div>

        <div className="hidden lg:block mt-2">
          <ul className=" inline-flex space-x-8 items-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="relative group">
              <button className="inline-flex items-center gap-1  px-2 text-sm text-gray-900 dark:text-gray-100 rounded-full font-semibold cursor-pointer shadow-xs transition-all duration-200 hover:text-blue-500 dark:hover:text-blue-400">
                Dropdown Hover
              </button>
              <div className="dropdown-menu absolute top-full left-0 w-48  hidden group-hover:block   dark:bg-neutral-900 rounded-md shadow-lg">
                <ul className="py-1">
                  <li>
                    <Link className="block px-4 py-2 text-gray-900 dark:text-gray-100  hover:bg-gray-100 dark:hover:bg-gray-700" to="/Product">All Product</Link>
                  </li>

                  <li>
                    <a
                      className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                      href="/Discount"
                    >
                      Discount
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                      href="/"
                    >
                      Hot's
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <input
              className={`search-bar transition-all duration-300 ${
                isInputVisible
                  ? "w-96 opacity-100 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  : "w-0 opacity-0"
              }`}
              type="text"
              placeholder="Search"
            />
            <IoMdSearch
              className="text-xl text-gray-600 group-hover:text-blue-500 dark:text-gray-400 cursor-pointer ml-2 absolute top-1/2 transform -translate-y-1/2 right-3 duration-200"
              onClick={toggleInputVisibility}
            />
          </div>

          <Link to="/cart" className="relative">
            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              4
            </div>
          </Link>

          <Darkmode />
          <LoginIcon />

          <div className="ml-2 lg:hidden">
            <Menu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer text-gray-900 dark:text-gray-100"
            />{" "}
            
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 mt-14 bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 lg:hidden">
            <div className="divide-y-2 divide-gray-50 dark:divide-gray-700 rounded-lg">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img width="30" height="30" src={logo} alt="Logo" />
                    </span>
                    <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
                      GadgetGalaxy
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <nav className="mt-6 grid gap-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
