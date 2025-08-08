"use client";

import React, { useEffect, useState, useRef } from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { IconBriefcase, IconCalendar, IconMapPin, IconUsers, IconCode, IconCertificate } from "@tabler/icons-react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
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
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-start overflow-hidden relative" id="Experience">
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
            <span className="gradient-text animate-gradient">Experience</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey across research, development, and leadership roles
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 glass-effect rounded-xl">
            <IconBriefcase className="w-8 h-8 mx-auto mb-3 text-blue-500" />
            <Counter target={3} suffix="+" />
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <IconCode className="w-8 h-8 mx-auto mb-3 text-green-500" />
            <Counter target={20} suffix="+" />
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <IconUsers className="w-8 h-8 mx-auto mb-3 text-purple-500" />
            <Counter target={5} suffix="+" />
            <div className="text-sm text-gray-600 dark:text-gray-400">Organizations</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <IconUsers className="w-8 h-8 mx-auto mb-3 text-orange-500" />
            <Counter target={8} suffix="+" />
            <div className="text-sm text-gray-600 dark:text-gray-400">Clubs & Communities</div>
          </div>
        </motion.div>


        {/* Carousel */}
        <motion.div variants={itemVariants}>
          <Carousel items={cards.map((card, index) => (
            <Card key={index} card={card} index={index} layout={true} />
          ))} />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Define types for Content props
interface ContentProps {
  content: string[];
  duration?: string;
  location?: string;
  certificate?: string;
}

