import React, { useState } from 'react';
import { ExternalLink, Star, Film, Clapperboard, RefreshCw, Terminal, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  // Project 1 Interactive Shape Editor State
  const [activeShape, setActiveShape] = useState<'rect' | 'circle' | 'triangle' | 'line' | 'all'>('all');
  const [activeCommand, setActiveCommand] = useState('DRAW CIRCLE R=6 X=30 Y=14 [OK 0.04ms]');
  const [renderCount, setRenderCount] = useState(1);

  // Project 2 Interactive Movie Rating State
  const [movieRatings, setMovieRatings] = useState<{ [key: string]: number }>({
    Interstellar: 4.5,
    Oppenheimer: 4.0,
  });

  const handleRateMovie = (title: string, rating: number) => {
    setMovieRatings((prev) => ({
      ...prev,
      [title]: rating,
    }));
  };

  const calculateAverage = () => {
    const scores: number[] = Object.values(movieRatings);
    const sum = scores.reduce((a: number, b: number) => a + b, 0);
    const avg = (sum / (scores.length || 1)) * 2; // out of 10
    return avg.toFixed(1);
  };

  const handleShapeSelect = (shape: 'rect' | 'circle' | 'triangle' | 'line') => {
    setActiveShape(shape);
    setRenderCount((c) => c + 1);
    if (shape === 'rect') {
      setActiveCommand('DRAW RECT W=16 H=8 X=6 Y=3 [OK 0.02ms]');
    } else if (shape === 'circle') {
      setActiveCommand('DRAW CIRCLE R=6 X=30 Y=14 [OK 0.04ms]');
    } else if (shape === 'triangle') {
      setActiveCommand('DRAW TRI BASE=12 H=8 X=40 Y=4 [OK 0.03ms]');
    } else if (shape === 'line') {
      setActiveCommand('DRAW LINE X1=38 Y1=13 X2=54 Y2=13 [OK 0.01ms]');
    }
  };

  const handleResetCanvas = () => {
    setActiveShape('all');
    setActiveCommand('CANVAS RESTORED: FULL MATRIX BUFFER [OK 0.05ms]');
  };

  return (
    <section
      id="projects"
      className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-16 lg:py-20 space-y-8"
    >
      <div className="space-y-1">
        <span className="font-mono text-[11px] text-[#72384f] font-semibold uppercase tracking-widest block">
          03 / Engineering Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#211a18]">
          Things I've Built
        </h2>
        <p className="text-[15px] text-[#514347]">
          Selected projects demonstrating low-level systems understanding and full-stack development.
        </p>
      </div>

      {/* Project 01: 2D Shape Editor */}
      <div
        id="project-shape-editor"
        className="bg-[#fff1ed] rounded-2xl overflow-hidden shadow-xs border border-[#d5c2c6]/40 hover:shadow-md transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Content Column */}
          <div className="lg:col-span-6 p-6 lg:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#72384f] font-semibold">
                  PROJECT 01
                </span>
                <span className="text-[#837377] font-mono text-xs">•</span>
                <span className="font-mono text-[11px] text-[#514347]">
                  C • Systems Programming
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#211a18]">
                2D Shape Editor
              </h3>

              <p className="text-[15px] text-[#514347] leading-relaxed">
                A terminal-based 2D graphics engine built in C using a custom 25×70 interactive
                raster canvas. Implemented discrete shape rendering (rectangles, triangles, circles,
                lines), custom coordinate handling, buffer re-rendering loops, and shape deletion
                while exploring raw dynamic memory and 2D pointer matrices.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {PROJECTS[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#ffffff] text-[#72384f] border border-[#d5c2c6]/30 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                id="link-shape-editor-github"
                href="https://github.com/Akriti297"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#72384f] hover:bg-[#8e4f67] text-[#ffffff] font-mono text-[11px] font-medium uppercase tracking-wide px-5 py-2.5 rounded-lg shadow-xs transition-all hover:scale-[1.01]"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Terminal ASCII Canvas Preview Column */}
          <div className="lg:col-span-6 bg-[#ffffff] p-6 lg:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#d5c2c6]/40">
            <div className="bg-[#f9ebe7] p-3 sm:p-4 rounded-xl space-y-2 shadow-inner border border-[#d5c2c6]/35">
              <div className="flex items-center justify-between text-[#514347] text-[11px] pb-1 border-b border-[#d5c2c6]/30 font-mono">
                <span className="text-[#72384f] font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#72384f]" />
                  CANVAS_25x70.BUFFER
                </span>
                <span>CURSOR: [12, 34]</span>
              </div>

              {/* Interactive Shape Trigger Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap text-[10px] font-mono py-1">
                <span className="text-[#514347]">TEST SHAPE:</span>
                <button
                  onClick={() => handleShapeSelect('rect')}
                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                    activeShape === 'rect'
                      ? 'bg-[#72384f] text-white border-[#72384f]'
                      : 'bg-white text-[#72384f] border-[#d5c2c6]'
                  }`}
                >
                  [R]ect
                </button>
                <button
                  onClick={() => handleShapeSelect('circle')}
                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                    activeShape === 'circle'
                      ? 'bg-[#72384f] text-white border-[#72384f]'
                      : 'bg-white text-[#72384f] border-[#d5c2c6]'
                  }`}
                >
                  [C]ircle
                </button>
                <button
                  onClick={() => handleShapeSelect('triangle')}
                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                    activeShape === 'triangle'
                      ? 'bg-[#72384f] text-white border-[#72384f]'
                      : 'bg-white text-[#72384f] border-[#d5c2c6]'
                  }`}
                >
                  [T]riangle
                </button>
                <button
                  onClick={() => handleShapeSelect('line')}
                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                    activeShape === 'line'
                      ? 'bg-[#72384f] text-white border-[#72384f]'
                      : 'bg-white text-[#72384f] border-[#d5c2c6]'
                  }`}
                >
                  [L]ine
                </button>
                <button
                  onClick={handleResetCanvas}
                  className="px-2 py-0.5 rounded border bg-white text-[#514347] border-[#d5c2c6] hover:bg-[#fff1ed] flex items-center gap-1 cursor-pointer ml-auto"
                  title="Reset All Shapes"
                >
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>All</span>
                </button>
              </div>

              {/* ASCII Canvas Mockup */}
              <pre className="text-[10px] sm:text-[11px] leading-[13px] sm:leading-[14px] text-[#211a18] overflow-x-auto whitespace-pre p-2.5 bg-[#fff8f6] rounded border border-[#d5c2c6]/30 font-mono select-none">
{`+-------------------------------------------------------------+
|                                                             |
${activeShape === 'rect' || activeShape === 'all'
? `|   # # # # # # # #                                           |
|   #             #                  / \\                      |
|   #  [RECT 01]  #                 /   \\                     |
|   #             #                /  *  \\                    |
|   # # # # # # # #               / TRI-02\\                   |
|                                /_________\\                  |`
: `|                                                             |
|                                    / \\                      |
|                                   /   \\                     |
|                                  /  *  \\                    |
|                                 / TRI-02\\                   |
|                                /_________\\                  |`}
|                                                             |
${activeShape === 'circle' || activeShape === 'all'
? `|                 . - - - .                                   |
|               '           '                                 |
|              (  CIRCLE 03  )     --------------------->     |
|               '           '       VECTOR TRANSLATION        |
|                 ' - - - '                                   |`
: `|                                                             |
|                                                             |
|                                  --------------------->     |
|                                   VECTOR TRANSLATION        |
|                                                             |`}
|                                                             |
+-------------------------------------------------------------+`}
              </pre>

              <div className="text-[11px] font-mono text-[#72384f] font-medium bg-[#fff8f6] px-2 py-1 rounded border border-[#d5c2c6]/25">
                ACTIVE COMMAND: &gt; {activeCommand}
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-[#514347] font-mono">
                <span>Memory Footprint: ~1.75 KB (Pass #{renderCount})</span>
                <span className="text-[#295429] font-medium">STATUS: STABLE RENDER</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 02: Movie Rating Platform */}
      <div
        id="project-movie-platform"
        className="bg-[#fff1ed] rounded-2xl overflow-hidden shadow-xs border border-[#d5c2c6]/40 hover:shadow-md transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Content Column */}
          <div className="lg:col-span-6 p-6 lg:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#72384f] font-semibold">
                  PROJECT 02
                </span>
                <span className="text-[#837377] font-mono text-xs">•</span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-[#fdbed3] text-[#7a495b] font-semibold">
                  Currently Building
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#211a18]">
                Movie Rating Platform
              </h3>

              <p className="text-[15px] text-[#514347] leading-relaxed">
                Architecting a responsive full-stack web application designed for film enthusiasts to
                review, curate, and rate films. Features an intuitive front-end interface, user
                rating state management, and a relational MySQL backend configured with normalized
                schemas to manage titles, genres, and audience metrics.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {PROJECTS[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#ffffff] text-[#72384f] border border-[#d5c2c6]/30 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                id="link-movie-platform-github"
                href="https://github.com/Akriti297"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#72384f] hover:bg-[#8e4f67] text-[#ffffff] font-mono text-[11px] font-medium uppercase tracking-wide px-5 py-2.5 rounded-lg shadow-xs transition-all hover:scale-[1.01]"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive UI & SQL Preview Column */}
          <div className="lg:col-span-6 bg-[#ffffff] p-6 lg:p-8 flex flex-col justify-center space-y-4 border-t lg:border-t-0 lg:border-l border-[#d5c2c6]/40">
            {/* Movie Cards UI Shell */}
            <div className="bg-[#f9ebe7] p-4 rounded-xl space-y-3 shadow-xs border border-[#d5c2c6]/35">
              <div className="flex items-center justify-between pb-1 border-b border-[#d5c2c6]/30">
                <span className="text-[15px] font-semibold text-[#211a18]">
                  Cinema Vault Preview
                </span>
                <div className="flex items-center gap-1.5 text-[#72384f]">
                  <Star className="w-4 h-4 fill-[#72384f] text-[#72384f]" />
                  <span className="font-mono text-[12px] font-bold">
                    {calculateAverage()} / 10 Avg
                  </span>
                </div>
              </div>

              {/* Film Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Movie 1: Interstellar */}
                <div className="bg-[#ffffff] p-3 rounded-lg shadow-2xs border border-[#d5c2c6]/30 space-y-1.5 transition-transform hover:-translate-y-0.5">
                  <div className="h-20 w-full bg-[#f4b5ca]/25 rounded flex items-center justify-center text-[#72384f]">
                    <Film className="w-7 h-7" />
                  </div>
                  <div className="text-[13px] font-semibold text-[#211a18]">Interstellar</div>
                  {/* Interactive Stars */}
                  <div className="flex items-center gap-0.5 text-[#72384f]">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFull = movieRatings['Interstellar'] >= star;
                      const isHalf = movieRatings['Interstellar'] >= star - 0.5 && !isFull;
                      return (
                        <button
                          key={star}
                          onClick={() => handleRateMovie('Interstellar', star)}
                          className="hover:scale-125 transition-transform cursor-pointer"
                          title={`Rate ${star} stars`}
                        >
                          <Star
                            className={`w-3.5 h-3.5 ${
                              isFull
                                ? 'fill-[#72384f] text-[#72384f]'
                                : isHalf
                                ? 'fill-[#72384f]/50 text-[#72384f]'
                                : 'text-[#837377]'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Movie 2: Oppenheimer */}
                <div className="bg-[#ffffff] p-3 rounded-lg shadow-2xs border border-[#d5c2c6]/30 space-y-1.5 transition-transform hover:-translate-y-0.5">
                  <div className="h-20 w-full bg-[#f4b5ca]/25 rounded flex items-center justify-center text-[#72384f]">
                    <Clapperboard className="w-7 h-7" />
                  </div>
                  <div className="text-[13px] font-semibold text-[#211a18]">Oppenheimer</div>
                  {/* Interactive Stars */}
                  <div className="flex items-center gap-0.5 text-[#72384f]">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFull = movieRatings['Oppenheimer'] >= star;
                      return (
                        <button
                          key={star}
                          onClick={() => handleRateMovie('Oppenheimer', star)}
                          className="hover:scale-125 transition-transform cursor-pointer"
                          title={`Rate ${star} stars`}
                        >
                          <Star
                            className={`w-3.5 h-3.5 ${
                              isFull ? 'fill-[#72384f] text-[#72384f]' : 'text-[#837377]'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SQL Query Preview */}
              <div className="bg-[#fff1ed] p-2.5 rounded-lg font-mono text-[11px] text-[#514347] space-y-0.5 border border-[#d5c2c6]/30 leading-snug">
                <span className="text-[#72384f] font-semibold">SELECT</span> m.title,{' '}
                <span className="text-[#72384f] font-semibold">AVG</span>(r.rating){' '}
                <span className="text-[#72384f] font-semibold">AS</span> score
                <br />
                <span className="text-[#72384f] font-semibold">FROM</span> movies m{' '}
                <span className="text-[#72384f] font-semibold">JOIN</span> reviews r{' '}
                <span className="text-[#72384f] font-semibold">ON</span> m.id = r.movie_id
                <br />
                <span className="text-[#72384f] font-semibold">GROUP BY</span> m.id{' '}
                <span className="text-[#72384f] font-semibold">ORDER BY</span> score{' '}
                <span className="text-[#72384f] font-semibold">DESC</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
