import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  return (
    <section id="quick-stats-bar" className="w-full bg-[#fff1ed] py-8 border-y border-[#d5c2c6]/30">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#d5c2c6]/35 flex flex-col items-center md:items-start text-center md:text-left transition-all hover:shadow-md hover:border-[#8e4f67]/40"
            >
              <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#72384f]">
                {stat.value}
              </span>
              <span className="text-[13px] text-[#514347] mt-1 font-normal">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
