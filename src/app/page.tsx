import { AboutSection } from "@/components/about/about";
import { FeaturedProjects } from "@/components/featured-projects/FeatureProjects";
import { IntroSection } from "@/components/intro/IntroSection";
import { ProjectSection } from "@/components/projects/ProjectSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <FeaturedProjects />
      <ProjectSection />
    </>
  );
}
