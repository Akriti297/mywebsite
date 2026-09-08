import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ToolkitSection } from './components/ToolkitSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DsaSection } from './components/DsaSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleConnectClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const offset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f6] text-[#211a18] selection:bg-[#ffd9e4] selection:text-[#38081f]">
      {/* Header Navigation */}
      <Header onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1 pt-20">
        <Hero onConnectClick={handleConnectClick} />
        <StatsBar />
        <AboutSection />
        <ToolkitSection />
        <ProjectsSection />
        <DsaSection />
        <CertificationsSection />
        <EducationSection />
        <RoadmapSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
