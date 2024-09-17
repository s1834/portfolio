import Image from "next/image";
import { About } from "@/components/pages/About";
import { Dock } from "@/components/pages/Dock";
import { Experience } from "@/components/pages/Experience";
import { Achievements } from "@/components/pages/Achievements";
import { Projects } from "@/components/pages/Projects";
import { Skills } from "@/components/pages/Skills";
import { Contact } from "@/components/pages/Contact";
import { Temp } from "@/components/pages/Temp";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      {/* <main className="flex max-h-screen flex-col items-center justify-between px-10 pt-5 bg-gradient-to-b from-custom-start to-custom-end ">
      </main> */}
      <About />
      <Dock />
      <Experience />
      <Achievements />
      <Projects />
      <Skills />
      <Temp />
      <Contact />
    </div>
  );
}
