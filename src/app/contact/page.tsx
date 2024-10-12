"use client";
import React, { useEffect, useState, useRef } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import IconCloud from "@/app/components/magicui/icon-cloud";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        const data = await response.json();
        if (data && data.data) {
          setSkills(data.data.map((skill) => skill.slug));
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !key) {
      console.error(
        "Missing environment variables. Please ensure Service ID, Template ID, and Public Key are properly set."
      );
      toast.error("Failed to send message. Please try again later.");
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, key).then(
        () => {
          console.log("Email successfully sent!");
          toast.success("Message Sent!");
          e.target.reset();
        },
        (error) => {
          console.error("Email sending failed. Error details:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
    } else {
      console.error("Form reference is null. Unable to send email.");
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-neutral-950 bg-white relative w-full space-y-8 md:space-y-0 md:space-x-8 gap-28"
      id="Contact"
    >
      <div className="flex-1 flex flex-col items-start justify-center space-y-8 w-full max-w-lg">
        <p className="dark:text-white text-black text-[3.5rem] font-semibold">
          Let's Connect<span className="text-[#5046e6]">.</span>
        </p>
        <form
          className="flex flex-col space-y-4 w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-24 mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                placeholder="John Doe"
                type="text"
                name="user_name"
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
              name="user_email"
              className="w-full"
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4 flex-grow">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Type your message here...."
              name="message"
              required
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>

          <Toaster />

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-row space-x-4">
            <SocialButton
              href="https://github.com/s1834"
              icon={<IconBrandGithub className="h-4 w-4" />}
              label="GitHub"
            />
            <SocialButton
              href="https://linkedin.com/in/s1834"
              icon={<IconBrandLinkedin className="h-4 w-4" />}
              label="LinkedIn"
            />
            <SocialButton
              href="https://twitter.com/s1834_"
              icon={<IconBrandX className="h-4 w-4" />}
              label="X (Twitter)"
            />
          </div>
        </form>
      </div>

      <div className="flex-1 flex justify-center items-center relative h-[40rem] w-full max-w-xl">
        <IconCloud iconSlugs={skills} />
      </div>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className = "" }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const SocialButton = ({ href, icon, label }) => {
  return (
    <button
      className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      onClick={() => window.open(href, "_blank")}
      type="button"
    >
      {icon}
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        {label}
      </span>
      <BottomGradient />
    </button>
  );
};
