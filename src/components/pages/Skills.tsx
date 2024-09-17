"use client";
import IconCloud from "@/components/magicui/icon-cloud";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function Skills() {
  return (
    <div className="h-full w-full bg-black flex flex-col items-center justify-start overflow-hidden rounded-md">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center space-y-6">
          {/* Skills heading */}
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            Skills
          </h1>
          {/* Icon cloud component below the Skills heading */}
          <IconCloud iconSlugs={slugs} />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
