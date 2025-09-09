'use client';

import { useTypewriter } from '@/hooks';
import { GlitchText } from './GlitchText';

export const Hero = () => {
  const { displayText: typingText } = useTypewriter({
    text: '> Initializing portfolio.exe...',
    speed: 30,
    startDelay: 1000,
  });

  return (
    <section className="text-center py-12 sm:py-16 lg:py-20 relative flex items-center">
      {/* Main headline with glitch effect */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 animate-glitch font-mono">
        <GlitchText text="Hello, World!" />
      </h1>

      {/* Tagline with better responsive sizing */}
      <p className="text-terminal-accent text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 font-bold tracking-wider">
        DEVELOPER • CREATOR • PROBLEM_SOLVER
      </p>

      {/* Terminal-style intro box */}
      <div className="justify-center max-w-4xl mx-auto leading-relaxed text-terminal-text-primary p-6 sm:p-8 lg:p-10 border border-terminal-dark-green bg-terminal-bg-secondary/30 backdrop-blur-sm rounded-lg shadow-lg">
        {/* Terminal header */}
        <div className="flex items-center mb-6 text-terminal-text-secondary text-sm sm:text-base">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-accent"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-primary"></div>
          </div>
          <div className="ml-4 font-mono text-xs sm:text-sm opacity-75">aaron-portfolio.sh</div>
        </div>

        {/* Terminal content */}
        <div className="text-left font-mono">
          <p className="mb-4 text-terminal-primary text-sm sm:text-base lg:text-lg">
            {typingText}
          </p>
          <p className="mb-4 text-terminal-primary text-sm sm:text-base lg:text-lg">
            {'> Loading developer profile... '}
            <span className="inline-block animate-blink text-terminal-accent">█</span>
          </p>
          <div className="h-4 sm:h-6"></div>

          {/* Main description */}
          <div className="text-terminal-text-secondary space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg">
            <p>
              Welcome to my digital workspace! I&apos;m Aaron Lin, a full-stack developer passionate about
              crafting elegant solutions to complex problems. I build modern web applications that push
              the boundaries of user experience while maintaining clean, efficient code.
            </p>
            <p>
              Currently exploring the intersection of web technologies, creative coding, and AI to
              create experiences that are both functional and inspiring.
            </p>
          </div>

          {/* Terminal prompt */}
          <div className="mt-6 sm:mt-8 flex items-center text-terminal-primary">
            <span className="text-terminal-accent">$</span>
            <span className="ml-2 text-sm sm:text-base">explore --portfolio</span>
            <span className="animate-blink ml-1 text-terminal-accent">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};
