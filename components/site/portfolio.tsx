"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { AboutSection } from "@/components/site/about";
import { ContactSection } from "@/components/site/contact";
import { EducationAndCertificationsSection } from "@/components/site/education-certifications";
import { ExperienceSection } from "@/components/site/experience";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero";
import { LoadingScreen } from "@/components/site/loading-screen";
import { Navbar } from "@/components/site/navbar";
import { ProjectsSection } from "@/components/site/projects";
import { SkillsSection } from "@/components/site/skills";

export function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading ? <LoadingScreen /> : null}</AnimatePresence>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationAndCertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
