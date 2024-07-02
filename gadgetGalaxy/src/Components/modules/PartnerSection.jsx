import React from "react";
import image1 from "../img/apple.png";
import image2 from "../img/haier.png";
import image3 from "../img/samsung.png";
import image4 from "../img/br-1.png";
import image5 from "../img/asus.png";

function PartnerSection() {
  return (
    <div className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-gray-700">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-8 place-items-center opacity-50">
          <img
            src={image1}
            alt="Apple logo"
            className="w-[80px] hover:scale-110 duration-300"
          />
          <img
            src={image2}
            alt="Haier logo"
            className="w-[80px] hover:scale-110 duration-300 "
          />
          <img
            src={image3}
            alt="Samsung logo"
            className="w-[80px] hover:scale-110 duration-300"
          />
          <img
            src={image4}
            alt="Brand logo 1"
            className="w-[80px] hover:scale-110 duration-300"
          />
          <img
            src={image5}
            alt="Asus logo"
            className="w-[80px] hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
