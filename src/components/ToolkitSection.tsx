import React from 'react';
import { Code2, Terminal, GitBranch, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const ToolkitSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-7 h-7 text-[#72384f]" />;
      case 'terminal':
        return <Terminal className="w-7 h-7 text-[#72384f]" />;
      case 'schema':
        return <GitBranch className="w-7 h-7 text-[#72384f]" />;
      case 'hub':
      default:
        return <Sparkles className="w-7 h-7 text-[#72384f]" />;
    }
  };

  const isHighlighted = (item: string) => {
    const highlights = ['C++', 'Git', 'GitHub', 'DSA', 'GenAI Fundamentals'];
    return highlights.includes(item);
  };

  return (
    <section id="skills" className="w-full bg-[#fff1ed] py-16 lg:py-20 border-y border-[#d5c2c6]/30">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 space-y-8">
        <div className="space-y-1">
          <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-widest block">
            02 / Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#211a18]">
            Technical Toolkit
          </h2>
          <p className="text-[15px] text-[#514347]">
            Tools, languages, and foundations I leverage to craft reliable software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              id={`skill-card-${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#d5c2c6]/35 flex flex-col justify-between hover:shadow-md hover:border-[#8e4f67]/40 transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-[#fff1ed] group-hover:bg-[#f9ebe7] transition-colors">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className="font-mono text-[11px] text-[#72384f] font-medium bg-[#f9ebe7] border border-[#d5c2c6]/30 px-2.5 py-0.5 rounded">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-[20px] font-semibold text-[#211a18]">{cat.title}</h3>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => {
                    const active = isHighlighted(item);
                    return (
                      <span
                        key={item}
                        className={`font-mono text-[11px] px-2.5 py-1 rounded-md border transition-all ${
                          active
                            ? 'bg-[#f9ebe7] border-[#8e4f67]/30 text-[#72384f] font-semibold shadow-2xs'
                            : 'bg-[#fff1ed]/70 border-[#d5c2c6]/30 text-[#211a18]'
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>

              <span className="font-mono text-[11px] text-[#514347] pt-4 mt-4 border-t border-[#d5c2c6]/25 block">
                {cat.footer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
