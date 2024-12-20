"use client";

import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import { IconBrandGithub, IconBrandFigma } from "@tabler/icons-react";
import { EvervaultCard, Icon } from "@/app/components/ui/evervault-card";
// import axios from "axios";

export default function Page() {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await axios.get("/api/projects");
  //       setProjects(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching projects:", error);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  const projects = [
    {
      title: "Portfolio",
      description: "#nextjs #tailwindcss #typescript",
      imageSrc: "/images/projects/portfolio.png",
      tryNowLink: "https://shubhshah.xyz",
      iconLink: "https://github.com/s1834/portfolio",
      icon: "IconBrandGithub",
    },
    {
      title: "Skill Connect",
      description: "#nextjs #mongodb #tailwindcss #typescript",
      imageSrc: "/images/projects/skill-connect.png",
      tryNowLink: "https://github.com/s1834/skill-connect",
      iconLink: "https://github.com/s1834/skill-connect",
      icon: "IconBrandGithub",
    },
    {
      title: "Recap",
      description: "#swift #figma",
      imageSrc: "/images/projects/recap.jpeg",
      tryNowLink:
        "https://www.figma.com/proto/wqGScOcEbzKn30uZ60U81a/Recap?page-id=0%3A1…",
      iconLink: "https://www.figma.com/design/wqGScOcEbzKn30uZ60U81a/Recap",
      icon: "IconBrandFigma",
    },
    {
      title: "Forkify App",
      description: "#javascript #html #css",
      imageSrc: "/images/projects/forkify.png",
      tryNowLink: "https://forkify.shubhshah.xyz",
      iconLink: "https://github.com/s1834/forkify-app",
      icon: "IconBrandGithub",
    },
    {
      title: "Employee Management System",
      description: "#reactjs #nodejs #mysql #tailwindcss #javascript",
      imageSrc: "/images/projects/employee-management-system.png",
      tryNowLink: "https://employee.shubhshah.xyz",
      iconLink: "https://github.com/s1834/employee-management-system",
      icon: "IconBrandGithub",
    },
    {
      title: "Kidzee Website",
      description: "#html #css",
      imageSrc: "/images/projects/kidzee.png",
      tryNowLink: "https://kidzee.shubhshah.xyz",
      iconLink: "https://github.com/s1834/kidzee-website",
      icon: "IconBrandGithub",
    },
    {
      title: "Pet Sales System",
      description: "#python #flask #html #tailwindcss",
      imageSrc: "/images/projects/pet-sales-system.png",
      tryNowLink: "https://www.pet.shubhshah.xyz",
      iconLink: "https://github.com/s1834/Pet-Sales-System",
      icon: "IconBrandGithub",
    },
    {
      title: "FOSS Project: FIYOC",
      description: "#javascript #html #tailwindcss",
      imageSrc: "/images/projects/fiyoc.png",
      tryNowLink: "https://foss.shubhshah.xyz",
      iconLink: "https://github.com/s1834/FOSS-PROJECT",
      icon: "IconBrandGithub",
    },
  ];

  return (
    <div className="w-full h-full py-20 mx-auto px-4 max-w-7xl" id="Projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.imageSrc}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.tryNowLink}
                    target="__blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.iconLink}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <div className="h-12 w-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
                      {project.icon === "IconBrandGithub" && (
                        <IconBrandGithub className="h-6 w-6 dark:text-black text-white" />
                      )}
                      {project.icon === "IconBrandFigma" && (
                        <IconBrandFigma className="h-6 w-6 dark:text-black text-white" />
                      )}
                      {/* Add additional icon conditions here as necessary */}
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        ) : (
          <p className="text-neutral-600 dark:text-neutral-300">
            Loading projects....
          </p>
        )}
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[31.5rem] mt-20">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="MORE PROJECTS" />

          {/* <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            Check out my other projects and contributions!!
          </h2> */}
          {/* <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            <a
              href="https://github.com/s1834"
              target="_blank"
              rel="noopener noreferrer"
              className="\ransition-colors duration-300 rounded-full px-4 py-2 text-sm font-medium"
            >
              GitHub →
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}
