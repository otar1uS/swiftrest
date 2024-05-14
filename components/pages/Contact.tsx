import React from "react";
import Globe from "../layout/Globe";
import { ContactForm } from "../layout/ContactForm";
import Section from "../layout/Section";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full h-screen relative bg-slate-950   " id="CONTACT">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8   absolute left-[50%]  -translate-x-[50%] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        <Section name="Contact Us" />
      </motion.h1>
      <h2 className="text-center text-xl  md:text-4xl font-bold text-white dark:text-white">
        We sell soap worldwide with the guarantee of prison contact us right
        away
      </h2>
      <div className=" z-[100] left-[50%]  -translate-x-[50%] absolute  min-w-[400px] lg:min-w-[1200px]  flex-col   lg:flex-row   h-screen flex justify-between items-center">
        <Globe />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
