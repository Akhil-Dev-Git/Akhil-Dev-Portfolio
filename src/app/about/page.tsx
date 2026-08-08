import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden w-full relative pt-24">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
