import { HoverEffect } from "../ui/card-hover-effect";
import {
  IconBrowser,
  IconDeviceMobile,
  IconPackage,
} from "@tabler/icons-react";

export function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Web Development & Design",
    description:
      "Elevate your online presence with our comprehensive web development and design services. Our talented team of designers and developers create visually stunning, user-friendly websites that not only attract visitors but also drive conversions. From e-commerce platforms to content management systems, we leverage the latest web technologies to deliver secure, scalable, and SEO-optimized solutions.",
    icon: <IconBrowser size={48} className="text-green-400" />,
  },
  {
    title: "Mobile App Development",
    description:
      "In today's mobile-first world, having a powerful app is essential. Our mobile app development services cover every aspect of the app lifecycle, from user experience (UX) design to coding, testing, and deployment. We build intuitive, high-performing apps for both iOS and Android platforms, ensuring seamless user experiences across all devices.",
    icon: <IconDeviceMobile size={48} className="text-cyan-400" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Bring your vision to life with our expert software development services. Our skilled team of developers can create tailored solutions using the latest technologies to meet your unique business needs. From ideation to deployment, we guide you through every step of the development process, delivering high-quality, scalable software that drives innovation and growth.",
    icon: <IconPackage size={48} className="text-yellow-400" />,
  },
];
