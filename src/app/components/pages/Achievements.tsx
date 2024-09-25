import Image from "next/image";
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
      title: "Early 2023",
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
      title: "Changelog",
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
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
