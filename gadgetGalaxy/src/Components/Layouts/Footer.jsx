import { ChevronRight } from 'lucide-react';
import React from 'react';
import logo from '../img/gg.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full dark:bg-neutral-900 py-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:space-x-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold dark:text-white">
              Subscribe to our Newsletter
            </h1>
            <form className="mt-4 inline-flex w-full items-center">
              <input
                className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                type="email"
                placeholder="Email"
              />
              <button
                type="button"
                className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 flex flex-wrap justify-between dark:text-white">
            <div className="w-full p-6 md:w-1/3">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase dark:hover:text-red-600 duration-75 ">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/3">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase dark:hover:text-red-600 duration-75">Support</h3>
                <ul>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/3 dark:text-white">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase dark:hover:text-red-600 duration-75">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-base font-medium text-gray-900 dark:text-white dark:hover:text-gray-700 duration-75" to="/">
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 lg:px-0">
        <div className="inline-flex items-center">
          <img width="30" height="30" src={logo} alt="Logo" />
          <span className="ml-4 text-lg font-bold dark:text-white">
            GadgetGalaxy
          </span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© 2024 GadgetGalaxy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
