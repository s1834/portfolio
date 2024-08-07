import Image from "next/image";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* <main className="flex max-h-screen flex-col items-center justify-between px-10 pt-5 bg-gradient-to-b from-custom-start to-custom-end ">
      </main> */}
      <About />
    </div>
  );
}
