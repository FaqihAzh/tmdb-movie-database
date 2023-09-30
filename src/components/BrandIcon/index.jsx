import React from "react";
import Button from "../Button";

export const BrandIcon = () => {
  return (
    <Button type="link" href="/">
      <div>
        <span className="font-bold text-[#e90b0bec] text-3xl">Movie</span>
        <span className="font-bold text-[#ff0000ec] text-3xl">List.</span>
      </div>
    </Button>
  );
};
