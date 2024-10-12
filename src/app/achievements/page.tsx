import React, { ReactNode } from "react";
import { Timeline } from "@/app/components/ui/timeline";

const Content = ({ content }) => {
  return (
    <div className="p-6 space-y-8">
      <div className="p-6 text-black dark:text-white rounded-lg shadow-md space-y-6">
        {content.map((item, index) => (
          <React.Fragment key={index}>
            <p>{item}</p>
            <hr className="border-black dark:border-white transition-transform duration-300 transform hover:scale-x-110" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  const data = [
    {
      title: "2024",
      content: (
        <Content
          content={[
            <>
              Successfully contributed a crucial{" "}
              <span className="text-[#5046e6] font-bold">testcase</span> to the{" "}
              <span className="text-[#5046e6] font-bold">
                "846. Hand of Straights"
              </span>
              , which was officially accepted, making the problem more robust
              and comprehensive.{" "}
              <a
                href="https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/22624"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (GitHub Issue #22624)
              </a>
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
              at SRM Institute of Science and Technology.{" "}
              <a
                href="https://drive.google.com/file/d/1Q44YmcrL-I7yfMqY1EUjQN9iSmFuDemG/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Selection Letter)
              </a>
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
              .{" "}
              <a
                href="https://drive.google.com/file/d/1RhR1SVFgyYg8zcfc8ZQ5KhZISFcpXpBI/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>{" "}
              <a
                href="https://github.com/s1834/Pet-Sales-System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (GitHub)
              </a>{" "}
              <a
                href="https://www.pet.shubhshah.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (Try it here)
              </a>
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
              exam registrants.{" "}
              <a
                href="https://drive.google.com/file/d/17pZdafupKBNrjQOmIZuL7qVcnMwvt6q9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>
            </>,
            <>
              Earned{" "}
              <span className="text-[#5046e6] font-bold">
                Elite certifications
              </span>{" "}
              in both the Programming in Java and Python for Data Science{" "}
              <span className="text-[#5046e6] font-bold">NPTEL courses</span>,
              demonstrating excellence in these competitive examinations.{" "}
              <a
                href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs74/Course/NPTEL23CS74S9335488720338643.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (Java - View Certificate)
              </a>{" "}
              <a
                href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs99/Course/NPTEL23CS99S4533568310104705.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (Python - View Certificate)
              </a>
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
              at <span className="text-[#5046e6] font-bold">SRMIST</span>.{" "}
              <a
                href="https://drive.google.com/drive/folders/1s74Mz_kvtRg1ZCTzbLMehSRzhJWPLkJM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>
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
              .{" "}
              <a
                href="https://drive.google.com/file/d/1fq9-3XlupzvZf-egxmukvKZ98lqCW2mW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>
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
              (2019-2020).{" "}
              <a
                href="https://drive.google.com/file/d/1ClSSRmwbOJ6htzWznV6m_xTne3pkYX7z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>
            </>,
            <>
              Won the{" "}
              <span className="text-[#5046e6] font-bold">
                CBSE Regional Science Exhibition/Fair
              </span>{" "}
              (2019-2020).{" "}
              <a
                href="https://drive.google.com/file/d/1QL8cHXKzhG3MUgaL-O6xq-Alo-x3UkZG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>
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
              (Dec 2015).{" "}
              <a
                href="https://drive.google.com/file/d/1wAl_nCvXfH4UIoCF91CAZ4Bdom4dQjd3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>
            </>,
            <>
              Represented as a{" "}
              <span className="text-[#5046e6] font-bold">
                State-level Taekwon-do player
              </span>{" "}
              in the M.P. State Taekwon-do Championship.{" "}
              <a
                href="https://drive.google.com/file/d/1_OyFfrVlDdG7XLx3lGYvegkFwRuP78Rv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificate)
              </a>
            </>,
            <>
              <span className="text-[#5046e6] font-bold">3-times</span>{" "}
              consecutive winner in the{" "}
              <span className="text-[#5046e6] font-bold">
                BDSKA District Karate Championship
              </span>{" "}
              (2013, 2014, 2015).{" "}
              <a
                href="https://drive.google.com/drive/folders/13Dpxuw7gEEcfxLr42vTJz_e8WO2bDzvI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificates)
              </a>
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
              (2016, 2017, 2018).{" "}
              <a
                href="https://drive.google.com/drive/folders/1ReoDfEYtEOCWMOMzlYz0OSZosohkalK-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold"
              >
                (View Certificates)
              </a>
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
