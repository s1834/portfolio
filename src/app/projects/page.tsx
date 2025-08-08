"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import { IconBrandGithub, IconBrandFigma, IconExternalLink } from "@tabler/icons-react";
import { EvervaultCard, Icon } from "@/app/components/ui/evervault-card";
import { motion } from "framer-motion";
import { IconCode, IconBriefcase } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";


export default function Page() {
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

  const projects = [
    {
      title: "Recap: Every Memory Matters",
      description: "iOS app for Alzheimer's patients with memory recall features and caregiver support",
      techStack: ["Swift", "SwiftUI", "iOS", "Healthcare", "App Store"],
      imageSrc: "/images/projects/recap.jpeg",
      tryNowLink: "https://apps.apple.com/in/app/recap-every-memory-matters/id6743312643/",
      iconLink: "https://github.com/Recap-sdk/recap",
      icon: "IconBrandGithub",
      stats: { users: "30+", rating: "4.8", downloads: "500+" },
      featured: true,
    },
    {
      title: "Traffic Sign Detection Using GTSDB",
      description: "Deep learning pipeline for detecting and classifying partially occluded traffic signs",
      techStack: ["Deep Learning", "CNN", "Computer Vision", "Research"],
      imageSrc: "/images/projects/traffic-sign-detection.png",
      tryNowLink: "https://github.com/s1834/",
      iconLink: "https://github.com/s1834/",
      icon: "IconBrandGithub",
      stats: { improvement: "5-9%", accuracy: "92%", dataset: "GTSDB" },
      featured: true,
    },
    {
      title: "Portfolio",
      description: "Modern portfolio website built with Next.js and Tailwind CSS",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      imageSrc: "/images/projects/portfolio.png",
      tryNowLink: "https://shubhshah.xyz",
      iconLink: "https://github.com/s1834/portfolio",
      icon: "IconBrandGithub",
      stats: { views: "1K+", performance: "95%", accessibility: "100%" },
    },
    {
      title: "Skill Connect",
      description: "Platform for connecting developers & sharing skills",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      imageSrc: "/images/projects/skill-connect.png",
      tryNowLink: "https://github.com/s1834/skill-connect",
      iconLink: "https://github.com/s1834/skill-connect",
      icon: "IconBrandGithub",
      stats: { users: "100+", skills: "50+", connections: "200+" },
    },
    {
      title: "Forkify App",
      description: "Recipe search and management application",
      techStack: ["JavaScript", "HTML", "CSS", "API"],
      imageSrc: "/images/projects/forkify.png",
      tryNowLink: "https://forkify.shubhshah.xyz",
      iconLink: "https://github.com/s1834/forkify-app",
      icon: "IconBrandGithub",
      stats: { recipes: "1000+", users: "500+", rating: "4.5" },
    },
    {
      title: "Employee Management System",
      description: "Platform for managing employee data & operations",
      techStack: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
      imageSrc: "/images/projects/employee-management-system.png",
      tryNowLink: "https://employee.shubhshah.xyz",
      iconLink: "https://github.com/s1834/employee-management-system",
      icon: "IconBrandGithub",
      stats: { employees: "100+", departments: "10+", efficiency: "85%" },
    },
    {
      title: "Kidzee Website",
      description: "Website for Kidzee PreSchool",
      techStack: ["HTML", "CSS", "JavaScript"],
      imageSrc: "/images/projects/kidzee.png",
      tryNowLink: "https://kidzee.shubhshah.xyz",
      iconLink: "https://github.com/s1834/kidzee-website",
      icon: "IconBrandGithub",
      stats: { visitors: "2K+", pages: "15+", engagement: "90%" },
    },
    {
      title: "Pet Sales System",
      description: "E-commerce platform for pet sales and management",
      techStack: ["Python", "Flask", "HTML", "Tailwind CSS"],
      imageSrc: "/images/projects/pet-sales-system.png",
      tryNowLink: "https://www.pet.shubhshah.xyz",
      iconLink: "https://github.com/s1834/Pet-Sales-System",
      icon: "IconBrandGithub",
      stats: { pets: "200+", sales: "50+", rating: "4.7" },
    },
    {
      title: "FOSS Project: FIYOC",
      description: "Open-source project for community development",
      techStack: ["JavaScript", "HTML", "Tailwind CSS", "Open Source"],
      imageSrc: "/images/projects/fiyoc.png",
      tryNowLink: "https://foss.shubhshah.xyz",
      iconLink: "https://github.com/s1834/FOSS-PROJECT",
      icon: "IconBrandGithub",
      stats: { contributors: "20+", commits: "500+", stars: "100+" },
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-start overflow-hidden relative" id="Projects">
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
            <span className="gradient-text animate-gradient">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my innovative projects and technical solutions
          </p>
        </motion.div>

        {/* GitHub Summary Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
          <div className="text-center p-6 glass-effect rounded-xl">
            <IconBrandGithub className="w-8 h-8 mx-auto mb-3 text-blue-500" />
            <Counter target={100} suffix="+" />
            <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <IconCode className="w-8 h-8 mx-auto mb-3 text-green-500" />
            <Counter target={1500} suffix="+" />
            <div className="text-sm text-gray-600 dark:text-gray-400">Contributions</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <IconBriefcase className="w-8 h-8 mx-auto mb-3 text-purple-500" />
            <Counter target={5} suffix="+" />
            <div className="text-sm text-gray-600 dark:text-gray-400">Organizations</div>
          </div>
        </motion.div>


        {/* View All Button */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <a
            href="https://github.com/s1834"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-105"
          >
            <IconBrandGithub className="w-5 h-5" />
            View All Projects
          </a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
        >
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-[650px] flex flex-col"
              >
                <CardContainer className="inter-var group h-full">
                  <CardBody className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${project.featured ? 'gradient-border' : ''}`}>
                    {project.featured && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </div>
                    )}
                    
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                    >
                      {project.title}
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4 flex-1"
                    >
                      {project.description}
                    </CardItem>

                    {/* Tech Stack */}
                    <CardItem translateZ="70" className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardItem>

                    {/* Stats */}
                    <CardItem translateZ="80" className="mb-4">
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {project.stats && Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="font-semibold gradient-text">{value}</div>
                            <div className="text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-auto">
                      <Image
                        src={project.imageSrc}
                        height="1000"
                        width="1000"
                        className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                        alt="thumbnail"
                      />
                    </CardItem>

                    <div className="flex justify-between items-center mt-6">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.tryNowLink}
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                      >
                        <IconExternalLink className="w-3 h-3" />
                        Try now
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.iconLink}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform">
                          {project.icon === "IconBrandGithub" && (
                            <IconBrandGithub className="h-5 w-5" />
                          )}
                          {project.icon === "IconBrandFigma" && (
                            <IconBrandFigma className="h-5 w-5" />
                          )}
                        </div>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))
          ) : (
            <p className="text-neutral-600 dark:text-neutral-300">
              Loading projects....
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
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