"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import IconCloud from "@/app/components/magicui/icon-cloud";

const slugs = [
  "amazonaws",
  // "amazonec2",
  // "amazoniam",
  // "amazons3",
  // "amazonwebservices",
  "bootstrap",
  "c",
  "cloudflare",
  "cplusplus",
  "css3",
  "figma",
  "flask",
  "git",
  "github",
  "html5",
  "java",
  "javascript",
  "linux",
  "markdown",
  "mongodb",
  "mysql",
  "netlify",
  "nextdotjs",
  "nodedotjs",
  "numpy",
  "pandas",
  "postgresql",
  "postman",
  "python",
  "react",
  "render",
  "rust",
  "swift",
  "tailwindcss",
  "typescript",
  "vercel",
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message Sent");
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-neutral-950 bg-white relative w-full space-y-8 md:space-y-0 md:space-x-8 gap-28"
      id="Contact"
    >
      <div className="flex-1 flex flex-col items-start justify-center space-y-8 w-full max-w-lg">
        {" "}
        <p className="dark:text-white text-black text-[3.5rem] font-semibold">
          Let's Connect<span className="text-[#5046e6]">.</span>
        </p>
        <form
          className="flex flex-col space-y-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-24 mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                placeholder="John Doe"
                type="text"
                className="w-full"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="johndoe@protonmail.com"
              type="email"
              className="w-full"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 flex-grow">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              placeholder="Type your message here...."
              type="text"
              className="w-full"
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-row space-x-4">
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                LinkedIn
              </span>
              <BottomGradient />
            </button>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandX className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                X (Twitter)
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>

      <div className="flex-1 flex justify-center items-center relative h-[40rem] w-full max-w-xl">
        {" "}
        {/* Increased height from 40rem to 50rem */}
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
