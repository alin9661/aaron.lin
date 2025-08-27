import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal': {
          'green': '#00ff00',
          'dark-green': '#00aa00',
          'amber': '#ffb000',
          'cyan': '#00ffff',
          'magenta': '#ff00ff',
          'purple': '#9945ff',
          'bg-dark': '#0a0a0a',
          'bg-terminal': '#000000',
          'text-dim': '#666666',
          'glitch-red': '#ff0040',
          'glitch-blue': '#0080ff',
        }
      },
      fontFamily: {
        'mono': ['VT323', 'monospace'],
      },
      fontSize: {
        'terminal': '20px',
        'ascii': '14px',
        'ascii-mobile': '8px',
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 2s infinite',
        'fall': 'fall linear infinite',
        'blink': 'blink 1s infinite',
        'pulse-terminal': 'pulse-terminal 2s infinite',
        'glitch-1': 'glitch-1 0.5s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '0.97' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.98' },
        },
        glow: {
          from: { 
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' 
          },
          to: { 
            textShadow: '0 0 20px #00ff00, 0 0 30px #00ff00' 
          },
        },
        glitch: {
          '0%, 100%': {
            textShadow: '2px 0 #ff0040, -2px 0 #0080ff',
          },
          '25%': {
            textShadow: '-2px 0 #ff0040, 2px 0 #0080ff',
          },
          '50%': {
            textShadow: '2px 2px #ff0040, -2px -2px #0080ff',
          },
        },
        fall: {
          to: { top: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'pulse-terminal': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glitch-1': {
          '0%, 100%': { 
            clipPath: 'inset(0 0 0 0)' 
          },
          '20%': { 
            clipPath: 'inset(20% 0 60% 0)', 
            transform: 'translate(2px, 0)' 
          },
          '40%': { 
            clipPath: 'inset(40% 0 40% 0)', 
            transform: 'translate(-2px, 0)' 
          },
          '60%': { 
            clipPath: 'inset(60% 0 20% 0)', 
            transform: 'translate(0, 2px)' 
          },
          '80%': { 
            clipPath: 'inset(80% 0 0 0)', 
            transform: 'translate(0, -2px)' 
          },
        },
        'glitch-2': {
          '0%, 100%': { 
            clipPath: 'inset(0 0 0 0)' 
          },
          '20%': { 
            clipPath: 'inset(80% 0 0 0)', 
            transform: 'translate(-1px, 0)' 
          },
          '40%': { 
            clipPath: 'inset(60% 0 20% 0)', 
            transform: 'translate(1px, 0)' 
          },
          '60%': { 
            clipPath: 'inset(40% 0 40% 0)', 
            transform: 'translate(0, -1px)' 
          },
          '80%': { 
            clipPath: 'inset(20% 0 60% 0)', 
            transform: 'translate(0, 1px)' 
          },
        },
      },
      backgroundImage: {
        'scanline': 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
      },
      backgroundSize: {
        'scanline': '100% 4px',
      },
    },
  },
  plugins: [],
};

export default config;