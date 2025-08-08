"use client";

import React, { useState, useEffect } from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconHome,
  IconBriefcase,
  // IconCode,
  IconDeviceImacCode,
  IconTrophy,
  IconPhone,
  IconFileCv,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/app/components/pages/ThemeToggle";

export function Dock() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["About", "Experience", "Projects", "Achievements", "Contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className={`h-full w-full transition-colors duration-300 ${
          activeSection === "About" 
            ? "text-blue-500" 
            : "text-neutral-500 dark:text-neutral-300 hover:text-blue-500"
        }`} />
      ),
      href: "#About",
    },

    {
      title: "Experience",
      icon: (
        <IconBriefcase className={`h-full w-full transition-colors duration-300 ${
          activeSection === "Experience" 
            ? "text-green-500" 
            : "text-neutral-500 dark:text-neutral-300 hover:text-green-500"
        }`} />
      ),
      href: "#Experience",
    },
    // {
    //   title: "Skills",
    //   icon: (
    //     <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#Skills",
    // },
    {
      title: "Projects",
      icon: (
        <IconDeviceImacCode className={`h-full w-full transition-colors duration-300 ${
          activeSection === "Projects" 
            ? "text-purple-500" 
            : "text-neutral-500 dark:text-neutral-300 hover:text-purple-500"
        }`} />
      ),
      href: "#Projects",
    },

    {
      title: "Achievements",
      icon: (
        <IconTrophy className={`h-full w-full transition-colors duration-300 ${
          activeSection === "Achievements" 
            ? "text-yellow-500" 
            : "text-neutral-500 dark:text-neutral-300 hover:text-yellow-500"
        }`} />
      ),
      href: "#Achievements",
    },
    {
      title: "Contact Me",
      icon: (
        <IconPhone className={`h-full w-full transition-colors duration-300 ${
          activeSection === "Contact" 
            ? "text-pink-500" 
            : "text-neutral-500 dark:text-neutral-300 hover:text-pink-500"
        }`} />
      ),
      href: "#Contact",
    },
    {
      title: "Resume/CV",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-orange-500 transition-colors duration-300" />
      ),
      href: "https://drive.google.com/file/d/1-J_MCijd4nwldol7ILSW6930xMoQBAmb/",
    },
    {
      title: "Theme",
      icon: (
        <div className="flex items-center justify-center h-full w-full">
          <ThemeToggle />
        </div>
      ),
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center py-2 z-50">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
