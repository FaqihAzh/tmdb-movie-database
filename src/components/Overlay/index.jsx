import React from "react";

const Overlay = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
    </>
  );
};

export default Overlay;
