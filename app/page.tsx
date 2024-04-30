"use client";
import React from "react";
import Home from "@/components/pages/Home";
import Services from "@/components/pages/Services";
import { Vortex } from "@/components/ui/vortex";
import { Navbar } from "@/components/layout/navbar";
import Contact from "@/components/pages/Contact";
import Logo from "@/components/layout/Logo";

const App = () => {
  return (
    <div className="relative overflow-hidden w-full h-full ">
      <Logo />
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className=" w-full h-full overflow-y-hidden"
      >
        <Navbar className="top-5 " />

        <Home />
      </Vortex>

      <Services />
      <Contact />
    </div>
  );
};

export default App;
