import React from "react";
import { ProjectBox } from "./projectbox/ProjectBox";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export type workBox = {
  title: string;
  desc: string;
  repo: string;
  livePreview: string;
};

const data: workBox[] = [
  {
    title: "HKSA",
    desc: "One of the big projects with a team, but it is currently on private and there is no live preview due to being a mobile application. I've used Flutter and Firebase for this one.",
    livePreview: "",
    repo: "https://github.com/marcelee0713/HKSA",
  },
  {
    title: "Thoughts",
    desc: "Is it currently on production, and this website is to let out their insights, rants, and thoughts. If you have something to let out, just visit this website!",
    livePreview: "https://thoughts-marcelee0713.vercel.app/",
    repo: "https://github.com/marcelee0713/Thoughts",
  },
  {
    title: "Image Gallery",
    desc: "This one is is just for learning NextJS and using the API of Unplash! Feel free to check it out on how the new App Router works!",
    livePreview: "https://next-js-image-gallery-kohl.vercel.app/",
    repo: "https://github.com/marcelee0713/NextJS-Image-Gallery",
  },
  {
    title: "To-Do List",
    desc: "A cliché project, but it taught me a lot about an array having objects or what we called “array of objects”. Over all I had fun and did struggled a bit.",
    livePreview: "https://marcelee0713.github.io/To-Do-List/",
    repo: "https://github.com/marcelee0713/To-Do-List",
  },
  {
    title: "Tic-Tac-Toe",
    desc: "A starter project I made a long time ago.",
    livePreview: "https://marcelee0713.github.io/Tic-Tac-Toe/",
    repo: "https://github.com/marcelee0713/Tic-Tac-Toe",
  },
  {
    title: "Battleship",
    desc: "This was really fun and challenging. Thanks to data structures and algorithms I manage to create the AI’s Hit Feature!",
    livePreview: "https://marcelee0713.github.io/Battleship/",
    repo: "https://github.com/marcelee0713/Battleship",
  },
  {
    title: "Rock Paper Scissors",
    desc: "Also one of the cliché project that every single developer has ever done.",
    livePreview: "https://marcelee0713.github.io/RockPaperScissorsWithJS/",
    repo: "https://github.com/marcelee0713/RockPaperScissorsWithJS",
  },
  {
    title: "Etch-a-Sketch",
    desc: "An pixel drawer that you can also adjust its size!",
    livePreview: "https://marcelee0713.github.io/Etch-a-Sketch/",
    repo: "https://github.com/marcelee0713/Etch-a-Sketch",
  },
];

export const ProjectSection = () => {
  return (
    <div id="projects" className={`${inter.className} flex flex-col gap-2`}>
      <div className="font-bold text-2xl animate-animfadeLeftSide">
        Projects 💻
      </div>
      <div className="grid grid-cols-myGridTemplate gap-2">
        {data.map((val, index) => (
          <ProjectBox
            title={val.title}
            desc={val.desc}
            repo={val.repo}
            livePreview={val.livePreview}
            key={index}
          />
        ))}
      </div>
      <div className="font-light text-sm text-center">
        There will be more projects coming here soon...
      </div>
    </div>
  );
};
