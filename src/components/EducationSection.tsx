import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-16 lg:py-20 space-y-8"
    >
      <div className="space-y-1">
        <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-widest block">
          06 / Milestones
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#211a18]">
          Academic Journey
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#d5c2c6]/60">
        {/* Node 1: REVA University */}
        <div className="relative group">
          {/* Node Dot */}
          <div className="absolute -left-6 sm:-left-10 top-6 w-5 h-5 rounded-full bg-[#72384f] border-4 border-[#fff8f6] ring-2 ring-[#72384f]/40 shadow-xs group-hover:scale-125 transition-transform duration-200" />

          {/* Card */}
          <div className="bg-[#fff1ed] p-6 lg:p-8 rounded-2xl shadow-xs border border-[#d5c2c6]/40 space-y-4 hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase">
                {EDUCATION_TIMELINE[0].period}
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#ffd9e4] text-[#38081f] font-semibold border border-[#d5c2c6]/30">
                {EDUCATION_TIMELINE[0].status}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#211a18]">
                {EDUCATION_TIMELINE[0].institution}
              </h3>
              <p className="text-[17px] text-[#72384f] font-medium mt-0.5">
                {EDUCATION_TIMELINE[0].degree}
              </p>
            </div>

            {/* Grades Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="font-mono text-[12px] px-3 py-1 rounded-full bg-[#ffffff] text-[#72384f] font-semibold border border-[#d5c2c6]/35 shadow-xs flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#72384f]" />
                8.96 SGPA • Semester 1
              </span>
              <span className="font-mono text-[12px] px-3 py-1 rounded-full bg-[#ffd9e4] text-[#38081f] font-semibold border border-[#8e4f67]/30 shadow-xs flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#72384f]" />
                9.40 SGPA • Semester 2
              </span>
            </div>

            <p className="text-[15px] text-[#514347] leading-relaxed">
              {EDUCATION_TIMELINE[0].description}
            </p>
          </div>
        </div>

        {/* Node 2: Kendriya Vidyalaya */}
        <div className="relative group">
          {/* Node Dot */}
          <div className="absolute -left-6 sm:-left-10 top-6 w-5 h-5 rounded-full bg-[#ffffff] border-4 border-[#8e4f67] shadow-xs group-hover:scale-125 transition-transform duration-200" />

          {/* Card */}
          <div className="bg-[#fff1ed] p-6 lg:p-8 rounded-2xl shadow-xs border border-[#d5c2c6]/40 space-y-3 hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase">
                {EDUCATION_TIMELINE[1].period}
              </span>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#ede0dc] text-[#514347] font-semibold border border-[#d5c2c6]/30">
                {EDUCATION_TIMELINE[1].status}
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#211a18]">
                {EDUCATION_TIMELINE[1].institution}
              </h3>
            </div>

            <p className="text-[15px] text-[#514347] leading-relaxed">
              {EDUCATION_TIMELINE[1].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
