import React from "react";
import video from "../img/ad1.mp4";

function Videoad() {
  return (
    <>
      <div className="bg-black videosize py-8 shadow-lg w-full h-screen dark:bg-black flex items-center justify-center relative">
        <video
          controls
          autoPlay
          loop
          muted
          className="w-full object-cover absolute top-0 bg-black"
          src={video}
          type="video/mp4"
        ></video>
      </div>
    </>
  );
}

export default Videoad;
