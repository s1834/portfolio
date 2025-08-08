"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconLink,
  IconSend,
} from "@tabler/icons-react";
import IconCloud from "@/app/components/magicui/icon-cloud";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/lib/utils";

interface LabelInputContainerProps {
  children: React.ReactNode;
  className?: string;
}

const LabelInputContainer = ({
  children,
  className = "",
}: LabelInputContainerProps) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, label, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 bg-gray-800 text-gray-300 rounded-full hover:scale-110 transition-all duration-300 ${color}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default function Page() {
  const [skills, setSkills] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        if (response.ok) {
          const data = await response.json();
          if (data && data.data) {
            setSkills(data.data.map((skill: any) => skill.slug));
          } else {
            console.error("Failed to fetch skills:", response.statusText);
            setSkills([]); // Set to empty array on error
          }
        } else {
          console.error("Failed to fetch skills:", response.statusText);
          setSkills([]); // Set to empty array on error
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
        setSkills([]); // Set to empty array on error
      }
    };

    fetchSkills();
  }, []);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !key) {
      console.error("Email service configuration missing");
      toast.error("Failed to send message. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, key);
      console.log("Email successfully sent!");
      toast.success("Message Sent Successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Email sending failed. Error details:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden" id="Contact">
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        className="flex flex-col items-center justify-center py-20 px-4 relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4">
            Let's <span className="gradient-text animate-gradient">Collaborate</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to work together on exciting projects?? <br /> Drop me a message and let's create something amazing!!
          </p>
        </motion.div>

        {/* Form and Skills Side by Side */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-6xl">
          {/* Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Get in Touch</h2>
            <form
              className="space-y-6 w-full"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="space-y-4">
                <LabelInputContainer>
                  <Label htmlFor="fullname" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </Label>
                  <Input
                    id="fullname"
                    placeholder="John Doe"
                    type="text"
                    name="user_name"
                    className="w-full focus-ring bg-white dark:bg-black border-white dark:border-white text-white placeholder-gray-400 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                    required
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    placeholder="johndoe@gmail.com"
                    type="email"
                    name="user_email"
                    className="w-full focus-ring bg-white dark:bg-black border-white dark:border-white text-white placeholder-gray-400 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                    required
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="(+91)-1234567890"
                    type="tel"
                    name="user_phone"
                    className="w-full focus-ring bg-white dark:bg-black border-white dark:border-white text-white placeholder-gray-400 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project or how we can collaborate...."
                    name="message"
                    required
                    rows={5}
                    className="flex w-full border border-white dark:border-white bg-white dark:bg-black text-white shadow-sm rounded-lg px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none hover:border-blue-500 dark:hover:border-blue-500"
                  />
                </LabelInputContainer>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-6 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner w-4 h-4"></div>
                    Sending....
                  </>
                ) : (
                  <>
                    <IconSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              <Toaster position="top-right" />
            </form>

            {/* Social Links Below Form */}
            <div className="mt-8">
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/s1834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
                >
                  <IconBrandGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/s1834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
                >
                  <IconBrandLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/s1834_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
                >
                  <IconBrandX className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 font-medium">Twitter</span>
                </a>
                <a
                  href="https://bento.me/s1834"
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
                >
                  <IconLink className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 font-medium">Bento</span>
                </a>
              </div>
            </div>
          </div>

          {/* Skills Cloud */}
          <div className="w-full">
            <div className="relative h-[500px] w-full flex items-center justify-center">
              {/* Circular background effect in the middle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute w-80 h-80 bg-gradient-to-br from-green-500/5 via-yellow-500/5 to-orange-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              </div>
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <IconCloud iconSlugs={skills} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
