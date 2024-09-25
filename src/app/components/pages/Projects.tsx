"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

export function Projects() {
  const cards = [
    {
      title: "Portfolio",
      description: "#nextjs #tailwindcss #typescript",
      imageSrc: "/images/projects/portfolio.png",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Skill Connect",
      description: "#nextjs #mongodb #tailwindcss #typescript",
      imageSrc: "/images/projects/skill-connect.png",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Recap",
      description: "#swift #figma",
      imageSrc: "/images/projects/recap.jpeg",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Forkify App",
      description: "#javascript #html #css",
      imageSrc: "/images/projects/forkify.png",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Employee Management System",
      description: "#reactjs #nodejs #mysql #tailwindcss #javascript",
      imageSrc: "/images/projects/employee-management-system.png",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Kidzee Website",
      description: "#html #css",
      imageSrc: "/images/projects/kidzee.png",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Pet Sales System",
      description: "#python #flask #html #tailwindcss",
      imageSrc: "/images/projects/pet-sales-system.png",
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "FOSS Project: FIYOC",
      description: "#javascript #html #tailwindcss",
      imageSrc: "/images/projects/fiyoc.png",
      link: "https://twitter.com/mannupaaji",
    },
  ];

  return (
    <div className="w-full h-full py-20 mx-auto px-4 max-w-7xl ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={card.imageSrc}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                {/* <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem> */}
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <div className="h-12 w-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <IconBrandGithub className="h-6 w-6 dark:text-black text-white" />
                  </div>
                </CardItem>
                {/* <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Case Study
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
