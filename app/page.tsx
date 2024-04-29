"use client";
import React from "react";
import Home from "@/components/pages/Home";
import Services from "@/components/pages/Services";
import { Vortex } from "@/components/ui/vortex";

const App = () => {
  return (
    <div className="w-full h-full ">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className=" w-full h-full overflow-y-hidden"
      >
        <Home />
      </Vortex>
      <Services />
    </div>
  );
};

export default App;
