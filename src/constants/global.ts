import { FeaturedWork, Work } from "@/ts/global";
import kahidlawImage1 from "../../public/featured-projects/kahidlaw/Kahidlaw-1.jpg";
import kahidlawImage2 from "../../public/featured-projects/kahidlaw/Kahidlaw-2.jpg";
import kahidlawImage3 from "../../public/featured-projects/kahidlaw/Kahidlaw-3.jpg";
import kahidlawImage4 from "../../public/featured-projects/kahidlaw/Kahidlaw-4.jpg";
import kahidlawImage5 from "../../public/featured-projects/kahidlaw/Kahidlaw-5.jpg";
import pgdx from "../../public/at-PGDX-2024.jpg";
import hksa1 from "../../public/featured-projects/hksa/HKSA-1.png";
import hksa2 from "../../public/featured-projects/hksa/HKSA-2.png";
import hksa3 from "../../public/featured-projects/hksa/HKSA-3.png";
import hksa4 from "../../public/featured-projects/hksa/HKSA-4.png";
import hksa5 from "../../public/featured-projects/hksa/HKSA-5.png";
import finia1 from "../../public/featured-projects/finia/Finia-1.png";
import finia2 from "../../public/featured-projects/finia/Finia-2.png";
import finia3 from "../../public/featured-projects/finia/Finia-3.png";
import finia4 from "../../public/featured-projects/finia/Finia-4.png";
import finia5 from "../../public/featured-projects/finia/Finia-5.png";
import mahblog1 from "../../public/featured-projects/mahblog/Mahblog-1.png";
import mahblog2 from "../../public/featured-projects/mahblog/Mahblog-2.png";
import mahblog3 from "../../public/featured-projects/mahblog/Mahblog-3.png";
import mahblog4 from "../../public/featured-projects/mahblog/Mahblog-4.png";
import csharp from "../../public/tech-stacks/csharp.svg";
import unity from "../../public/tech-stacks/unity.svg";
import dart from "../../public/tech-stacks/dart.svg";
import flutter from "../../public/tech-stacks/flutter.svg";
import typescript from "../../public/tech-stacks/typescript.svg";
import nextJs from "../../public/tech-stacks/nextjs.svg";
import nodeJs from "../../public/tech-stacks/nodejs.svg";
import expressJs from "../../public/tech-stacks/express.svg";
import prisma from "../../public/tech-stacks/prisma.svg";
import postgreSql from "../../public/tech-stacks/postgresql.svg";
import redis from "../../public/tech-stacks/redis.svg";
import docker from "../../public/tech-stacks/docker.svg";
import firebase from "../../public/tech-stacks/firebase.svg";
import react from "../../public/tech-stacks/react.svg";
import vite from "../../public/tech-stacks/vite.svg";
import azle from "../../public/tech-stacks/azle.svg";
import java from "../../public/tech-stacks/java.svg";
import androidStudio from "../../public/tech-stacks/android-studio.svg";

