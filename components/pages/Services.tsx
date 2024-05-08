"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Cards } from "../layout/Cards";

export default function Services() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950  w-full relative">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Services
        </motion.h1>
      </LampContainer>
      <Cards />
    </div>
  );
}
