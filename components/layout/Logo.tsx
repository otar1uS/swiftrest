"use client";
import React, { useState } from "react";
import logo1 from "../../public/assets/logo-1.svg";
import logo2 from "../../public/assets/logo-2.svg";
import Image from "next/image";

const Logo = () => {
  const [showLogos, setShowLogos] = useState(false);
  const [isSticked, setIsSticked] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowLogos(true);
      setTimeout(() => {
        setIsSticked(true);
      }, 500);
    }, 500);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsSticked(false);
      setTimeout(() => {
        setShowLogos(false);
      }, 500);
    }, 500);
  };

  return (
    <div
      className="relative w-[112px] h-[112px] flex justify-center items-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showLogos && (
        <div className={`flex items-center `}>
          <div
            className={`transform transition-transform 
            ${isSticked ? " duration-500" : "duration-[2500ms]"} ${
              isSticked ? "translate-x-0" : "-translate-x-8"
            }`}
          >
            <Image src={logo1} width={31} height={48} alt="logo" />
          </div>
          <div
            className={`transform translate-y-[7px] transition-transform ${
              isSticked ? " duration-500" : "duration-[2500ms]"
            } ${isSticked ? "-translate-x-[7px]" : "translate-x-8"}`}
          >
            <Image src={logo2} width={24} height={34} alt="logo" />
          </div>
        </div>
      )}
      <h1
        className={`transform transition-transform duration-1000 ${
          isSticked ? "hidden" : "block"
        } ${showLogos ? "translate-y-20 absolute top-10" : ""}`}
      >
        HOME
      </h1>
    </div>
  );
};

export default Logo;
