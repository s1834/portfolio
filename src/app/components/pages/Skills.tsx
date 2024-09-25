"use client";
import IconCloud from "@/app/components/magicui/icon-cloud";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";

const slugs = [
  "amazonaws",
  // "amazonec2",
  // "amazoniam",
  // "amazons3",
  // "amazonwebservices",
  "bootstrap",
  "c",
  "cloudflare",
  "cplusplus",
  "css3",
  "figma",
  "flask",
  "git",
  "github",
  "html5",
  "java",
  "javascript",
  "linux",
  "markdown",
  "mongodb",
  "mysql",
  "netlify",
  "nextdotjs",
  "nodedotjs",
  "numpy",
  "pandas",
  "postgresql",
  "postman",
  "python",
  "react",
  "render",
  "rust",
  "swift",
  "tailwindcss",
  "typescript",
  "vercel",
];

export function Skills() {
  return (
    <div
      className="h-full w-full bg-black flex flex-col items-center justify-start overflow-hidden rounded-md"
      id="Skills"
    >
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
