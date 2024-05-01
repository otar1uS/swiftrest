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
    <div className="relative  overflow-x-hidden w-full h-full">
      <Logo />
      <Home />

      <Services />
      <Contact />
    </div>
  );
};
export default App;
