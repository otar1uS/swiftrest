"use client";
import React from "react";
import { FloatingNav } from "../ui/navbar-menu";
import { RiHome4Line as IconHome } from "react-icons/ri";
import { FaUser as IconUser } from "react-icons/fa";
import { BiMessageSquareMinus as IconMessage } from "react-icons/bi";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "HOME",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "SERVICES",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "ABOUT",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "CONTACT",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
