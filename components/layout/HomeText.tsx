"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import RotatingBox from "./RotatingBox";

const words = ` Elevating Digital Excellence. We specialize in web design,
development, UI/UX, and product design. Transform your online presence
with our creative expertise.`;

export function HomeText() {
  return (
    <div className=" sm:w-1/3    flex-col flex justify-center gap-20 items-center">
      <TextGenerateEffect words={words} />
      <RotatingBox />
    </div>
  );
}
