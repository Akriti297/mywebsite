import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Play, Copy, Check } from 'lucide-react';
import { DSA_SNIPPETS } from '../data/portfolioData';

const TOPIC_TAGS = [
  'Arrays',
  'Strings',
  'Pointers & Memory',
  'Binary Search',
  'Two-Pointers',
  'Sorting Algorithms',
];

export const DsaSection: React.FC = () => {
  const [selectedSnippetId, setSelectedSnippetId] = useState('two-sum');
  const [copied, setCopied] = useState(false);
  const [traceStep, setTraceStep] = useState<number | null>(null);

  const currentSnippet =
    DSA_SNIPPETS.find((s) => s.id === selectedSnippetId) || DSA_SNIPPETS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunTrace = () => {
    setTraceStep(0);
    setTimeout(() => setTraceStep(1), 600);
    setTimeout(() => setTraceStep(2), 1200);
    setTimeout(() => setTraceStep(3), 1800);
  };

  return (
    <section
      id="dsa"
      className="w-full bg-[#fff1ed] py-16 lg:py-20 border-y border-[#d5c2c6]/30"
    >
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-widest block">
            04 / Algorithmic Rigor
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#211a18]">
            Always solving something.
          </h2>
          <p className="text-[15px] text-[#514347] max-w-2xl">
            I actively practice Data Structures &amp; Algorithms using C++ and continuously refine my
            problem-solving approach through LeetCode and competitive programming patterns.
          </p>
        </div>

        {/* Tag Row */}
        <div className="flex flex-wrap gap-2">
          {TOPIC_TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-3.5 py-1.5 rounded-full bg-[#ffffff] text-[#72384f] shadow-xs border border-[#d5c2c6]/40 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Realistic Code Editor Container */}
        <div
          id="cpp-code-editor"
          className="bg-[#ffffff] rounded-2xl shadow-sm border border-[#d5c2c6]/40 overflow-hidden"
        >
          {/* Editor Header */}
          <div className="bg-[#f3e5e2]/80 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-[#d5c2c6]/40 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#72384f]/40" />
              <span className="w-3 h-3 rounded-full bg-[#815062]/40" />
              <span className="w-3 h-3 rounded-full bg-[#295429]/40" />

              {/* Tabs for algorithms */}
              <div className="flex items-center gap-1 ml-2">
                {DSA_SNIPPETS.map((snippet) => (
                  <button
                    key={snippet.id}
                    onClick={() => {
                      setSelectedSnippetId(snippet.id);
                      setTraceStep(null);
                    }}
                    className={`font-mono text-[12px] px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      selectedSnippetId === snippet.id
                        ? 'bg-[#ffffff] text-[#72384f] font-semibold shadow-2xs border border-[#d5c2c6]/30'
                        : 'text-[#514347] hover:bg-[#fff1ed]'
                    }`}
                  >
                    {snippet.filename}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#514347] hover:text-[#72384f] px-2 py-1 rounded bg-[#ffffff] border border-[#d5c2c6]/30 transition-colors cursor-pointer"
                title="Copy snippet"
              >
                {copied ? <Check className="w-3 h-3 text-[#295429]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <span className="font-mono text-[11px] text-[#72384f] bg-[#fff1ed] border border-[#d5c2c6]/30 px-2 py-0.5 rounded font-medium">
                {currentSnippet.standard}
              </span>
            </div>
          </div>

          {/* Interactive Tracer Info Bar (for Two Sum) */}
          {selectedSnippetId === 'two-sum' && (
            <div className="bg-[#fff8f6] px-4 sm:px-6 py-2 border-b border-[#d5c2c6]/30 flex items-center justify-between text-[11px] font-mono flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="text-[#514347]">TEST INPUT: nums = [2, 7, 11, 15], target = 9</span>
                {traceStep !== null && (
                  <span className="text-[#72384f] font-semibold animate-pulse">
                    {traceStep === 0 && 'STEP 0: left = 0 (2), right = 3 (15) -> sum = 17 > 9 -> right--'}
                    {traceStep === 1 && 'STEP 1: left = 0 (2), right = 2 (11) -> sum = 13 > 9 -> right--'}
                    {traceStep === 2 && 'STEP 2: left = 0 (2), right = 1 (7)  -> sum = 9 == 9 -> MATCH!'}
                    {traceStep === 3 && 'OUTPUT: Return 1-based indices {1, 2} [SUCCESS 0.00ms]'}
                  </span>
                )}
              </div>
              <button
                onClick={handleRunTrace}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#8e4f67] text-white hover:bg-[#72384f] transition-colors cursor-pointer"
              >
                <Play className="w-3 h-3" />
                <span>Run Interactive Trace</span>
              </button>
            </div>
          )}

          {/* Editor Body with Line Numbers */}
          <div className="p-4 sm:p-6 overflow-x-auto font-mono text-[13px] leading-[22px] flex gap-4 bg-[#ffffff]">
            {/* Line Numbers */}
            <div className="text-[#837377] select-none text-right space-y-1 pr-3 border-r border-[#d5c2c6]/30 font-mono">
              {currentSnippet.code.map((_, idx) => (
                <div key={idx} className="opacity-60">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
              ))}
            </div>

            {/* Code Text with Syntax Coloring */}
            <div className="space-y-1 text-[#211a18] flex-1">
              {currentSnippet.code.map((line, idx) => {
                const isComment = line.trim().startsWith('//');
                const isInclude = line.trim().startsWith('#include');
                const isUsing = line.trim().startsWith('using namespace');

                return (
                  <div key={idx} className="whitespace-pre">
                    {isComment ? (
                      <span className="text-[#837377] italic">{line}</span>
                    ) : isInclude ? (
                      <span>
                        <span className="text-[#72384f] font-semibold">#include</span>{' '}
                        <span className="text-[#815062]">&lt;vector&gt;</span>
                      </span>
                    ) : isUsing ? (
                      <span>
                        <span className="text-[#72384f] font-semibold">using namespace</span> std;
                      </span>
                    ) : (
                      line
                        .replace(/vector<int>/g, '§VEC§')
                        .replace(/int /g, '§INT§ ')
                        .replace(/while /g, '§WHILE§ ')
                        .replace(/if /g, '§IF§ ')
                        .replace(/else /g, '§ELSE§ ')
                        .replace(/return /g, '§RET§ ')
                        .split(/(§VEC§|§INT§|§WHILE§|§IF§|§ELSE§|§RET§)/)
                        .map((part, pIdx) => {
                          if (part === '§VEC§')
                            return (
                              <span key={pIdx} className="text-[#815062] font-semibold">
                                vector&lt;int&gt;
                              </span>
                            );
                          if (part === '§INT§')
                            return (
                              <span key={pIdx} className="text-[#72384f] font-semibold">
                                int
                              </span>
                            );
                          if (part === '§WHILE§')
                            return (
                              <span key={pIdx} className="text-[#72384f] font-semibold">
                                while
                              </span>
                            );
                          if (part === '§IF§')
                            return (
                              <span key={pIdx} className="text-[#72384f] font-semibold">
                                if
                              </span>
                            );
                          if (part === '§ELSE§')
                            return (
                              <span key={pIdx} className="text-[#72384f] font-semibold">
                                else
                              </span>
                            );
                          if (part === '§RET§')
                            return (
                              <span key={pIdx} className="text-[#72384f] font-semibold">
                                return
                              </span>
                            );
                          return <span key={pIdx}>{part}</span>;
                        })
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* LeetCode Verification CTA */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#295429]" />
            <span className="text-[15px] text-[#211a18]">
              28+ verified solutions logged on LeetCode with continuous daily streaks.
            </span>
          </div>

          <a
            id="link-leetcode-profile"
            href="https://leetcode.com/u/Akriti297/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#72384f] font-mono text-[11px] font-medium uppercase px-4 py-2 rounded-lg bg-[#ffffff] hover:bg-[#f9ebe7] border border-[#d5c2c6]/40 transition-colors shadow-2xs"
          >
            <span>View LeetCode Profile</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
