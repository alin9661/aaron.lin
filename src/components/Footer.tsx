'use client';

import { useEffect, useState } from 'react';
import { GlitchText } from './GlitchText';

const footerAscii = `┌─────────────────────────────────────────┐
│  (C) 2024 AARON LIN                    │
│  Built with ♥ and pixels              │
│  [CREATING] [LEARNING] [EVOLVING]     │
└─────────────────────────────────────────┘`;

export const Footer = () => {
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    setLastUpdate(new Date().toLocaleDateString());
  }, []);

  return (
    <footer className="py-12 sm:py-16 mt-20 border-t border-terminal-dark-green bg-terminal-bg-secondary/20">
      <div className="max-w-terminal mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* ASCII Art */}
          <div className="whitespace-pre text-xs sm:text-sm text-terminal-text-dim font-mono opacity-80">
            {footerAscii}
          </div>
          
          {/* Tech stack used */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-terminal-text-dim">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-terminal-primary rounded-full"></span>
              Next.js
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-terminal-secondary rounded-full"></span>
              TypeScript
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-terminal-accent rounded-full"></span>
              Tailwind CSS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-terminal-error rounded-full"></span>
              Framer Motion
            </span>
          </div>
          
          {/* Footer info */}
          <div className="space-y-2 text-terminal-text-dim text-xs sm:text-sm">
            <p className="flex flex-wrap justify-center items-center gap-2">
              <span>Last updated:</span>
              <time className="font-mono text-terminal-text-secondary" id="lastUpdate">
                {lastUpdate}
              </time>
              <span>•</span>
              <GlitchText text="EOF" />
            </p>
            
            <p className="opacity-75">
              Made with 💚 using modern web technologies
            </p>
          </div>
          
          {/* Performance info */}
          <div className="pt-6 border-t border-terminal-dark-green/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-terminal-primary font-mono text-xs sm:text-sm font-bold">
                  Performance
                </div>
                <div className="text-terminal-text-dim text-xs">
                  ⚡ Optimized & Fast
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-terminal-accent font-mono text-xs sm:text-sm font-bold">
                  Accessibility
                </div>
                <div className="text-terminal-text-dim text-xs">
                  ♿ WCAG 2.1 AA
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-terminal-secondary font-mono text-xs sm:text-sm font-bold">
                  Mobile Ready
                </div>
                <div className="text-terminal-text-dim text-xs">
                  📱 Responsive Design
                </div>
              </div>
            </div>
          </div>
          
          {/* Terminal-style final message */}
          <div className="bg-terminal-bg-tertiary/30 rounded-lg p-4 border border-terminal-dark-green/50">
            <div className="flex items-center justify-center space-x-2 text-terminal-text-secondary text-xs sm:text-sm font-mono">
              <span className="text-terminal-primary">$</span>
              <span>thanks</span>
              <span>--for</span>
              <span>visiting</span>
              <span className="animate-blink text-terminal-accent">_</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};