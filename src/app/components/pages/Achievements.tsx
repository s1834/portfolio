import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

interface ContentProps {
  content: string[];
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className="p-6 space-y-8">
      <div className="p-6 text-black dark:text-white rounded-lg shadow-md space-y-6">
        {content.map((text: string, index: number) => (
          <React.Fragment key={index}>
            <p>{text}</p>
            <hr className="border-black dark:border-white transition-transform duration-300 transform hover:scale-x-110" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export function Achievements() {
  const data = [
    {
      title: "2024",
      content: (
        <Content
          content={[
            "Successfully contributed a crucial testcase to the LeetCode Medium problem “846. Hand of Straights”, which was officially accepted, making the problem more robust and comprehensive.",
            "Emerged as one of the select few (top 1%) chosen for the exclusive iOS Student Developer program with Swift offered by Apple and Infosys at SRM Institute of Science and Technology",
          ]}
        />
      ),
    },
    {
      title: "2023",
      content: (
        <Content
          content={[
            "Ranked 4th out of 800 teams in an OODP hackathon organized by Cognizant and SRMIST.",
            "Honored as an “NPTEL Star” - NPTEL BELIEVERS for the session Jul-Dec 2023, an exclusive honor conferred upon only 1009 (∼0.14%) candidates out of 710,413 exam registrants.",
            'Earned "Elite" certifications in both the Programming in Java and Python for Data Science NPTEL courses, demonstrating excellence in these competitive examinations.',
          ]}
        />
      ),
    },
    {
      title: "2022",
      content: (
        <Content
          content={[
            "Secured 1st place at the DATAKON - 2022: Bug-Out coding contest, organized by the Department of Data Science and Business Systems at SRMIST.",
            "Awarded the 'Pratibha Samman 2022' for exemplary academic achievements in Class XII CBSE Board Examinations by the Nimar Sahodaya School Complex.",
          ]}
        />
      ),
    },
    {
      title: "Changelog",
      content: (
        <Content
          content={[
            "Represented at the national level in the CBSE National Science Exhibition (2019-2020).",
            "Won the CBSE Regional Science Exhibition/Fair (2019-2020).",
            "Achieved a world record for the Longest Martial Arts Marathon in a Relay, recognized in the Golden Book of World Records (Dec 2015).",
            "Represented as a state-level Taekwon-do player in the M.P. State Taekwon-do Championship.",
            "3-times consecutive winner in the BDSKA District Karate Championship (2013, 2014, 2015).",
            "Achieved consecutive victories in horse riding competitions at Indore Public School events, winning 1st place three times in a row (2016, 2017, 2018).",
          ]}
        />
      ),
    },
  ];
  return (
    <div className="w-full" id="Achievements">
      <Timeline data={data} />
    </div>
  );
}
