"use client";

import React from "react";

import {
  IconBriefcase,
  IconCode,
  IconDeviceAnalytics,
  IconHeartHandshake,
  IconRocket,
  IconTruckDelivery,
  IconUsers,
} from "@tabler/icons-react";

import { Meteors } from "../ui/meteors";
import Image from "next/image";
import Section from "../layout/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="w-full min-h-screen  flex items-center gap-20 flex-col  mx-auto  bg-slate-950"
      id="ABOUT"
    >
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
        <Section name="About Us" />
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 1,
          ease: "easeInOut",
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {items.map((item, index) => {
          return (
            <div key={index} className="   relative max-w-[360px] h-[550px]">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative  shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-around items-center">
                {item.header}
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  {item.icon}
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  {item.title}
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  {item.description}
                </p>

                <Meteors number={20} />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

const items = [
  {
    title: "Innovative Solutions",
    description:
      "We craft cutting-edge solutions to drive your business forward.",
    header: (
      <Image
        src="/1.jpg"
        alt="1"
        width={300}
        height={300}
        className="rounded-lg"
      />
    ),

    icon: <IconRocket className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Digital Transformation",
    description:
      "Embrace the power of technology to stay competitive and agile.",
    header: (
      <Image
        src="/OIG2.jpg"
        alt="2"
        width={300}
        height={300}
        className="rounded-lg"
      />
    ),

    icon: <IconDeviceAnalytics className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Exceptional Design",
    description:
      "Our designs are not only visually stunning but also user-friendly and functional.",
    header: (
      <Image
        src="/3.jpg"
        alt="3"
        width={300}
        height={300}
        className="rounded-lg"
      />
    ),
    icon: <IconBriefcase className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Effective Communication",
    description:
      "Clear and transparent communication is key to our successful partnerships.",
    header: (
      <Image
        src="/4.jpg"
        alt="4"
        width={300}
        height={300}
        className="rounded-lg"
      />
    ),
    icon: <IconUsers className="h-8 w-8 text-cyan-500" />,
  },
  {
    title: "Continuous Improvement",
    description:
      "We continuously strive to enhance our expertise and deliver better solutions.",
    header: (
      <Image
        src="/5.jpg"
        alt="5"
        width={300}
        height={300}
        className="rounded-lg"
      />
    ),
    icon: <IconHeartHandshake className="h-8 w-8 text-cyan-500" />,
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We embrace the latest technologies to create innovative and scalable solutions.",
    header: (
      <Image
        src="/6.jpg"
        alt="6"
        width={300}
        height={300}
        className="rounded-lg"
      />
    ),
    icon: <IconCode className="h-8 w-8 text-cyan-500" />,
  },
];
