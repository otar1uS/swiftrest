import React from "react";
import Globe from "../layout/Globe";
import { ContactForm } from "../layout/ContactForm";
import { BackgroundBeams } from "../ui/background-beams";

const Contact = () => {
  return (
    <div className="w-full h-screen relative ">
      <h2 className="text-center text-xl absolute left-[50%]  -translate-x-[50%] md:text-4xl font-bold text-white dark:text-white">
        We sell soap worldwide with the guarantee of prison contact us right
        away
      </h2>
      <div className=" z-[100] left-[50%]  -translate-x-[50%] absolute  max-w-[1200px]  flex-col   lg:flex-row   h-screen flex justify-between items-center">
        <ContactForm />
        <Globe />
      </div>
      <BackgroundBeams className="bg-black" />
    </div>
  );
};

export default Contact;
