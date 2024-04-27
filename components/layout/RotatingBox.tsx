import React from "react";
import { RxDoubleArrowDown as DoubleArrow } from "react-icons/rx";

const RotatingBox = () => {
  return (
    <div className="box-main cursor-pointer">
      <div className="arrow-container">
        <DoubleArrow className="arrow-1"></DoubleArrow>
        <DoubleArrow className="arrow-2"></DoubleArrow>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default RotatingBox;