export const FeaturedWorks: FeaturedWork[] = [
  {
    title: "Kahidlaw",
    description:
      "A 2D top-down mobile game where Marco and Isabel traverse into the different eras of Philippine History. This project was showcased in the PGDX Indie Game Stars 2024 at SMX Convention Center",
    deployment: {
      repository: "https://github.com/marcelee0713/Kahidlaw",
      livePreview:
        "https://drive.google.com/drive/folders/1zHe4ejT1DaI2hcxiw22o_peG-k-uGT8T?usp=sharing",
    },
    toolsUsed: [csharp, unity, firebase],
    images: [
      kahidlawImage1,
      pgdx,
      kahidlawImage2,
      kahidlawImage3,
      kahidlawImage4,
      kahidlawImage5,
    ],
    transitionInterval: 3000,
  },
  {
    title: "HKSA",
    description:
      "H.K.S.A is a mobile application for scholars in PHINMA University of Pangasinan to achieve a convenient, secure, paperless, and less hassle transaction in HK and Non-HK activities.",
    deployment: {
      repository: "https://github.com/marcelee0713/HKSA",
      livePreview:
        "https://drive.google.com/file/d/1oZwk6U9FxtMZQhDTix9eMNMxQiMQZbSF/view?usp=sharing",
    },
    toolsUsed: [dart, flutter, firebase],
    images: [hksa1, hksa2, hksa3, hksa4, hksa5],
    transitionInterval: 3500,
  },
  {
    title: "Finia",
    description:
      "An income and expenses tracker for simplifying financial management for individuals. Why don't you try it out? Have you ever know much you spend this month? The server code architecture is using Clean Architecture.",
    deployment: {
      repository: "https://github.com/marcelee0713/Finia-Server",
      livePreview: "https://finia.vercel.app",
    },
    toolsUsed: [
      typescript,
      nextJs,
      nodeJs,
      expressJs,
      prisma,
      postgreSql,
      redis,
      docker,
    ],
    images: [finia1, finia2, finia3, finia4, finia5],
    transitionInterval: 4000,
  },
  {
    title: "MahBlog",
    description:
      "It's a personal blogging platform where users can document their learning journeys, share their insights, and reflect on their experiences. Using Clean Architecture, FSD Methodology, and Zustand has been making my developer experience better than before!. This project is still in DEVELOPMENT!",
    deployment: {
      repository: "https://github.com/marcelee0713/MahBlog-Server",
    },
    toolsUsed: [
      typescript,
      nextJs,
      nodeJs,
      expressJs,
      prisma,
      postgreSql,
      docker,
    ],
    images: [mahblog1, mahblog2, mahblog3, mahblog4],
    transitionInterval: 4500,
  },
];

export const Works: FeaturedWork[] = [
  {
    title: "NextGen",
    description:
      "NextGenMarketing connects content creators and startups, offering tailored promotional services for effective marketing collaboration in the growing creator economy.",
    deployment: {
      repository: "https://github.com/marcelee0713/NextGenMarketing",
    },
    images: [],
    toolsUsed: [typescript, nextJs],
  },
  {
    title: "InsureChain",
    description:
      "InsureChain is a decentralized platform revolutionizing insurance accessibility and engagement. This platform is created for the iThink Hackathon 2024!",
    deployment: {
      repository: "https://github.com/marcelee0713/InsureChain",
      livePreview: "https://vq3r3-bqaaa-aaaak-qignq-cai.icp0.io/",
    },
    images: [],
    toolsUsed: [typescript, react, vite, azle],
  },
  {
    title: "UPay",
    description:
      "UPay is a dedicated e-wallet application exclusively for PHINMA students. This innovative platform allows students to earn points through various activities and achievements. This app was created for the CodeFest 2024 Hackathon!",
    deployment: {
      repository: "https://github.com/marcelee0713/UPay",
    },
    images: [],
    toolsUsed: [dart, flutter, firebase],
  },
  {
    title: "Flamehub",
    description: `Flamehub is a social media app, this application is only available
              to PHINMA-University of Pangasinan students and faculty members
              from all college departments to share their thoughts, journey
              updates, or conclusions with a network of friends or followers and
              shouts on campus.`,
    deployment: {
      repository: "https://gitlab.com/marcelee0713/flamehub-web",
    },
    images: [],
    toolsUsed: [typescript, nextJs, nodeJs, expressJs, prisma, postgreSql],
  },
  {
    title: "AIA FIT App",
    description:
      "An application created for the AIA Lifehackers 2022: Hackventure, where we placed 4th! We created a Website, App, and also a game!",
    deployment: {
      repository:
        "https://gitlab.com/marcelee0713/aia-lifehackers-upcite-flutter",
    },
    images: [],
    toolsUsed: [dart, flutter, firebase],
  },
  {
    title: "PNP SPIT App",
    description:
      "An application created for the PNP ITMS 2022 Hackathon. We created a website and mobile app and we won!",
    deployment: {
      repository: "https://gitlab.com/bryanalejo288/gps",
    },
    images: [],
    toolsUsed: [java, androidStudio, firebase],
  },
];
