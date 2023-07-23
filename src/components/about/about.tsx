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
        About Me 👨
      </div>
      <div className="grid grid-cols-myGridTemplate gap-2 animate-animfadeBelow">
        <div className="flex flex-col">
          <div className="font-bold">Who am I?</div>
          <div className="font-light">
            <p>
              Just guy who loves to create Web and Mobile Application. Currently
              20 years old and I&lsquo;m still studying in college. But I also
              like creating stuff on my free time.
            </p>

            <p>
              And also on my 3rd year of college, and I really hope I could
              finish my 3 projects.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-myGridTemplate gap-2 animate-animfadeBelow">
        <div className="flex flex-col">
          <div className="font-bold">What&lsquo;s your motivation?</div>
          <div className="font-light">
            In this present time, I just really want to work on a tech job.
            Because I want to be around with everybody who&lsquo;s like me and
            better than me that could also teach me!
          </div>
        </div>
      </div>
      <div className="grid grid-cols-myGridTemplate gap-2 animate-animfadeBelow">
        <div className="flex flex-col">
          <div className="font-bold">What&lsquo;s your stack?</div>
          <div className="font-light">
            NextJS, Prisma, TypeScript, Express, Firebase, and Flutter
          </div>
        </div>
      </div>
      <div className="grid grid-cols-myGridTemplate gap-2 animate-animfadeBelow">
        <div className="flex flex-col">
          <div className="font-bold">Where can I contact you?</div>
          <div className="font-light text-sm">magbualmarcel@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
