import React from 'react';
import { Brain, Compass, GraduationCap, MapPin } from 'lucide-react';
import { CURRENTLY_LEARNING, EXPLORING, PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-16 lg:py-20"
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-1">
          <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-widest block">
            01 / Profile Narrative
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#211a18]">
            A little about me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-[16px] sm:text-[18px] text-[#514347] leading-relaxed">
            <p>
              I’m a B.Tech Artificial Intelligence &amp; Data Science student at REVA University. I enjoy solving programming problems and building projects that help me understand how things work under the hood.
            </p>
            <p>
              I’m comfortable with <span className="text-[#211a18] font-medium">C</span> and{' '}
              <span className="text-[#211a18] font-medium">Python</span>, currently use{' '}
              <span className="text-[#72384f] font-semibold">C++</span> for Data Structures and
              Algorithms, and I’m exploring modern web development with HTML, CSS, JavaScript, and
              MySQL.
            </p>
            <p>
              My current focus is strengthening my programming fundamentals, improving my analytical
              problem-solving skills, building meaningful full-stack &amp; systems projects, and
              gaining hands-on internship experience in engineering environments.
            </p>
          </div>

          {/* Side Card: Active Learning & Explorations */}
          <div className="lg:col-span-5 bg-[#fff1ed] p-6 lg:p-8 rounded-2xl shadow-xs border border-[#d5c2c6]/40 space-y-6">
            {/* Currently Learning */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#72384f]">
                <Brain className="w-5 h-5 text-[#72384f]" />
                <h3 className="text-[20px] font-medium text-[#211a18]">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {CURRENTLY_LEARNING.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-[#ffffff] text-[#72384f] font-medium border border-[#d5c2c6]/30 shadow-xs hover:border-[#8e4f67] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Exploring */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#72384f]">
                <Compass className="w-5 h-5 text-[#72384f]" />
                <h3 className="text-[20px] font-medium text-[#211a18]">Exploring</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {EXPLORING.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-[#f9ebe7] text-[#211a18] font-medium border border-[#d5c2c6]/30 hover:border-[#72384f]/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Location & Institute Stamp */}
            <div className="p-3 bg-[#ffffff] rounded-xl flex items-center gap-3 border border-[#d5c2c6]/35 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#8e4f67]/15 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#72384f]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-[#211a18] leading-tight flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#72384f]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="font-mono text-[11px] text-[#514347]">
                  {PERSONAL_INFO.university} • {PERSONAL_INFO.department}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
