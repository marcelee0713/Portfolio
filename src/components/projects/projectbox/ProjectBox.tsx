import { FeaturedWork, Work } from "@/ts/global";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export const ProjectBox = ({
  title,
  deployment,
  description,
  toolsUsed,
}: FeaturedWork) => {
  return (
    <div className="flex flex-col p-4 gap-1 bg-secondary text-primary h-projectBoxHeight  duration-300 animate-animfadeLeftSide shadow-lg border rounded-lg ">
      <h2 className="font-bold">{title}</h2>

      <hr className="border-myColors-dark" />

      <p className="text-sm flex-1 overflow-y-auto no-scrollbar fade">
        {description}
      </p>

      <div className="flex items-center w-full gap-2 justify-between">
        <div className="flex gap-2 items-center">
          {toolsUsed.map((val, i) => (
            <Image src={val} alt="icon-svg" width={25} height={25} key={i} />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <a href={deployment.repository}>
            <div className="cursor-pointer hover:-translate-y-1 duration-300">
              <FaGithub />
            </div>
          </a>

          {deployment.livePreview && (
            <a href={deployment.livePreview}>
              <div className="cursor-pointer hover:-translate-y-1 duration-300">
                <FaExternalLinkAlt />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
