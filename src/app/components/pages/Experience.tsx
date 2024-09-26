"use client";

import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export function Experience() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20" id="Experience">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Experience
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Define types for Content props
interface ContentProps {
  content: string[];
}

// Content component with explicit typing
const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className="p-6 space-y-8">
      <div className="bg-white p-6 text-black dark:bg-neutral-900 dark:text-white rounded-lg shadow-md space-y-6">
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

// Sample data for cards
const data = [
  {
    category: "Co-Founder",
    title: "iSoul",
    src: "/images/experience/iSoul_logo_white.jpg",
    content: (
      <Content
        content={[
          "Developed a secure online dating platform focused on user engagement.",
          "Implemented tokenized incentives to enhance user experience.",
          "Led a team of developers and designers in creating the app.",
          "Conducted user research to improve features and usability.",
          "Managed project timelines and ensured milestones were met.",
        ]}
      />
    ),
  },
  {
    category: "Full-Stack Intern in IT",
    title: "Diginfo Expert Services",
    src: "/images/experience/Diginfo_logo.jpeg",
    content: (
      <Content
        content={[
          "Assisted in developing web applications using React and Node.js.",
          "Collaborated with the design team to implement UI/UX improvements.",
          "Participated in code reviews and contributed to quality assurance.",
          "Learned best practices for database management with MongoDB.",
          "Supported the deployment process of applications to production.",
        ]}
      />
    ),
  },
  {
    category: "Technical Head",
    title: "Crewsphere SRM",
    src: "/images/experience/crewsphere_srm_logo.jpeg",
    content: (
      <Content
        content={[
          "Played a key role in shaping the core team and driving community engagement.",
          "Organized technical workshops, equipping students with industry-relevant skills.",
          "Amplified campus visibility through various initiatives.",
          "Coordinated with external partners for project collaborations.",
          "Implemented agile methodologies for efficient project management.",
        ]}
      />
    ),
  },
  {
    category: "Technical Associate",
    title: "Directorate Alumni Affairs",
    src: "/images/experience/srmuaa_logo.jpeg",
    content: (
      <Content
        content={[
          "Led front-end development, crafting intuitive and user-centric designs.",
          "Engineered micro-sites for events, optimizing user experience and engagement.",
          "Maintained the alumni database and managed communications.",
          "Assisted in organizing alumni events and networking opportunities.",
          "Created promotional materials to enhance alumni engagement.",
        ]}
      />
    ),
  },
  {
    category: "Technical Associate",
    title: "Team 404",
    src: "/images/experience/team404_logo.jpeg",
    content: (
      <Content
        content={[
          "Actively contributed to multiple open-source initiatives, enhancing project functionality.",
          "Collaborated with teams to integrate new features and improvements.",
          "Tested and debugged applications to ensure quality.",
          "Documented code and created user guides for future reference.",
          "Participated in team meetings to discuss project progress.",
        ]}
      />
    ),
  },
  {
    category: "Technical Sticky Bit",
    title: "HackTheBox SRMIST",
    src: "/images/experience/htbsrmist_logo.jpeg",
    content: (
      <Content
        content={[
          "Enhanced the main website with a focus on user interface and experience.",
          "Collaborated on front-end development, ensuring cohesive and responsive designs.",
          "Mentored new members in technical skills and problem-solving.",
          "Developed and presented workshops on ethical hacking.",
          "Engaged in cybersecurity challenges and competitions.",
        ]}
      />
    ),
  },
  {
    category: "Technical Team Member",
    title: "Blockchain Club SRM",
    src: "/images/experience/blockchain_srm_logo.jpeg",
    content: (
      <Content
        content={[
          "Explored blockchain technologies and smart contracts.",
          "Developed projects to demonstrate the use of blockchain.",
          "Conducted research on emerging trends in the blockchain space.",
          "Facilitated discussions on ethical implications of blockchain.",
          "Participated in hackathons to apply blockchain knowledge.",
        ]}
      />
    ),
  },
  {
    category: "Corporate Strategy and Implementation Committee Member",
    title: "Aaruush, SRM University",
    src: "/images/experience/aaruush_logo.jpeg",
    content: (
      <Content
        content={[
          "Collaborated on strategic planning and execution of corporate events.",
          "Analyzed data to inform decision-making and improve initiatives.",
          "Engaged with stakeholders to gather feedback and insights.",
          "Managed ticket sales and logistics for workshops and events.",
          "Oversaw event organization and crowd control to ensure smooth operations.",
        ]}
      />
    ),
  },
  {
    category: "Corporate Member",
    title: "GitHub Community SRM",
    src: "/images/experience/github_srm_logo.jpeg",
    content: (
      <Content
        content={[
          "Promoted open-source projects and collaboration within the community.",
          "Organized coding events and workshops for students.",
          "Contributed to documentation and resources for community members.",
          "Provided support for members seeking to learn new technologies.",
          "Engaged with the community to enhance member participation and project visibility.",
        ]}
      />
    ),
  },
  {
    category: "Corporate Associate",
    title: "Cherry+ Network",
    src: "/images/experience/cherry_logo.jpeg",
    content: (
      <Content
        content={[
          "Assisted in developing marketing strategies and campaigns.",
          "Conducted market research to identify trends and opportunities.",
          "Supported the implementation of digital marketing initiatives.",
          "Collaborated with team members on project deliverables.",
          "Engaged with customers to gather feedback and improve services.",
        ]}
      />
    ),
  },
  {
    category: "Volunteer",
    title: "Cancer Aid Society",
    src: "/images/experience/cancer-aid-society.jpeg",
    content: (
      <Content
        content={[
          "Volunteered for the Nationwide Cancer Control Programme to promote awareness on cancer and non-communicable diseases.",
          "Contributed efforts to control tobacco cancer and raised awareness on cancer prevention.",
          "Provided 15 days of social service to help educate the public on cancer-related issues.",
          "Awarded a Gold Medal and Cup for outstanding contribution to the cause of cancer control.",
        ]}
      />
    ),
  },
];
