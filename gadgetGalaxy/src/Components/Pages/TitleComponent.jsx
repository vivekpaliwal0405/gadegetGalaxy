import React from "react";

const TitleComponent = ({ firstHeading, secondHeading, ...props }) => {
  return (
    <div {...props}>
      <div className="scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-6xl">
        {firstHeading}
      </div>
      <div className="scroll-m-20 text-6xl font-bold tracking-tight">
        {secondHeading}
      </div>
    </div>
  );
};

export default TitleComponent;
