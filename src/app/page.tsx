// import { Nav } from "@/app/components/pages/Nav";
import { About } from "@/app/components/pages/About";
import { Dock } from "@/app/components/pages/Dock";
import Experience from "@/app/experience/page";
// import { Skills } from "@/app/components/pages/Skills";
import Projects from "@/app/projects/page";
import { Achievements } from "@/app/components/pages/Achievements";
import { Contact } from "@/app/components/pages/Contact";
// import { Temp } from "@/app/components/pages/Temp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      {/* <main className="flex max-h-screen flex-col items-center justify-between px-10 pt-5 bg-gradient-to-b from-custom-start to-custom-end ">
      </main> */}
      {/* <Nav /> */}
      <About />
      <Experience />
      <Dock />
      {/* <Skills /> */}
      <Projects />
      <Achievements />
      <Contact />
      {/* <Temp />  */}
    </div>
  );
}
