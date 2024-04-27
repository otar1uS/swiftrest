"use client";
import React from "react";
import Logo from "../layout/Logo";
import { HomePageTexts } from "../texts";
import { BsArrowDown } from "react-icons/bs";
import RotatingBox from "../layout/RotatingBox";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <div className="flex flex-col gap-20">
        <div className="flex justify-between items-center mt-12 mx-12">
          <Logo />
          <h1 className="cursor-pointer scale-100 duration-500 hover:scale-125 hover:text-green-600">
            +995595111111111
          </h1>
        </div>
        <div className="w-[1000px] h-[300px] flex mx-auto">
          <div className="w-2/3 h-[300px]  flex items-start justify-around flex-col">
            {HomePageTexts.map((t) => {
              return (
                <div
                  className="hover:text-[100px] parent-div relative w-4/5  overflow-hidden hover:text-white  cursor-pointer  text-[80px] font-bold leading-[0.8] duration-1000  transition-all "
                  key={t.id}
                >
                  <h1 className="z-10 relative">{t.text}</h1>
                  <div className="background-fill absolute top-0 left-0 h-full z-0 w-0  bg-[red]   duration-1000 transition-all " />
                  <BsArrowDown
                    size={48}
                    className=" absolute  hidden  arrow-icon    z-20    text-white  "
                  />
                </div>
              );
            })}
          </div>
          <div className="w-1/3 h-[300px] flex-col flex justify-center gap-4 items-center">
            <h1 className="text-[24px] ">
              Elevating Digital Excellence. <br /> We specialize in web design,
              development, UI/UX, and product design. Transform your online
              presence with our creative expertise.
            </h1>
            <RotatingBox />
          </div>
        </div>
      </div>
      <h1 className="w-[1152px] h-60 mx-auto text-[red] font-bold text-[200px] text-center">
        SWIFTREST
      </h1>
    </div>
  );
};

export default Home;
