"use client";

import React, { useEffect, useRef } from "react";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";
import { motion } from "framer-motion";

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(70, 0, 120)"
      gradientBackgroundEnd="rgb(0, 10, 60)"
      firstColor="10, 80, 180"
      secondColor="180, 50, 200"
      thirdColor="60, 150, 200"
      fourthColor="120, 30, 30"
      fifthColor="100, 100, 40"
      pointerColor="100, 70, 180"
      size="80%"
      blendingValue="hard-light"
    >
      <div id="About" className="bg-white dark:bg-black min-h-screen relative overflow-hidden">
        {/* Enhanced floating elements with more moving colors */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-r from-green-500/20 to-pink-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-red-500/20 to-indigo-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1.5s" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2.5s" }}
        />
        <motion.div
          className="absolute top-2/3 left-1/2 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "0.8s" }}
        />

        <div className="relative z-50 min-h-screen flex items-center justify-center px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={sectionRef}
          >
            {/* Main heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-black dark:text-white">Hello, World!! I'm </span>
                <br />
                <span className="gradient-text animate-gradient">Shubh Shah (s1834)</span>
                {/* <span className="gradient-text animate-gradient underline decoration-2 underline-offset-8 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></span> */}
              </h1>
            </motion.div>

            {/* Role badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                Research Intern @ IIT Indore
              </span>
              <span className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium border border-green-500/20">
                iOS Intern @ Infosys
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
                Co-Founder @ iSoul
              </span>
              <span className="px-4 py-2 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium border border-pink-500/20">
                World Record Holder
              </span>
            </motion.div>

            {/* Main description */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Specializing in <span className="gradient-text font-semibold">deep learning</span>,{" "}
                <span className="gradient-text font-semibold">computer vision</span>,{" "}
                <span className="gradient-text font-semibold">iOS development</span>,{" "}
                <span className="gradient-text font-semibold">full stack development</span>, and{" "}
                <span className="gradient-text font-semibold">competitive programming</span>. I enjoy crafting{" "}
                <span className="text-black dark:text-white font-semibold">innovative solutions</span> that bridge{" "}
                technology with real-world impact, always exploring new frontiers in{" "}
                <span className="gradient-text font-semibold">AI/ML</span>,{" "}
                <span className="gradient-text font-semibold">Web and iOS development</span>.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#Contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get in touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
