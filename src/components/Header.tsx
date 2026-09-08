import React, { useState, useEffect } from 'react';
import { Menu, X, User, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fff8f6]/90 backdrop-blur-md border-b border-[#d5c2c6]/40 shadow-[0_4px_20px_-2px_rgba(142,79,103,0.08)]'
          : 'bg-[#fff8f6]/85 backdrop-blur-sm border-b border-[#d5c2c6]/30 shadow-[0_4px_20px_-2px_rgba(142,79,103,0.06)]'
      }`}
    >
      <div className="h-20 max-w-[1200px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center text-[#211a18] hover:text-[#72384f] transition-colors group"
          >
            <span className="text-[22px] font-semibold tracking-tight">{PERSONAL_INFO.brandName}</span>
            <span className="font-mono text-[13px] text-[#72384f] font-medium">{PERSONAL_INFO.domain}</span>
            <span className="w-2 h-2 rounded-full bg-[#8e4f67] inline-block ml-0.5 group-hover:scale-125 transition-transform"></span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav id="desktop-navigation" className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                id={`nav-${link.href.substring(1)}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[14px] transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#72384f] font-medium'
                    : 'text-[#514347] hover:text-[#72384f]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#72384f] rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <button
            id="header-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-1.5 bg-[#8e4f67] hover:bg-[#72384f] text-[#fff8f6] font-mono text-[11px] font-medium tracking-wide uppercase px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:scale-[1.02] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>

          <a
            id="header-avatar-badge"
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            title="Akriti Srivastava - Profile"
            className="w-8 h-8 rounded-full bg-[#72384f] hover:bg-[#8e4f67] flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-xs"
          >
            <User className="w-[18px] h-[18px] text-[#ffffff]" />
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#514347] hover:text-[#72384f] hover:bg-[#f9ebe7] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-[#fff8f6] border-b border-[#d5c2c6]/50 px-6 py-4 shadow-lg flex flex-col gap-3"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#f9ebe7] text-[#72384f]'
                    : 'text-[#514347] hover:bg-[#fff1ed] hover:text-[#72384f]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#72384f]"></span>}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
