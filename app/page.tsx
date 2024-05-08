"use client";
import React from "react";
import Home from "@/components/pages/Home";
import Services from "@/components/pages/Services";

import { Navbar } from "@/components/layout/navbar";
import Contact from "@/components/pages/Contact";
import Logo from "@/components/layout/Logo";
import About from "@/components/pages/About";
import Footer from "@/components/pages/Footer";
const App = () => {
  return (
    <div className="relative  overflow-x-hidden w-full h-full">
      <Navbar className="top-5 " />

      <Logo />
      <Home />

      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
