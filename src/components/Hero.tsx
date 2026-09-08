import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Database, Play, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConnectClick }) => {
  const [selectedNode, setSelectedNode] = useState<number | null>(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState<number[]>([0]);

  const handleSimulateTraversal = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setVisitedNodes([0]);

    setTimeout(() => {
      setVisitedNodes([0, 1]);
      setSelectedNode(1);
    }, 600);

    setTimeout(() => {
      setVisitedNodes([0, 1, 2]);
      setSelectedNode(2);
    }, 1200);

    setTimeout(() => {
      setIsSimulating(false);
      setSelectedNode(0);
    }, 1800);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-8 pt-8 pb-16 lg:py-16 overflow-hidden"
    >
      {/* Ambient Rose Glow Accents */}
      <div className="absolute -top-16 -left-20 w-96 h-96 rounded-full bg-[#fdbed3]/25 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#ffd9e4]/30 blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Hero Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          {/* Status Eyebrow */}
          <div
            id="hero-status-pill"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fff1ed] border border-[#d5c2c6]/40 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#295429] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#295429]" />
            </span>
            <span className="font-mono text-[11px] text-[#72384f] font-semibold tracking-wide">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.semester}
            </span>
            <span className="text-[#837377] font-mono text-xs">/</span>
            <span className="font-mono text-[11px] text-[#514347] font-medium">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Headline & Editorial Tagline */}
          <div className="space-y-1 mt-1">
            <h1
              id="hero-name-headline"
              className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] font-semibold tracking-tight text-[#211a18]"
            >
              Hi, I'm {PERSONAL_INFO.name}
            </h1>
            <p
              id="hero-tagline"
              className="text-2xl sm:text-3xl lg:text-[38px] lg:leading-[46px] text-[#72384f] font-medium italic tracking-tight"
            >
              {PERSONAL_INFO.editorialTagline}
            </p>
          </div>

          {/* Bio Paragraph */}
          <p
            id="hero-bio"
            className="text-[16px] sm:text-[18px] leading-relaxed text-[#514347] max-w-xl"
          >
            {PERSONAL_INFO.shortBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="cta-view-projects"
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 bg-[#72384f] hover:bg-[#8e4f67] text-[#ffffff] font-mono text-[11px] font-medium uppercase tracking-wide px-6 py-3 rounded-lg shadow-sm transition-all duration-200 hover:scale-[1.01] cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="cta-connect"
              onClick={onConnectClick}
              className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#f9ebe7] text-[#72384f] border border-[#d5c2c6]/60 font-mono text-[11px] font-medium uppercase tracking-wide px-6 py-3 rounded-lg shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Spec Monospace Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {PERSONAL_INFO.quickSpecs.map((spec) => (
              <span
                key={spec}
                className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#f9ebe7] text-[#72384f] font-medium border border-[#d5c2c6]/30"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Right Visual Column: Bespoke macOS Developer Studio */}
        <div className="lg:col-span-5 relative w-full">
          <div
            id="macos-terminal-card"
            className="bg-[#fff1ed] rounded-2xl p-4 shadow-xl border border-[#d5c2c6]/40 relative overflow-hidden transition-all hover:shadow-2xl"
          >
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 bg-[#f3e5e2]/60 -mx-4 -mt-4 px-4 pt-3 border-b border-[#d5c2c6]/40">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#72384f]/40" />
                <div className="w-3 h-3 rounded-full bg-[#815062]/40" />
                <div className="w-3 h-3 rounded-full bg-[#295429]/40" />
              </div>
              <span className="font-mono text-[11px] text-[#514347] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#72384f]" />
                akriti@reva-macbook: ~/workspace/dsa
              </span>
              <span className="font-mono text-[11px] text-[#72384f] font-medium">zsh • main</span>
            </div>

            {/* Code Snippet Area */}
            <div className="space-y-3 font-mono text-[13px] leading-[22px]">
              {/* C++ Graph Traversal Snippet */}
              <div className="bg-[#ffffff] p-3 rounded-xl space-y-1 shadow-xs border border-[#d5c2c6]/30">
                <div className="flex justify-between items-center text-[#514347] text-[11px] pb-1 border-b border-[#d5c2c6]/20">
                  <span className="font-mono font-medium text-[#211a18]">graph_bfs.cpp</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#72384f] font-medium">O(V + E)</span>
                    <button
                      onClick={handleSimulateTraversal}
                      disabled={isSimulating}
                      title="Run interactive BFS traversal"
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#f9ebe7] hover:bg-[#8e4f67] text-[#72384f] hover:text-white transition-colors text-[10px] cursor-pointer"
                    >
                      <Play className="w-2.5 h-2.5" />
                      <span>{isSimulating ? 'Running...' : 'Run'}</span>
                    </button>
                  </div>
                </div>
                <p className="text-[#211a18]">
                  <span className="text-[#72384f] font-semibold">void</span>{' '}
                  <span className="text-[#815062] font-semibold">traverseGraph</span>(
                  <span className="text-[#72384f]">int</span> src) {'{'}
                </p>
                <p className="text-[#514347] pl-4">
                  <span className="text-[#815062]">vector</span>&lt;
                  <span className="text-[#72384f]">bool</span>&gt; vis(n,{' '}
                  <span className="text-[#72384f]">false</span>);
                </p>
                <p className="text-[#514347] pl-4">
                  <span className="text-[#815062]">queue</span>&lt;
                  <span className="text-[#72384f]">int</span>&gt; q; q.push(src); vis[src] ={' '}
                  <span className="text-[#72384f]">true</span>;
                </p>
                <p className="text-[#514347] pl-4">
                  <span className="text-[#72384f] font-semibold">while</span> (!q.empty()) {'{'}
                </p>
                <p className="text-[#211a18] pl-8">
                  <span className="text-[#72384f]">int</span> u = q.front(); q.pop();
                </p>
                <p className="text-[#514347] pl-8">
                  <span className="text-[#295429] font-medium">execute_node</span>(u);{' '}
                  <span className="text-[#837377] italic">// analytical visit</span>
                </p>
                <p className="text-[#514347] pl-4">{'}'}</p>
                <p className="text-[#211a18]">{'}'}</p>
              </div>

              {/* Algorithm Visualization SVG Card */}
              <div className="bg-[#f9ebe7] rounded-xl p-3 shadow-xs border border-[#d5c2c6]/30 space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#72384f]">
                  <span className="font-semibold tracking-wider">ACTIVE HEAP / NODE TOPOLOGY</span>
                  <span className="text-[#295429] font-medium">BALANCED • AVL</span>
                </div>

                {/* SVG Graph Illustration */}
                <div className="relative">
                  <svg className="w-full h-16 text-[#72384f] stroke-current fill-none" viewBox="0 0 340 70">
                    {/* Edges */}
                    <path
                      d="M 60 45 L 120 20 L 180 50 L 240 20 L 300 45"
                      opacity="0.3"
                      strokeDasharray="3 3"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 120 20 L 180 50"
                      strokeWidth="2"
                      className={visitedNodes.includes(0) && visitedNodes.includes(1) ? 'text-[#72384f]' : 'opacity-40'}
                    />
                    <path
                      d="M 180 50 L 240 20"
                      strokeWidth="2"
                      className={visitedNodes.includes(0) && visitedNodes.includes(2) ? 'text-[#72384f]' : 'opacity-40'}
                    />

                    {/* Nodes */}
                    <circle
                      cx="60"
                      cy="45"
                      fill="#F9EBE7"
                      r="8"
                      strokeWidth="1.5"
                      className="cursor-pointer"
                    />
                    <circle
                      cx="120"
                      cy="20"
                      fill={selectedNode === 1 || visitedNodes.includes(1) ? '#8E4F67' : '#F9EBE7'}
                      r="10"
                      strokeWidth="2"
                      className="cursor-pointer transition-colors duration-300"
                      onClick={() => setSelectedNode(1)}
                    />
                    <circle
                      cx="180"
                      cy="50"
                      fill={selectedNode === 0 || visitedNodes.includes(0) ? '#72384F' : '#F9EBE7'}
                      r="12"
                      strokeWidth="2"
                      className="cursor-pointer transition-colors duration-300"
                      onClick={() => setSelectedNode(0)}
                    />
                    <circle
                      cx="240"
                      cy="20"
                      fill={selectedNode === 2 || visitedNodes.includes(2) ? '#8E4F67' : '#F9EBE7'}
                      r="10"
                      strokeWidth="2"
                      className="cursor-pointer transition-colors duration-300"
                      onClick={() => setSelectedNode(2)}
                    />
                    <circle
                      cx="300"
                      cy="45"
                      fill="#F9EBE7"
                      r="8"
                      strokeWidth="1.5"
                      className="cursor-pointer"
                    />

                    {/* Node Labels */}
                    <text
                      fill="#FFF8F6"
                      fontFamily="JetBrains Mono"
                      fontSize="10"
                      textAnchor="middle"
                      x="120"
                      y="24"
                      className="pointer-events-none font-semibold"
                    >
                      01
                    </text>
                    <text
                      fill="#FFF8F6"
                      fontFamily="JetBrains Mono"
                      fontSize="11"
                      fontWeight="bold"
                      textAnchor="middle"
                      x="180"
                      y="54"
                      className="pointer-events-none"
                    >
                      00
                    </text>
                    <text
                      fill="#FFF8F6"
                      fontFamily="JetBrains Mono"
                      fontSize="10"
                      textAnchor="middle"
                      x="240"
                      y="24"
                      className="pointer-events-none font-semibold"
                    >
                      02
                    </text>
                  </svg>
                </div>
              </div>

              {/* Python Analytical Metric Card */}
              <div className="bg-[#ffffff] p-3 rounded-xl flex items-center justify-between shadow-xs border border-[#d5c2c6]/30">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#72384f]" />
                  <span className="text-[#211a18] text-[13px] font-medium font-mono">
                    pandas • pipeline.py
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#295429] bg-[#bdf0b6]/50 border border-[#295429]/20 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#295429]" />
                  Accuracy: 98.4%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
