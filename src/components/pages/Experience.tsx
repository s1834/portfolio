"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Experience() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Work Experience
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Co-Founder",
    title: "iSoul",
    src: "/images/experience/iSoul_logo_white.jpg",
    content: <DummyContent />,
  },
  {
    category: "Full-Stack Intern in IT",
    title: "Diginfo Expert Services",
    src: "/images/experience/Diginfo_logo.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Technical Head",
    title: "Crewsphere SRM",
    src: "/images/experience/crewsphere_srm_logo.jpeg",
    content: <DummyContent />,
  },

  {
    category: "Technical Associate",
    title: "Directorate Alumni Affairs",
    src: "/images/experience/srmuaa_logo.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Technical Associate",
    title: "Team 404",
    src: "/images/experience/team404_logo.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Technical Sticky Bit",
    title: "HackTheBox SRMIST",
    src: "/images/experience/htbsrmist_logo.jpeg",
    content: <DummyContent />,
  },

  {
    category: "Technical Team Member",
    title: "Blockchain Club SRM",
    src: "/images/experience/blockchain_srm_logo.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Corporate Strategy and Implementation Committee Member",
    title: "Aaruush",
    src: "/images/experience/aaruush_logo.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Technical Member",
    title: "GitHub Community SRM",
    src: "/images/experience/github_srm_logo.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Corporate Associate",
    title: "Cherry+ Network",
    src: "/images/experience/cherry_logo.jpeg",
    content: <DummyContent />,
  },
];
