import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillsAchievements from "@/components/sections/SkillsAchievements";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillsAchievements />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
