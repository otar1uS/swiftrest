"use client";
import React from "react";
import Home from "@/components/pages/Home";
import Services from "@/components/pages/Services";

import { Navbar } from "@/components/layout/navbar";
import Contact from "@/components/pages/Contact";
import Logo from "@/components/layout/Logo";
import About from "@/components/pages/About";
import Footer from "@/components/pages/Footer";
import LanguageChanger from "@/components/layout/LangaugeChange";
import { TranslationProvider } from "@/components/context/TranslateState";

const App = () => {
  return (
    <div className="relative  overflow-x-hidden w-full h-full">
      <TranslationProvider>
        <Navbar />

        <Logo />

        <LanguageChanger />
        <Home />

        <Services />
        <About />

        <Contact />
        <Footer />
      </TranslationProvider>
    </div>
  );
};
export default App;