// Content component with explicit typing
const Content: React.FC<ContentProps> = ({ content, duration, location, certificate }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-8 text-black dark:text-white rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 space-y-6 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl group-hover:from-blue-100/60 group-hover:to-purple-100/60 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300"></div>
        
        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300"></div>
        
        <div className="relative z-10">
          {duration && (
            <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium">
              <IconCalendar className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-6 font-medium">
              <IconMapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
          
          <div className="space-y-4">
            {content.map((text: string, index: number) => (
              <div key={index} className="flex items-start gap-3 group/item">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {certificate && (
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <IconCertificate className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const stepTime = 50;

      const step = () => {
        start += target / (duration / stepTime);
        if (start >= target) {
          setCount(target);
        } else {
          setCount(Math.floor(start));
          setTimeout(step, stepTime);
        }
      };

      step();
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-2xl font-bold gradient-text">
      {count}
      {suffix}
    </div>
  );
}


// Sample data for cards
const cards = [
  {
    category: "Research Intern",
    title: "Indian Institute of Technology, Indore",
    src: "/images/experience/iit_indore_logo.jpeg",
    duration: "May 2025 - Present",
    location: "Indore, India",
    content: (
      <Content
        content={[
          "Applied research in Analysis of Deep Learning Models on Occluded Object Detection under Dr. Somnath Dey",
          "Trained 10+ CNN architectures on occluded traffic signs, improving mAP by 5-9% on benchmark subsets",
          "Leveraged the GTSDB dataset to benchmark model performance under varying levels of visual obstruction",
          "Drafted a research publication proposing advancements in occluded object detection for autonomous vehicles",
        ]}
        duration="May 2025 - Present"
        location="Indore, India"
        certificate="https://drive.google.com/file/d/1o_zr985zPg7WlSZ24PznXSzcep84nwCY/"
      />
    ),
  },
  {
    category: "iOS Intern",
    title: "Infosys Limited",
    src: "/images/experience/infosys_logo.jpeg",
    duration: "Apr 2025 - May 2025",
    location: "Bangalore, India",
    content: (
      <Content
        content={[
          "Led a team of 9 to develop a Hospital Management System using SwiftUI and Firebase to streamline healthcare workflows",
          "Collaborated in an Agile environment, contributing to UI/UX and API integration, using Jira for sprint planning & tracking",
          "Integrated Gemini AI APIs to enable predictive patient analytics & enhance operational intelligence across departments",
          "Improved user task flow completion by 25% and streamlined hospital operations by 30% through intelligent automation",
        ]}
        duration="Apr 2025 - May 2025"
        location="Bangalore, India"
        certificate="https://drive.google.com/file/d/1F_hlFcz-OPRURM-N_QM4bHlzQ-g_VR3D/"
      />
    ),
  },
  {
    category: "Co-Founder",
    title: "iSoul",
    src: "/images/experience/iSoul_logo_white.jpg",
    duration: "Jan 2024 - Mar 2025",
    location: "Remote",
    content: (
      <Content
        content={[
          "Tackled privacy and security issues in online dating platforms to build user trust and foster meaningful, long-term connections",
          "Designed a secure DApp with NFT rewards and task-based challenges to protect user data and boost engagement by 20%",
          "Positioned iSoul as a privacy-first platform with tokenized incentives to drive secure, decentralized matchmaking",
        ]}
        duration="Jan 2024 - Mar 2025"
        location="Remote"
      />
    ),
  },
  {
    category: "Software Intern",
    title: "Highonswift",
    src: "/images/experience/highonswift_logo.jpeg",
    duration: "Dec 2024 - Jan 2025",
    location: "Remote",
    content: (
      <Content
        content={[
          "Created visually engaging user interfaces and developed efficient, scalable APIs for seamless, high-performance web applications",
          "Built responsive UI components using React and developed well-documented APIs with Node.js and Swagger",
          "Increased team productivity by 40% and API efficiency by 30%, improving app performance and user satisfaction",
        ]}
        duration="Dec 2024 - Jan 2025"
        location="Remote"
        certificate="https://drive.google.com/file/d/1vPVxEofEqNVCSU-AoeZpp5eUjQa8A-cI/"
      />
    ),
  },
  {
    category: "Ambassador & Speaker",
    title: "Stellar India",
    src: "/images/experience/stellar_india_logo.jpeg",
    duration: "2024 - Present",
    location: "India",
    content: (
      <Content
        content={[
          "Represented Stellar India in national-level conferences and community events, inspiring budding developers and tech enthusiasts",
          "Delivered keynotes and interactive sessions on blockchain adoption, Web3 innovation, and real-world applications",
          "Mentored early-stage developers on blockchain fundamentals, decentralized application (dApp) development, and career growth in Web3",
          "Collaborated with Stellar India core team to organize outreach campaigns, workshops, and hackathons across multiple institutions",
        ]}
        duration="2024 - Present"
        location="India"
      />
    ),
  },
  {
    category: "Technical Head",
    title: "Crewsphere SRM",
    src: "/images/experience/crewsphere_srm_logo.jpeg",
    duration: "2023 - 2024",
    location: "Chennai, India",
    content: (
      <Content
        content={[
          "Played a key role in shaping the core team and driving community engagement.",
          "Organized technical workshops, equipping students with industry-relevant skills.",
          "Amplified campus visibility through various initiatives.",
          "Coordinated with external partners for project collaborations.",
          "Implemented agile methodologies for efficient project management.",
        ]}
        duration="2023 - 2024"
        location="Chennai, India"
      />
    ),
  },
  {
    category: "Technical Associate",
    title: "Directorate Alumni Affairs",
    src: "/images/experience/srmuaa_logo.jpeg",
    duration: "2023 - 2024",
    location: "Chennai, India",
    content: (
      <Content
        content={[
          "Led front-end development, crafting intuitive and user-centric designs.",
          "Engineered micro-sites for events, optimizing user experience and engagement.",
          "Maintained the alumni database and managed communications.",
          "Assisted in organizing alumni events and networking opportunities.",
          "Created promotional materials to enhance alumni engagement.",
        ]}
        duration="2023 - 2024"
        location="Chennai, India"
      />
    ),
  },
  {
    category: "Technical Associate",
    title: "Team 404",
    src: "/images/experience/team404_logo.jpeg",
    duration: "2023 - 2024",
    location: "Chennai, India",
    content: (
      <Content
        content={[
          "Actively contributed to multiple open-source initiatives, enhancing projects.",
          "Collaborated with teams to integrate new features and improvements.",
          "Tested and debugged applications to ensure quality.",
          "Documented code and created user guides for future reference.",
          "Participated in team meetings to discuss project progress.",
        ]}
        duration="2023 - 2024"
        location="Chennai, India"
      />
    ),
  },
  {
    category: "Technical Sticky Bit",
    title: "HackTheBox SRMIST",
    src: "/images/experience/htbsrmist_logo.jpeg",
    duration: "2023 - 2024",
    location: "Chennai, India",
    content: (
      <Content
        content={[
          "Enhanced the main website with a focus on user interface and experience.",
          "Collaborated on front-end development, ensuring cohesive and responsive design.",
          "Mentored new members in technical skills and problem-solving.",
          "Developed and presented workshops on ethical hacking.",
          "Engaged in cybersecurity challenges and competitions.",
        ]}
        duration="2023 - 2024"
        location="Chennai, India"
      />
    ),
  },
  {
    category: "Technical Team Member",
    title: "Blockchain Club SRM",
    src: "/images/experience/blockchain_srm_logo.jpeg",
    duration: "2023 - 2024",
    location: "Chennai, India",
    content: (
      <Content
        content={[
          "Explored blockchain technologies and smart contracts.",
          "Developed projects to demonstrate the use of blockchain.",
          "Conducted research on emerging trends in the blockchain space.",
          "Facilitated discussions on ethical implications of blockchain.",
          "Participated in hackathons to apply blockchain knowledge.",
        ]}
        duration="2023 - 2024"
        location="Chennai, India"
      />
    ),
  },
  {
    category: "Corporate Strategy and Implementation Committee Member",
    title: "Aaruush, SRM University",
    src: "/images/experience/aaruush_logo.jpeg",
    duration: "2023 - 2024",
    location: "Chennai, India",
    content: (
      <Content
        content={[
          "Collaborated on strategic planning and execution of corporate events.",
          "Analyzed data to inform decision-making and improve initiatives.",
          "Engaged with stakeholders to gather feedback and insights.",
          "Managed ticket sales and logistics for workshops and events.",
          "Oversaw event organization and crowd control to ensure smooth operations.",
        ]}
        duration="2023 - 2024"
        location="Chennai, India"
      />
    ),
  },
  {
    category: "Corporate Member",
    title: "GitHub Community SRM",
    src: "/images/experience/github_srm_logo.jpeg",
    duration: "2023 - 2024",
    location: "Chennai, India",
    content: (
      <Content
        content={[
          "Promoted open-source projects and collaboration within the community.",
          "Organized coding events and workshops for students.",
          "Contributed to documentation and resources for community members.",
          "Provided support for members seeking to learn new technologies.",
          "Engaged with the community to enhance member participation and project outcomes.",
        ]}
        duration="2023 - 2024"
        location="Chennai, India"
      />
    ),
  },
  {
    category: "Corporate Associate",
    title: "Cherry+ Network",
    src: "/images/experience/cherry_logo.jpeg",
    duration: "2023 - 2024",
    location: "Remote",
    content: (
      <Content
        content={[
          "Assisted in developing marketing strategies and campaigns.",
          "Conducted market research to identify trends and opportunities.",
          "Supported the implementation of digital marketing initiatives.",
          "Collaborated with team members on project deliverables.",
          "Engaged with customers to gather feedback and improve services.",
        ]}
        duration="2023 - 2024"
        location="Remote"
      />
    ),
  },
  {
    category: "Volunteer",
    title: "Cancer Aid Society",
    src: "/images/experience/cancer-aid-society.jpeg",
    duration: "2022",
    location: "Indore, India",
    content: (
      <Content
        content={[
          "Volunteered for the Nationwide Cancer Control Programme to promote awareness.",
          "Contributed efforts to control tobacco cancer and raised awareness on prevention.",
          "Provided 15 days of social service to help educate the public on cancer awareness.",
          "Awarded a Gold Medal and Cup for outstanding contribution to the cause.",
        ]}
        duration="2022"
        location="Indore, India"
      />
    ),
  },
];
