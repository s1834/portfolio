"use client";
import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import IconCloud from "@/app/components/magicui/icon-cloud";
import emailjs from "@emailjs/browser";

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
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here...."
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
               disabled:cursor-not-allowed disabled:opacity-50
               dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
               group-hover/input:shadow-none transition duration-400"
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
            {/* GitHub Button */}
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              onClick={() => window.open("https://github.com/s1834", "_blank")}
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>

            {/* LinkedIn Button */}
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              onClick={() =>
                window.open("https://linkedin.com/in/s1834", "_blank")
              }
              type="button"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                LinkedIn
              </span>
              <BottomGradient />
            </button>

            {/* X (Twitter) Button */}
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              onClick={() => window.open("https://twitter.com/s1834", "_blank")}
              type="button"
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

// "use client";

// import React, { useRef } from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { cn } from "@/lib/utils";
// import {
//   IconBrandGithub,
//   IconBrandLinkedin,
//   IconBrandX,
// } from "@tabler/icons-react";
// import IconCloud from "@/app/components/magicui/icon-cloud";
// import emailjs from "@emailjs/browser";

// const slugs = [
//   "amazonaws",
//   "bootstrap",
//   "c",
//   "cloudflare",
//   "cplusplus",
//   "css3",
//   "figma",
//   "flask",
//   "git",
//   "github",
//   "html5",
//   "java",
//   "javascript",
//   "linux",
//   "markdown",
//   "mongodb",
//   "mysql",
//   "netlify",
//   "nextdotjs",
//   "nodedotjs",
//   "numpy",
//   "pandas",
//   "postgresql",
//   "postman",
//   "python",
//   "react",
//   "render",
//   "rust",
//   "swift",
//   "tailwindcss",
//   "typescript",
//   "vercel",
// ];

// export function Contact() {
//   const form = useRef<HTMLFormElement | null>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//         .sendForm(
//           process.env.NEXT_PUBLIC_SERVICE_ID!,
//           process.env.NEXT_PUBLIC_TEMPLATE_ID!,
//           form.current,
//           process.env.NEXT_PUBLIC_PUBLIC_KEY!
//         )
//         .then(
//           (result) => {
//             console.log("SUCCESS!", result.text);
//           },
//           (error) => {
//             console.log("FAILED...", error.text);
//           }
//         );
//     }
//   };

//   return (
//     <div
//       className="flex flex-col md:flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-neutral-950 bg-white relative w-full space-y-8 md:space-y-0 md:space-x-8 gap-28"
//       id="Contact"
//     >
//       <div className="flex-1 flex flex-col items-start justify-center space-y-8 w-full max-w-lg">
//         <p className="dark:text-white text-black text-[3.5rem] font-semibold">
//           Let's Connect<span className="text-[#5046e6]">.</span>
//         </p>
//         <form
//           ref={form}
//           className="flex flex-col space-y-4 w-full"
//           onSubmit={sendEmail}
//         >
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-24 mb-4">
//             <LabelInputContainer>
//               <Label htmlFor="fullname">Full Name</Label>
//               <Input
//                 id="fullname"
//                 name="user_name"
//                 placeholder="John Doe"
//                 type="text"
//                 className="w-full"
//               />
//             </LabelInputContainer>
//           </div>
//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="email">Email Address</Label>
//             <Input
//               id="email"
//               name="user_email"
//               placeholder="johndoe@protonmail.com"
//               type="email"
//               className="w-full"
//             />
//           </LabelInputContainer>
//           <LabelInputContainer className="mb-4 flex-grow">
//             <Label htmlFor="message">Message</Label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Type your message here...."
//               className="w-full p-2 rounded-md border dark:bg-neutral-900 dark:border-neutral-800"
//             />
//           </LabelInputContainer>
//           <button
//             className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//             type="submit"
//           >
//             Send Message &rarr;
//             <BottomGradient />
//           </button>

//           <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

//           <div className="flex flex-row space-x-4">
//             <SocialButton
//               Icon={IconBrandGithub}
//               label="GitHub"
//               href="https://github.com"
//             />
//             <SocialButton
//               Icon={IconBrandLinkedin}
//               label="LinkedIn"
//               href="https://linkedin.com"
//             />
//             <SocialButton
//               Icon={IconBrandX}
//               label="X (Twitter)"
//               href="https://twitter.com"
//             />
//           </div>
//         </form>
//       </div>

//       <div className="flex-1 flex justify-center items-center relative h-[40rem] w-full max-w-xl">
//         <IconCloud iconSlugs={slugs} />
//       </div>
//     </div>
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };

// // Update the Icon prop type to accept any valid React component type
// const SocialButton = ({
//   Icon,
//   label,
//   href,
// }: {
//   Icon: React.ElementType; // Use React.ElementType for compatibility with ForwardRefExoticComponent
//   label: string;
//   href: string;
// }) => (
//   <a href={href} target="_blank" rel="noopener noreferrer">
//     <button
//       className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//       type="button"
//     >
//       <Icon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//       <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//         {label}
//       </span>
//       <BottomGradient />
//     </button>
//   </a>
// );

