"use client";

import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconDeviceImacCode,
  IconTrophy,
  IconPhone,
  IconFileCv,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/app/components/pages/ThemeToggle"; // Import ThemeToggle component
import { About } from "@/app/components/pages/About";
import { Experience } from "@/app/components/pages/Experience";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },

    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconDeviceImacCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Achievements",
      icon: (
        <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact Me",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Resume/CV",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center py-2 z-50}">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
