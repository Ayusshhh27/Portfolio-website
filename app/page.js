import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import AchievementsSection from "./Components/AchievementsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[rgb(17,7,9)]">
        <section className="container mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
