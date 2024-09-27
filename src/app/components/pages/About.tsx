"use client";

import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export function About() {
  return (
    <BackgroundGradientAnimation>
      <div id="About" className="bg-white dark:bg-neutral-950 min-h-screen">
        <div className="absolute z-50 inset-0 flex items-center justify-center dark:text-white text-black font-bold px-4 pointer-events-none text-lg text-left md:text-xl lg:text-4xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b dark:from-white/80 dark:to-white/40 from-black/80 to-black/40">
            Hello, World!! I'm Shubh Shah (s1834), a full stack developer <br />
            specializing in web development and competitive programming. <br />
            I enjoy crafting intuitive websites and solving complex coding
            challenges, <br /> always exploring new technologies to enhance user
            experiences and <br /> create innovative solutions.
            <br /> <br /> <br />
            <a
              href="#Contact"
              className="cursor-pointer z-50 dark:text-white/60 text-black/60 text-md pointer-events-auto"
            >
              ➞<span className="underline p-1">Get in touch</span>
            </a>
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
