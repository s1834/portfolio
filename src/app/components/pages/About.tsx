"use client";

import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function About() {
  return (
    <BackgroundGradientAnimation>
      <div id="About">
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-lg text-left md:text-xl lg:text-4xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/40">
            Hello, World!! I'm Shubh Shah (s1834), a full stack developer <br />
            specializing in web development and competitive programming. <br />
            I enjoy crafting intuitive websites and solving complex coding
            challenges, <br /> always exploring new technologies to enhance user
            experiences and <br /> create innovative solutions.
            <br /> <br /> <br />
            <a href="#Contact" className=" cursor-pointer z-50">
              <p className="text-white/60  text-md underline">➞Get in touch</p>
            </a>
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
