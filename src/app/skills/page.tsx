"use client";
import IconCloud from "@/app/components/magicui/icon-cloud";
import React, { useEffect, useState } from "react";

// const slugs = [
//   "amazonaws",
//   "bootstrap",
//   "c",
//   "cloudflare",
//   "cplusplus",
//   "css3",
//   "figma",
//   "flask",
//   "git",
//   "github",
//   "html5",
//   "java",
//   "javascript",
//   "linux",
//   "markdown",
//   "mongodb",
//   "mysql",
//   "netlify",
//   "nextdotjs",
//   "nodedotjs",
//   "numpy",
//   "pandas",
//   "postgresql",
//   "postman",
//   "python",
//   "react",
//   "render",
//   "rust",
//   "swift",
//   "tailwindcss",
//   "typescript",
//   "vercel",
// ];

export default function Page() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        const data = await response.json();
        if (data && data.data) {
          setSkills(data.data.map((skill) => skill.slug));
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div
      className="h-full w-full bg-black flex flex-col items-center justify-start overflow-hidden rounded-md"
      id="Skills"
    >
      <div className="flex flex-col items-center space-y-6">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Skills
        </h1>
        <IconCloud iconSlugs={skills} />
      </div>
    </div>
  );
}
