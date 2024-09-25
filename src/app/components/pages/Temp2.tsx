"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import IconCloud from "@/app/components/magicui/icon-cloud";

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

export function Temp2() {
  return (
    <div className="flex-1 relative w-full h-screen flex items-center justify-center bg-red-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
