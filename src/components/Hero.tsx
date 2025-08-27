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
    <section className="text-center py-16 px-5 relative">
      <h1 className="text-5xl mb-5 animate-glitch">
        <GlitchText text="Hello, World!" />
      </h1>
      <p className="text-terminal-amber text-2xl mb-8 opacity-90">
        DEVELOPER • CREATOR • PROBLEM_SOLVER
      </p>
      
      <div className="max-w-4xl mx-auto leading-relaxed text-terminal-green p-5 border border-terminal-dark-green bg-terminal-green/5">
        <p className="mb-4">{typingText}</p>
        <p className="mb-4">
          {'> Loading developer profile... '}
          <span className="inline-block animate-blink">█</span>
        </p>
        <br />
        <p className="mb-4">
          Welcome to my digital workspace! I&apos;m Aaron Lin, a full-stack developer passionate about 
          crafting elegant solutions to complex problems. I build modern web applications that push 
          the boundaries of user experience while maintaining clean, efficient code.
        </p>
        <br />
        <p>
          Currently exploring the intersection of web technologies, creative coding, and AI to 
          create experiences that are both functional and inspiring.
        </p>
      </div>
    </section>
  );
};