import React from "react";
import { RxDoubleArrowDown as DoubleArrow } from "react-icons/rx";
import { Link } from "react-scroll";

const RotatingBox = () => {
  return (
    <Link
      to="SERVICES"
      smooth={true}
      duration={1000}
      className="box-main cursor-pointer"
    >
      <div className="arrow-container">
        <DoubleArrow className="arrow-1"></DoubleArrow>
        <DoubleArrow className="arrow-2"></DoubleArrow>
      </div>
      <div className="box"></div>
    </Link>
  );
};

export default RotatingBox;
