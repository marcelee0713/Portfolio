import { FeaturedWorks } from "@/constants/global";
import React from "react";
import { FeaturedProjectBox } from "./FeaturedProjectBox";

export const FeaturedProjects = () => {
  return (
    <div id="projects" className={`flex flex-col gap-2`}>
      <div className="font-bold text-2xl animate-animfadeLeftSide">
        Featured Projects
      </div>
      <div className="grid lg:grid-cols-2 gap-5 ">
        {FeaturedWorks.map((val, i) => {
          return <FeaturedProjectBox {...val} key={val.title} />;
        })}
      </div>
    </div>
  );
};
