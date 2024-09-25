"use client";
import React from "react";
import { Temp1 } from "@/app/components/pages/Temp1";
import { Temp2 } from "@/app/components/pages/Temp2";

export function Temp() {
  return (
    <div className="h-full bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-20 flex flex-col">
      <Temp1 />
      <Temp2 />
    </div>
  );
}
