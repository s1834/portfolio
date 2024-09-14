"use client";

import { Dock } from "@/components/pages/Dock";
export default function Projects() {
  return (
    <div className="flex flex-col w-screen h-screen bg-blue-600 rounded-lg">
      <div className="grid grid-rows-12 grid-flow-col h-5/6 gap-4 m-10">
        <div className="row-span-12 col-span-6 bg-blue-500 rounded-lg">
          P <br /> R <br /> O <br /> J <br /> E <br /> C <br /> T <br /> S
        </div>
        <div className="row-span-7 col-span-6  bg-blue-500  rounded-lg">
          Project 01
        </div>
        <div className="row-span-5 col-span-6  bg-blue-500  rounded-lg">
          Project 02
        </div>
        <div className="row-span-4 col-span-6 bg-blue-500 rounded-lg">
          Project 03
        </div>
        <div className="row-span-8 col-span-6  bg-blue-500  rounded-lg">
          Project 04
        </div>
        <div className="row-span-7 col-span-6  bg-blue-500  rounded-lg">
          Project 05
        </div>
        <div className="row-span-5 col-span-6 bg-blue-500 rounded-lg">
          Project 06
        </div>
      </div>
      <Dock />
    </div>
  );
}
