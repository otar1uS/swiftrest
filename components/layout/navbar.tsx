"use client";
import React from "react";
import { FloatingNav } from "../ui/navbar-menu";
import { RiHome4Line as HomeIcon } from "react-icons/ri";
import {
  FaUser as ServicesIcon,
  FaInfoCircle as AboutUsIcon,
} from "react-icons/fa";
import { BiMessageSquareMinus as ContactIcon } from "react-icons/bi";
import { useTranslation } from "../context/TranslateState";

export function Navbar() {
  const { locale } = useTranslation();

  const navItems = [
    {
      name: locale === "en" ? "Home" : "მთავარი",
      link: "HOME",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: locale === "en" ? "Services" : "სერვისები",
      link: "SERVICES",
      icon: (
        <ServicesIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: locale === "en" ? "About Us" : "ჩვენს შესახებ",
      link: "ABOUT",
      icon: (
        <AboutUsIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: locale === "en" ? "Contact" : "დაკავშირება",
      link: "CONTACT",
      icon: (
        <ContactIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
