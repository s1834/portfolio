"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { Timeline } from "@/app/components/ui/timeline";
import { motion } from "framer-motion";
import { IconTrophy, IconAward, IconStar, IconMedal } from "@tabler/icons-react";

interface ContentProps {
  content: ReactNode[];
  year: string;
}
const Content = ({ content, year }: ContentProps) => {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm p-6 text-black dark:text-white rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 space-y-6 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300">
        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300"></div>

        <div className="relative z-10 space-y-6">
          {content.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start gap-3 group/item">
                <div className="flex-shrink-0 mt-1">
                  {index === 0 ? (
                    <IconTrophy className="w-4 h-4 text-yellow-500" />
                  ) : index === 1 ? (
                    <IconAward className="w-4 h-4 text-blue-500" />
                  ) : index === 2 ? (
                    <IconStar className="w-4 h-4 text-purple-500" />
                  ) : (
                    <IconMedal className="w-4 h-4 text-green-500" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                    {item}
                  </p>
                </div>
              </div>
              {index < content.length - 1 && (
                <hr className="my-5 border-gray-300 dark:border-gray-600 transition-transform duration-300 transform hover:scale-x-110" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const data = [
    {
      title: "Featured",
      content: (
        <Content
          year="Featured"
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
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (GitHub Issue #22624)
              </a>
            </>,
            <>
              Emerged as one of the select few{" "}
              <span className="text-[#5046e6] font-bold">(top 0.9%)</span> chosen
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
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (View Selection Letter)
              </a>
            </>,
            <>
              Honored as an{" "}
              <span className="text-[#5046e6] font-bold">
                "NPTEL Star" - NPTEL BELIEVERS
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
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (View Certificate)
              </a>
            </>,
          ]}
        />
      ),
    },
    {
      title: "2025",
      content: (
        <Content
          year="2025"
          content={[
            <>
              Selected as one of the{" "}
              <span className="text-[#5046e6] font-bold">top 20 finalists</span> out of{" "}
              <span className="text-[#5046e6] font-bold">1,745 registrants</span> in the{" "}
              <span className="text-[#5046e6] font-bold">Citi Campus Innovation Challenge 5.0</span>.{" "}
              <a
                href="https://drive.google.com/file/d/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (View Certificate)
              </a>
            </>,
            <>
              Awarded the titles of{" "}
              <span className="text-[#5046e6] font-bold">Forward Champion</span> and{" "}
              <span className="text-[#5046e6] font-bold">Super Learner</span> under the{" "}
              <span className="text-[#5046e6] font-bold">McKinsey Forward Program</span>.{" "}
              <a
                href="https://drive.google.com/file/d/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (View Certificate)
              </a>
            </>,
            <>
              Showcased the{" "}
              <span className="text-[#5046e6] font-bold">"Recap" app</span> among the{" "}
              <span className="text-[#5046e6] font-bold">top 10 teams</span> at the{" "}
              <span className="text-[#5046e6] font-bold">App Fair</span> organized by the{" "}
              <span className="text-[#5046e6] font-bold">iOS Development Centre</span>.{" "}
              <a
                href="https://drive.google.com/file/d/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (View Certificate)
              </a>
            </>,
            <>
              Secured{" "}
              <span className="text-[#5046e6] font-bold">4th position</span> out of{" "}
              <span className="text-[#5046e6] font-bold">75+ teams</span> at{" "}
              <span className="text-[#5046e6] font-bold">Enigma</span>,{" "}
              <span className="text-[#5046e6] font-bold">Birla Institute of Technology (BIT), Mesra, Ranchi</span>.{" "}
              <a
                href="https://drive.google.com/file/d/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (View Certificate)
              </a>
            </>,
          ]}
        />
      ),
    },
    {
      title: "2024",
      content: (
        <Content
          year="2024"
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
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (GitHub Issue #22624)
              </a>
            </>,
            <>
              Emerged as one of the select few{" "}
              <span className="text-[#5046e6] font-bold">(top 0.9%)</span> chosen
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
                className="text-[#00BFFF] font-bold hover:underline"
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
          year="2023"
          content={[
            <>
              Ranked{" "}
              <span className="text-[#5046e6] font-bold">
                2nd out of 800+ teams
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
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (View Certificate)
              </a>{" "}
              <a
                href="https://github.com/s1834/Pet-Sales-System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (GitHub)
              </a>{" "}
              <a
                href="https://www.pet.shubhshah.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (Try it here)
              </a>
            </>,
            <>
              Honored as an{" "}
              <span className="text-[#5046e6] font-bold">
                "NPTEL Star" - NPTEL BELIEVERS
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
                className="text-[#00BFFF] font-bold hover:underline"
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
                className="text-[#00BFFF] font-bold hover:underline"
              >
                (Java - View Certificate)
              </a>{" "}
              <a
                href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs99/Course/NPTEL23CS99S4533568310104705.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-bold hover:underline"
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
          year="2022"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
          year="Legacy"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
                className="text-[#00BFFF] font-bold hover:underline"
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
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-start overflow-hidden relative" id="Achievements">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <motion.div
        className="flex flex-col items-center space-y-8 relative z-10 w-full max-w-7xl mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center text-black dark:text-white mb-4">
            <span className="gradient-text animate-gradient">Achievements</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From my early days to now, this timeline captures the key milestones that have shaped my journey.
          </p>
        </motion.div>

      {/* Achievement Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center p-6 glass-effect rounded-xl">
          <IconTrophy className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
          <div className="text-2xl font-bold gradient-text">25+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Awards & Recognitions</div>
        </div>
  
        <div className="text-center p-6 glass-effect rounded-xl">
          <IconAward className="w-8 h-8 mx-auto mb-3 text-blue-500" />
          <div className="text-2xl font-bold gradient-text">1</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">World Record Holder</div>
        </div>
        
        <div className="text-center p-6 glass-effect rounded-xl">
          <IconStar className="w-8 h-8 mx-auto mb-3 text-purple-500" />
          <div className="text-2xl font-bold gradient-text">0.1%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Global NPTEL Rank</div>
        </div>
        
        <div className="text-center p-6 glass-effect rounded-xl">
          <IconMedal className="w-8 h-8 mx-auto mb-3 text-green-500" />
          <div className="text-2xl font-bold gradient-text">21</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">O Grades Achieved</div>
        </div>
      </motion.div>


        {/* Timeline */}
        <motion.div variants={itemVariants}>
          <Timeline data={data} />
        </motion.div>
      </motion.div>
    </div>
  );
}
