import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const AboutSection = () => {
  return (
    <div id="about" className={`${inter.className} flex flex-col gap-2`}>
      <div className="font-bold text-2xl animate-animfadeLeftSide">
        About Me
      </div>
      <div className="flex flex-col gap-2 animate-animfadeBelow">
        <p>
          Just a guy who loves to create Web and Mobile Application. Currently
          22 years old and I&lsquo;m still studying. But, I also like solve
          coding problems during my free time.
        </p>

        <p>If you ever want to contact me magbualmarcel@gmail.com</p>
      </div>
    </div>
  );
};
