import { StaticImageData } from "next/image";

export interface FeaturedWork {
  title: string;
  description: string;
  images: StaticImageData[];
  toolsUsed: any[];
  deployment: {
    livePreview?: string;
    repository: string;
  };
  transitionInterval?: number;
}

export type Work = {
  title: string;
  desc: string;
  repo: string;
  livePreview: string;
};
