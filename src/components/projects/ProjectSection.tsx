import React from "react";
import { ProjectBox } from "./projectbox/ProjectBox";
import { Inter } from "next/font/google";
import { Works } from "@/constants/global";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const ProjectSection = () => {
  return (
    <div id="projects" className={`${inter.className} flex flex-col gap-2`}>
      <div className="font-bold text-2xl animate-animfadeLeftSide">
        Other Projects
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Works.map((val, index) => (
          <ProjectBox {...val} key={index} />
        ))}
      </div>
      <div className="font-light text-sm text-center">
        There will be more projects coming here soon...
      </div>
    </div>
  );
};
