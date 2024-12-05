import { Inter } from "next/font/google";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const IntroSection = () => {
  return (
    <div
      className={`${inter.className} flex flex-col lg:flex-row lg:justify-center lg:gap-5 items-center gap-2 text-center animate-animfadeAbove text-primary dark:text-secondary`}
    >
      <div className="relative w-60 lg:w-96 h-60 lg:h-96">
        <Image
          src={"/me.jpg"}
          alt="Ako ito si Marcel"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="font-bold text-2xl lg:text-4xl flex gap-1 justify-center">
          <span>Hello!</span> <span className="animate-wiggle">👋</span>
        </div>
        <div className="flex flex-col">
          <div className="font-bold lg:text-2xl">
            I&lsquo;m Marcel Paolo De Castro Magbual
          </div>
          <div className="font-light text-sm lg:text-lg">
            a senior BSIT Student at PHINMA University of Pangasinan
          </div>
        </div>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/ymbaj">
            <FaFacebook size={25} />
          </a>
          <a href="https://twitter.com/Marcelee13">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.instagram.com/marcelaylay/">
            <FaInstagram size={25} />
          </a>
          <a href="https://www.linkedin.com/in/marcel-magbual-48570a218/">
            <FaLinkedin size={25} />
          </a>
          <a href="https://github.com/marcelee0713">
            <FaGithub size={25} />
          </a>
          <a href="https://gitlab.com/marcelee0713">
            <FaGitlab size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
