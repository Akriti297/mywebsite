import React from 'react';
import { CAREER_ROADMAP_STEPS } from '../data/portfolioData';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="w-full bg-[#72384f] text-[#ffffff] py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-[11px] text-[#fdbed3] font-semibold uppercase tracking-widest block">
            07 / Long-Term Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#ffffff]">
            What I'm working toward
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#ffd4e1] max-w-3xl leading-relaxed">
            My objective over the next 1–2 years is to strengthen my software engineering
            fundamentals, build production-quality projects, contribute to meaningful codebases, and
            secure an impactful software development internship.
          </p>
        </div>

        {/* 5 Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {CAREER_ROADMAP_STEPS.map((step) => {
            const isTarget = step.isFinal;
            return (
              <div
                key={step.number}
                id={`roadmap-step-${step.number}`}
                className={`p-5 rounded-2xl flex flex-col justify-between space-y-4 transition-all duration-200 ${
                  isTarget
                    ? 'bg-[#ffffff] text-[#211a18] shadow-lg hover:shadow-xl hover:-translate-y-1'
                    : 'bg-[#8e4f67]/50 backdrop-blur-sm text-[#ffffff] border border-[#ffb0cb]/25 hover:bg-[#8e4f67]/70'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-2xl font-bold ${
                        isTarget ? 'text-[#72384f]' : 'text-[#ffb0cb]'
                      }`}
                    >
                      {step.number}
                    </span>
                    {isTarget && (
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-[#ffd9e4] text-[#72384f] px-2 py-0.5 rounded font-bold">
                        Target
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      isTarget ? 'text-[#72384f]' : 'text-[#ffffff]'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                <p
                  className={`text-[13px] leading-relaxed ${
                    isTarget ? 'text-[#514347] font-normal' : 'text-[#ffd4e1]/90'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
