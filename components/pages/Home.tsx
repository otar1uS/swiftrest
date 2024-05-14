"use client";
import React from "react";

import { HomePageTexts } from "../texts";
import { BsArrowDown } from "react-icons/bs";
import { NameOfTheWebsite } from "../layout/name";
import { HomeText } from "../layout/HomeText";

import { Vortex } from "../ui/vortex";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="relative z-10 w-full h-screen" id="HOME">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="w-full h-full overflow-y-hidden"
      >
        <div className="min-h-screen w-full flex flex-col justify-between">
          <div className="flex flex-col gap-20">
            <div></div>
            <div className="max-w-[1600px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-around">
                <div className="w-full  sm:w-2/3 flex items-start justify-around flex-col">
                  {HomePageTexts.map((t) => {
                    return (
                      <Link
                        className="relative w-full  sm:w-4/5 parent-div overflow-hidden text-white hover:text-black cursor-pointer text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.8] duration-1000 transition-all hover:scale-105"
                        key={t.id}
                        to={t.text}
                        smooth={true}
                        duration={1000}
                      >
                        <h1 className="z-10 relative ">{t.text}</h1>
                        <div className="background-fill absolute top-0 left-0 h-full z-0 w-0  bg-green-600     duration-1000 transition-all " />
                        <BsArrowDown className=" absolute w-[30px] h-[30px] sm:w-[48px] sm:h-[48px]  hidden  arrow-icon    z-20    text-black  " />
                      </Link>
                    );
                  })}
                </div>
                <HomeText />
              </div>
            </div>
          </div>
          <h1 className="w-full mx-auto py-8 px-4 sm:px-6 lg:px-8 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
            <NameOfTheWebsite />
          </h1>
        </div>
      </Vortex>
    </div>
  );
};

export default Home;
