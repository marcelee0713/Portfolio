"use client";

import { useState, useEffect } from "react";
import Switch from "react-switch";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaCode, FaInfoCircle, FaFileAlt } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  let storageTheme: string | null;

  if (typeof window !== "undefined") {
    storageTheme = localStorage.getItem("MarcelPortfolioTheme");
    !storageTheme && setTheme("light");
  }

  useEffect(() => {
    setMounted(true);
    if (storageTheme === "dark") {
      setTheme("dark");
      setIsChecked(true);
    } else {
      setTheme("light");
      setIsChecked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-between px-4 py-2 sticky items-center top-0 z-10 bg-white dark:bg-primary animate-animfadeBelow">
      <div className="flex gap-2 text-primary dark:text-secondary">
        <a href="#projects">
          <FaCode />
        </a>
        <a href="#about">
          <FaInfoCircle />
        </a>
        <a href="/resume.pdf" download={"marcel-magbual-resume"}>
          <FaFileAlt />
        </a>
      </div>
      <Switch
        checked={isChecked}
        onChange={() => {
          if (!isChecked) {
            localStorage.setItem("MarcelPortfolioTheme", "dark");
            setTheme("dark");
            setIsChecked(true);
            return;
          }

          localStorage.setItem("MarcelPortfolioTheme", "light");
          setTheme("light");
          setIsChecked(false);
        }}
        handleDiameter={20}
        offColor="#2B2B2B"
        onColor="#101010"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        uncheckedIcon={
          <Image fill src={"/moon.svg"} alt={"A moon icon"} className="p-1" />
        }
        checkedIcon={
          <Image fill src={"/sun.svg"} alt={"A sun icon"} className="p-1" />
        }
      />
    </div>
  );
};

export default ThemeSwitcher;
