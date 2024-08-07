"use client";

export default function About() {
  return (
    <div className="flex flex-col max-w-screen h-screen bg-blue-600 rounded-lg">
      <div className="flex flex-col max-w-screen h-screen bg-purple-600 rounded-lg m-2.5">
        <div className="flex flex-col justify-center bg-red-500 m-10">
          <section className="items-center w-full gap-10">
            <h1>Shubh Shah</h1>
          </section>
          <section className="flex w-full items-center justify-end gap-8">
            <label className="relative block">
              <span>Archieve</span>
              <span>HI</span>
            </label>
          </section>
        </div>
        {/* <div className="flex flex-grow items-center justify-center max-w-full max-h-full bg-blue-400 m-10">
          hi
        </div> */}
        <div className="flex flex-col justify-center bg-red-500 h-4/6 m-10 items-center">
          <p className="text-3xl leading-loose">
            Hello, World!! I'm Shubh Shah, a full stack developer specializing
            in web development <br /> and competitive programming. I enjoy
            crafting intuitive websites and solving <br /> complex coding
            challenges, always exploring new technologies to <br /> enhance user
            experiences and create innovative solutions.
          </p>
          <br /> <br />
          <p className="text-3xl">
            → <span className="underline">Get in touch</span>
          </p>
        </div>

        <div className="flex flex-col justify-center bg-red-500 m-10">
          <section className="flex w-full items-center justify-end gap-8">
            <label className="relative block">
              <span>Scroll to discover ↓</span>
            </label>
          </section>
        </div>
      </div>
    </div>
  );
}
