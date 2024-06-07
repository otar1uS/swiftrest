import React from "react";
import Globe from "../layout/Globe";
import { ContactForm } from "../layout/ContactForm";
import Section from "../layout/Section";
import { motion } from "framer-motion";
import { useTranslation } from "../context/TranslateState";

const Contact = () => {
  const { locale } = useTranslation();

  return (
    <div className="w-full h-screen relative bg-slate-950   " id="CONTACT">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8  absolute left-0 right-0 mx-auto bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        <Section name={locale ? "Contact Us" : "დაგვიკავშირდით"} />
      </motion.h1>

      <div className=" z-[100] left-[50%]  -translate-x-[50%] absolute  min-w-[400px] lg:min-w-[1200px]  flex-col   lg:flex-row   h-screen flex justify-between items-center  ">
        <Globe />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
