import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin, Award } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, EDUCATION_TIMELINE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const resumeText = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.degree} • ${PERSONAL_INFO.university}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

## EDUCATION
- **${EDUCATION_TIMELINE[0].institution}**: ${EDUCATION_TIMELINE[0].degree} (${EDUCATION_TIMELINE[0].period})
  - Semester 1: 8.96 SGPA | Semester 2: 9.40 SGPA
- **${EDUCATION_TIMELINE[1].institution}**: ${EDUCATION_TIMELINE[1].degree}

## TECHNICAL SKILLS
- **Languages**: C, C++17, Python 3, SQL, JavaScript, HTML5, CSS3
- **Tools & Systems**: Git, GitHub, MySQL, Linux Bash, VS Code
- **Core Topics**: Data Structures & Algorithms, OOP Principles, Relational Schema Design

## PROJECTS
- **${PROJECTS[0].title}** (${PROJECTS[0].category}): ${PROJECTS[0].description}
- **${PROJECTS[1].title}** (${PROJECTS[1].category}): ${PROJECTS[1].description}

## CERTIFICATIONS
- **${CERTIFICATIONS[0].issuer}**: ${CERTIFICATIONS[0].title} (${CERTIFICATIONS[0].category})
- **${CERTIFICATIONS[1].issuer}**: ${CERTIFICATIONS[1].title} (${CERTIFICATIONS[1].category})
`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#211a18]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-dialog"
        className="bg-[#ffffff] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#d5c2c6]/50 overflow-hidden my-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header */}
        <div className="bg-[#fff1ed] px-6 py-4 border-b border-[#d5c2c6]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-[#72384f] uppercase tracking-wider">
              CURRICULUM VITAE PREVIEW
            </span>
            <span className="font-mono text-xs text-[#837377]">•</span>
            <span className="font-mono text-xs text-[#514347]">Akriti_Srivastava_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#ffffff] hover:bg-[#f9ebe7] border border-[#d5c2c6]/40 font-mono text-[11px] text-[#72384f] transition-colors cursor-pointer"
              title="Copy as Markdown text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#295429]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#72384f] hover:bg-[#8e4f67] text-white font-mono text-[11px] transition-colors cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#514347] hover:text-[#211a18] hover:bg-[#ede0dc] transition-colors cursor-pointer ml-1"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-[#211a18]">
          {/* Header Block */}
          <div className="border-b border-[#d5c2c6]/40 pb-6 space-y-2">
            <h1 className="text-3xl font-semibold text-[#211a18] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-[15px] font-medium text-[#72384f]">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.university}, {PERSONAL_INFO.location}
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-xs text-[#514347] pt-1">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#72384f] flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#72384f]" />
                {PERSONAL_INFO.email}
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#72384f] flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-[#72384f]" />
                {PERSONAL_INFO.linkedinUsername}
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#72384f] flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-[#72384f]" />
                {PERSONAL_INFO.githubUsername}
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#72384f] border-b border-[#d5c2c6]/30 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline flex-wrap">
                  <h3 className="text-base font-semibold text-[#211a18]">
                    {EDUCATION_TIMELINE[0].institution}
                  </h3>
                  <span className="font-mono text-xs text-[#514347]">2025 – 2029</span>
                </div>
                <p className="text-sm text-[#72384f] font-medium">
                  {EDUCATION_TIMELINE[0].degree}
                </p>
                <div className="flex gap-3 text-xs font-mono text-[#514347] mt-1">
                  <span className="font-semibold text-[#295429]">Sem 1 SGPA: 8.96</span>
                  <span>•</span>
                  <span className="font-semibold text-[#295429]">Sem 2 SGPA: 9.40 (Distinction)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap">
                  <h3 className="text-base font-semibold text-[#211a18]">
                    {EDUCATION_TIMELINE[1].institution}
                  </h3>
                  <span className="font-mono text-xs text-[#514347]">Secondary School</span>
                </div>
                <p className="text-sm text-[#514347]">
                  {EDUCATION_TIMELINE[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#72384f] border-b border-[#d5c2c6]/30 pb-1">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-semibold text-[#211a18]">Languages: </span>
                <span className="text-[#514347]">C, C++, Python, SQL, JavaScript, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-semibold text-[#211a18]">Developer Tools: </span>
                <span className="text-[#514347]">MySQL, Git, GitHub, VS Code, Linux Bash</span>
              </div>
              <div>
                <span className="font-semibold text-[#211a18]">Core Fundamentals: </span>
                <span className="text-[#514347]">DSA, OOP, Relational Schemas, Memory Buffers</span>
              </div>
              <div>
                <span className="font-semibold text-[#211a18]">Specialized: </span>
                <span className="text-[#514347]">IoT Basics, GenAI Prompting, Data Visualization</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#72384f] border-b border-[#d5c2c6]/30 pb-1">
              Selected Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="text-base font-semibold text-[#211a18]">
                      {proj.title} <span className="font-mono text-xs text-[#72384f]">({proj.category})</span>
                    </h3>
                  </div>
                  <p className="text-sm text-[#514347] leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#fff1ed] text-[#72384f] border border-[#d5c2c6]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#72384f] border-b border-[#d5c2c6]/30 pb-1">
              Certifications &amp; Accreditations
            </h2>
            <div className="space-y-2 text-sm">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between items-start">
                  <div>
                    <span className="font-semibold text-[#211a18]">{cert.title}</span> –{' '}
                    <span className="text-[#72384f]">{cert.issuer}</span>
                    <p className="text-xs text-[#514347]">{cert.description}</p>
                  </div>
                  <span className="font-mono text-[10px] text-[#295429] bg-[#bdf0b6]/50 px-2 py-0.5 rounded border border-[#295429]/20 font-semibold shrink-0 ml-2">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
