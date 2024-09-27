import React, { ReactNode } from "react";
import { Timeline } from "@/app/components/ui/timeline";

interface ContentProps {
  content: ReactNode[];
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className="p-6 space-y-8">
      <div className="p-6 text-black dark:text-white rounded-lg shadow-md space-y-6">
        {content.map((item: ReactNode, index: number) => (
          <React.Fragment key={index}>
            <p>{item}</p>
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
            <>
              Successfully contributed a crucial{" "}
              <span className="text-[#5046e6] font-bold">testcase</span> to the{" "}
              <span className="text-[#5046e6] font-bold">LeetCode Medium</span>{" "}
              problem{" "}
              <span className="text-[#5046e6] font-bold">
                "846. Hand of Straights"
              </span>
              , which was officially accepted, making the problem more robust
              and comprehensive.
            </>,
            <>
              Emerged as one of the select few{" "}
              <span className="text-[#5046e6] font-bold">(top 1%)</span> chosen
              for the exclusive{" "}
              <span className="text-[#5046e6] font-bold">
                iOS Student Developer program
              </span>{" "}
              with Swift offered{" "}
              <span className="text-[#5046e6] font-bold">
                by Apple and Infosys
              </span>{" "}
              at SRM Institute of Science and Technology.
            </>,
          ]}
        />
      ),
    },
    {
      title: "2023",
      content: (
        <Content
          content={[
            <>
              Ranked{" "}
              <span className="text-[#5046e6] font-bold">
                4th out of 800 teams
              </span>{" "}
              in an{" "}
              <span className="text-[#5046e6] font-bold">OODP hackathon</span>{" "}
              organized by{" "}
              <span className="text-[#5046e6] font-bold">
                Cognizant and SRMIST
              </span>
              .
            </>,
            <>
              Honored as an{" "}
              <span className="text-[#5046e6] font-bold">
                “NPTEL Star” - NPTEL BELIEVERS
              </span>{" "}
              for the session Jul-Dec 2023, an exclusive honor conferred upon
              only{" "}
              <span className="text-[#5046e6] font-bold">
                1009 (∼0.14%) candidates out of 710,413
              </span>{" "}
              exam registrants.
            </>,
            <>
              Earned{" "}
              <span className="text-[#5046e6] font-bold">
                Elite certifications
              </span>{" "}
              in both the Programming in Java and Python for Data Science{" "}
              <span className="text-[#5046e6] font-bold">NPTEL courses</span>,
              demonstrating excellence in these competitive examinations.
            </>,
          ]}
        />
      ),
    },
    {
      title: "2022",
      content: (
        <Content
          content={[
            <>
              Secured{" "}
              <span className="text-[#5046e6] font-bold">1st place</span> at the{" "}
              <span className="text-[#5046e6] font-bold">
                DATAKON - 2022: Bug-Out coding contest
              </span>
              , organized by the{" "}
              <span className="text-[#5046e6] font-bold">
                Department of Data Science and Business Systems
              </span>{" "}
              at <span className="text-[#5046e6] font-bold">SRMIST</span>.
            </>,
            <>
              Awarded the{" "}
              <span className="text-[#5046e6] font-bold">
                'Pratibha Samman 2022'
              </span>{" "}
              for exemplary academic achievements in Class XII CBSE Board
              Examinations by the{" "}
              <span className="text-[#5046e6] font-bold">
                Nimar Sahodaya School Complex
              </span>
              .
            </>,
          ]}
        />
      ),
    },
    {
      title: "Changelog",
      content: (
        <Content
          content={[
            <>
              Represented at the national level in the{" "}
              <span className="text-[#5046e6] font-bold">
                CBSE National Science Exhibition
              </span>{" "}
              (2019-2020).
            </>,
            <>
              Won the{" "}
              <span className="text-[#5046e6] font-bold">
                CBSE Regional Science Exhibition/Fair
              </span>{" "}
              (2019-2020).
            </>,
            <>
              Achieved a world record for the{" "}
              <span className="text-[#5046e6] font-bold">
                Longest Martial Arts Marathon in a Relay
              </span>
              , recognized in the
              <span className="text-[#5046e6] font-bold">
                {" "}
                Golden Book of World Records
              </span>{" "}
              (Dec 2015).
            </>,
            <>
              Represented as a{" "}
              <span className="text-[#5046e6] font-bold">
                State-level Taekwon-do player
              </span>{" "}
              in the M.P. State Taekwon-do Championship.
            </>,
            <>
              <span className="text-[#5046e6] font-bold">3-times</span>{" "}
              consecutive winner in the{" "}
              <span className="text-[#5046e6] font-bold">
                BDSKA District Karate Championship
              </span>{" "}
              (2013, 2014, 2015).
            </>,
            <>
              Achieved consecutive victories in{" "}
              <span className="text-[#5046e6] font-bold">
                Horse Riding competitions
              </span>{" "}
              at Indore Public School events, winning
              <span className="text-[#5046e6] font-bold">
                {" "}
                1st place three times in a row
              </span>{" "}
              (2016, 2017, 2018).
            </>,
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
