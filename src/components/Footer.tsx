import React from 'react';
import { ArrowUp, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="main-footer" className="w-full bg-[#fff1ed] border-t border-[#d5c2c6]/40">
      {/* Upper Footer Tier */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#d5c2c6]/30">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[17px] text-[#211a18]">
              {PERSONAL_INFO.brandName}
              <span className="text-[#72384f] font-mono text-[13px]">{PERSONAL_INFO.domain}</span>
            </span>
            <span className="text-[#837377] font-mono text-xs">•</span>
            <span className="text-[13px] text-[#514347]">
              B.Tech AI &amp; Data Science at REVA Univ
            </span>
          </div>
          <span className="text-[13px] text-[#837377]">
            © 2026 {PERSONAL_INFO.name}. Crafted with elegance &amp; code.
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-[12px] text-[#514347]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#72384f] transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#72384f] transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#72384f] transition-colors flex items-center gap-1"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>LeetCode</span>
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#72384f] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Editorial Colophon Tier */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#514347]">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-semibold text-[#211a18]">
            {PERSONAL_INFO.name} <span className="font-mono text-[#72384f]">[AI &amp; Data Science]</span>
          </span>
          <span className="hidden sm:inline text-[#d5c2c6]">|</span>
          <span className="text-[#837377]">
            Crafting intelligent systems through warm editorial engineering and rigorous precision.
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px]">
          <button
            onClick={scrollToTop}
            className="text-[#72384f] hover:underline cursor-pointer"
          >
            Top ↑
          </button>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-[#72384f] hover:underline"
          >
            Selected Works
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-[#72384f] hover:underline"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </footer>
  );
};
