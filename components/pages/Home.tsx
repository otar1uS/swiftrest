"use client";
import React from "react";
import Logo from "../layout/Logo";
import { HomePageTexts } from "../texts";
import { BsArrowDown } from "react-icons/bs";
import { NameOfTheWebsite } from "../layout/name";
import { HomeText } from "../layout/HomeText";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <div className="flex flex-col gap-20">
        <div></div>
        <div className="max-w-[1600px] h-[300px] flex mx-auto">
          <div className="w-2/3 h-[300px]  flex items-start justify-around flex-col">
            {HomePageTexts.map((t) => {
              return (
                <div
                  className="  hover:scale-125 parent-div relative w-4/5  overflow-hidden text-white hover:text-black  cursor-pointer  text-[60px] md:text-[80px] 3xl:text-[120px]  font-bold leading-[0.8] duration-1000  transition-all "
                  key={t.id}
                >
                  <h1 className="z-10 relative">{t.text}</h1>
                  <div className="background-fill absolute top-0 left-0 h-full z-0 w-0  bg-green-600     duration-1000 transition-all " />
                  <BsArrowDown
                    size={48}
                    className=" absolute  hidden  arrow-icon    z-20    text-black  "
                  />
                </div>
              );
            })}
          </div>
          <HomeText />
        </div>
      </div>

      <h1 className="w-[1152px] h-60 mx-auto  font-bold text-[200px] text-center">
        <NameOfTheWebsite />
      </h1>
    </div>
  );
};

export default Home;
