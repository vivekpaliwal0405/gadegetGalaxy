import React from "react";
import { FaCheckCircle, FaHeadphonesAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

function Services() {
  const ServiceData = [
    {
      id: 1,
      icon: <TbTruckDelivery className="text-4xl md:text-5xl text-red-500" />,
      title: "Free Shipping",
      description: "Free Shipping On All Orders",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-4xl md:text-5xl text-red-500" />,
      title: "Safe Money",
      description: "30 Days Money Back",
    },
    {
      id: 3,
      icon: <FaWallet className="text-4xl md:text-5xl text-red-500" />,
      title: "Secure Payment",
      description: "All Payments Secure",
    },
    {
      id: 4,
      icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-red-500" />,
      title: "Online Support",
      description: "Available 24/7",
    },
  ];

  return (
    <div className="py-8 dark:bg-neutral-900 duration-200">
      <div className="container">
        <div className="p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 ">
            {ServiceData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col items-center sm:flex-row gap-4 p-4 hover:scale-110 duration-300  dark:bg-black rounded-lg shadow dark:shadow-lg-dark"
              >
                {data.icon}
                <div className="">
                  <h1 className="text-xl font-semibold  dark:text-white">
                    {data.title}
                  </h1>
                  <h2 className="text-gray-600  dark:text-gray-300">
                    {data.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
