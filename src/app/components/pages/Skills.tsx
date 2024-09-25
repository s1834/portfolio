"use client";
import IconCloud from "@/app/components/magicui/icon-cloud";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";

const slugs = [
  "amazonaws",
  "amazonec2",
  "amazoniam",
  "amazons3",
  "amazonwebservices",
  "anaconda",
  "autocad",
  "axios",
  "babel",
  "bitcoin",
  "blogger",
  "bootstrap",
  "c",
  "calendly",
  "canva",
  "codeblocks",
  "cloudflare",
  "cplusplus",
  "css3",
  "cssmodules",
  "curl",
  "debian",
  "deepin",
  "dotenv",
  "ethereum",
  "fedora",
  "figma",
  "flask",
  "git",
  "github",
  "gnome",
  "homebrew",
  "html5",
  "intellijidea",
  "ios",
  "java",
  "javascript",
  "json",
  "jupyter",
  "kalilinux",
  "latex",
  "linux",
  "macos",
  "markdown",
  "mongodb",
  "mongoose",
  "mysql",
  "netlify",
  "nextdotjs",
  "nextui",
  "nodedotjs",
  "nodemon",
  "notion",
  "npm",
  "numpy",
  "openai",
  "oveleaf",
  "pandas",
  "pip",
  "postgresql",
  "postman",
  "pycharm",
  "python",
  "pytorch",
  "react",
  "reactrouter",
  "render",
  "replit",
  "rust",
  "solana",
  "swift",
  "tailwindcss",
  "typescript",
  "ubuntu",
  "uikit",
  "vercel",
  "visualstudiocode",
  "virtualbox",
  "vite",
  "xampp",
  "xcode",
  "yarn",
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
