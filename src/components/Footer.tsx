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
    <footer className="text-center py-10 px-5 mt-20 border-t border-terminal-dark-green">
      <div className="whitespace-pre text-xs text-terminal-text-dim mb-5">
        {footerAscii}
      </div>
      <p className="text-terminal-text-dim">
        Last updated: <span id="lastUpdate">{lastUpdate}</span> • <GlitchText text="EOF" />
      </p>
    </footer>
  );
};