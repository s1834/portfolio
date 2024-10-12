"use client";

import React from "react";
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
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#About",
    },

    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
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
        <IconDeviceImacCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Projects",
    },

    {
      title: "Achievements",
      icon: (
        <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Achievements",
    },
    {
      title: "Contact Me",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Contact",
    },
    {
      title: "Resume/CV",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1crUAxIW2iuMknzrkX1oucdzqEPbH6yhk/",
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