// "use client";

// import React, { useRef, useState } from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { cn } from "@/lib/utils";
// import {
//   IconBrandGithub,
//   IconBrandLinkedin,
//   IconBrandX,
// } from "@tabler/icons-react";
// import IconCloud from "@/app/components/magicui/icon-cloud";
// import emailjs from "@emailjs/browser";

// // List of tech slugs for the icon cloud
// const slugs = [
//   "amazonaws",
//   "bootstrap",
//   "c",
//   "cloudflare",
//   "cplusplus",
//   "css3",
//   "figma",
//   "flask",
//   "git",
//   "github",
//   "html5",
//   "java",
//   "javascript",
//   "linux",
//   "markdown",
//   "mongodb",
//   "mysql",
//   "netlify",
//   "nextdotjs",
//   "nodedotjs",
//   "numpy",
//   "pandas",
//   "postgresql",
//   "postman",
//   "python",
//   "react",
//   "render",
//   "rust",
//   "swift",
//   "tailwindcss",
//   "typescript",
//   "vercel",
// ];

// export function Contact() {
//   const form = useRef<HTMLFormElement | null>(null);
//   const [statusMessage, setStatusMessage] = useState<string | null>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
//     const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
//     const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

//     if (!serviceId || !templateId || !publicKey) {
//       console.error("Missing required environment variables.");
//       setStatusMessage("Email service is not properly configured.");
//       return;
//     }

//     if (form.current) {
//       emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
//         (result) => {
//           console.log("SUCCESS!", result.text);
//           setStatusMessage("Your message has been sent successfully!");
//         },
//         (error) => {
//           console.error("FAILED...", error.text);
//           setStatusMessage("Failed to send your message. Please try again.");
//         }
//       );
//     }
//   };

//   return (
//     <div
//       className="flex flex-col md:flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-neutral-950 bg-white relative w-full space-y-8 md:space-y-0 md:space-x-8 gap-28"
//       id="Contact"
//     >
//       <div className="flex-1 flex flex-col items-start justify-center space-y-8 w-full max-w-lg">
//         <p className="dark:text-white text-black text-[3.5rem] font-semibold">
//           Let's Connect<span className="text-[#5046e6]">.</span>
//         </p>

//         <form
//           ref={form}
//           className="flex flex-col space-y-4 w-full"
//           onSubmit={sendEmail}
//         >
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-24 mb-4">
//             <LabelInputContainer>
//               <Label htmlFor="fullname">Full Name</Label>
//               <Input
//                 id="fullname"
//                 name="from_name"
//                 placeholder="John Doe"
//                 type="text"
//                 className="w-full"
//               />
//             </LabelInputContainer>
//           </div>
//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="email">Email Address</Label>
//             <Input
//               id="email"
//               name="reply_to"
//               placeholder="johndoe@protonmail.com"
//               type="email"
//               className="w-full"
//             />
//           </LabelInputContainer>
//           <LabelInputContainer className="mb-4 flex-grow">
//             <Label htmlFor="message">Message</Label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Type your message here...."
//               className="w-full p-2 rounded-md border dark:bg-neutral-900 dark:border-neutral-800"
//             />
//           </LabelInputContainer>
//           <button
//             className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//             type="submit"
//           >
//             Send Message &rarr;
//             <BottomGradient />
//           </button>

//           {/* Display status message */}
//           {statusMessage && (
//             <p className="text-center mt-4 text-sm text-red-600 dark:text-red-400">
//               {statusMessage}
//             </p>
//           )}

//           <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

//           <div className="flex flex-row space-x-4">
//             <SocialButton
//               Icon={IconBrandGithub}
//               label="GitHub"
//               href="https://github.com/s1834"
//             />
//             <SocialButton
//               Icon={IconBrandLinkedin}
//               label="LinkedIn"
//               href="https://linkedin.com/in/s1834"
//             />
//             <SocialButton
//               Icon={IconBrandX}
//               label="X (Twitter)"
//               href="https://twitter.com/s1834"
//             />
//           </div>
//         </form>
//       </div>

//       <div className="flex-1 flex justify-center items-center relative h-[40rem] w-full max-w-xl">
//         <IconCloud iconSlugs={slugs} />
//       </div>
//     </div>
//   );
// }

// // Bottom Gradient for hover effect
// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// // LabelInputContainer component for handling form input containers
// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };

// // SocialButton component for the social media buttons
// const SocialButton = ({
//   Icon,
//   label,
//   href,
// }: {
//   Icon: React.ElementType;
//   label: string;
//   href: string;
// }) => (
//   <a href={href} target="_blank" rel="noopener noreferrer">
//     <button
//       className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//       type="button"
//     >
//       <Icon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//       <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//         {label}
//       </span>
//       <BottomGradient />
//     </button>
//   </a>
// );
