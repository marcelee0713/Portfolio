import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { workBox } from "../ProjectSection";

export const ProjectBox = (props: workBox) => {
  return (
    <div className="flex flex-col p-4 bg-primary text-secondary dark:bg-secondary dark:text-primary justify-between h-projectBoxHeight duration-300 animate-animfadeLeftSide shadow-lg">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold">{props.title}</h2>
        <hr className="border-myColors-dark" />
        <p className="text-sm">{props.desc}</p>
      </div>

      <div className="self-end flex gap-2">
        <a href={props.repo}>
          <div className="cursor-pointer hover:-translate-y-1 duration-300">
            <FaGithub />
          </div>
        </a>
        <a href={props.livePreview}>
          <div className="cursor-pointer hover:-translate-y-1 duration-300">
            <FaExternalLinkAlt />
          </div>
        </a>
      </div>
    </div>
  );
};
