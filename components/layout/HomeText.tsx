"use client";

import RotatingBox from "./RotatingBox";

export function HomeText() {
  return (
    <div className=" sm:w-1/3    flex-col flex justify-center gap-20 items-center">
      <h1 className="font-bold text-[16px] sm:text-[20px] text-white">
        Elevating Digital Excellence. We specialize in web design, development,
        UI/UX, and product design. Transform your online presence with our
        creative expertise.
      </h1>
      <RotatingBox />
    </div>
  );
}
