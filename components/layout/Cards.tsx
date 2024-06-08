import React from "react";
import { useTranslation } from "../context/TranslateState";
import { HoverEffect } from "../ui/card-hover-effect";
import {
  IconBrowser,
  IconDeviceMobile,
  IconPackage,
  IconDatabase,
  IconCode,
  IconTool,
} from "@tabler/icons-react";

export function Cards() {
  const { t } = useTranslation();

  const services = t.SWIFTSPACE.services;

  const projects = [
    {
      title: services.webDevelopmentAndDesign.title,
      description: services.webDevelopmentAndDesign.description,
      icon: <IconBrowser size={48} className="text-green-400" />, // Assign appropriate icon and color
    },
    {
      title: services.modernFrontEndTechnologies.title,
      description: services.modernFrontEndTechnologies.description,
      icon: <IconCode size={48} className="text-blue-400" />, // Assign appropriate icon and color
    },
    {
      title: services.backEndProgramming.title,
      description: services.backEndProgramming.description,
      icon: <IconTool size={48} className="text-purple-400" />, // Assign appropriate icon and color
    },
    {
      title: services.advancedDatabaseManagement.title,
      description: services.advancedDatabaseManagement.description,
      icon: <IconDatabase size={48} className="text-red-400" />, // Assign appropriate icon and color
    },
    {
      title: services.cuttingEdgeFrameworks.title,
      description: services.cuttingEdgeFrameworks.description,
      icon: <IconCode size={48} className="text-indigo-400" />, // Assign appropriate icon and color
    },
    {
      title: services.mobileAppDevelopment.title,
      description: services.mobileAppDevelopment.description,
      icon: <IconDeviceMobile size={48} className="text-yellow-400" />, // Assign appropriate icon and color
    },
    {
      title: services.maintenanceAndTechnicalSupport.title,
      description: services.maintenanceAndTechnicalSupport.description,
      icon: <IconPackage size={48} className="text-pink-400" />, // Assign appropriate icon and color
    },
  ];

  return (
    <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
