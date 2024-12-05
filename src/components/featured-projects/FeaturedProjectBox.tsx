import { FeaturedWork } from "@/ts/global";
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./Carousel";

export const FeaturedProjectBox = ({
  images,
  deployment,
  description,
  title,
  toolsUsed,
  transitionInterval,
}: FeaturedWork) => {
  return (
    <div className="flex flex-col min-h-[600px] h-auto animate-animfadeBelow rounded-lg shadow-lg">
      <Carousel images={images} interval={transitionInterval} />

      <div className="flex flex-col gap-2 min-h-[200px]  py-3 px-5 bg-secondary text-primary rounded-b-lg border">
        <div className="flex-1 flex flex-col gap-1 text-xl">
          <div className="font-bold">{title}</div>
          <div className="text-sm overflow-y-auto fade h-full no-scrollbar">
            {description}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center items-start  gap-2 w-full  justify-between">
          <div className="flex gap-2 items-center">
            {toolsUsed.map((val) => (
              <Image src={val} alt="icon-svg" width={25} height={25} />
            ))}
          </div>
          <div className="self-end flex gap-2 items-center">
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
    </div>
  );
};
