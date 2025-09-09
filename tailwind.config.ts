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
          // New eye-friendly color palette
          'primary': '#06d6a0',         // Mint green - main accent
          'secondary': '#118ab2',       // Professional blue
          'accent': '#ffd60a',          // Warm yellow
          'error': '#f72585',           // Pink for glitch effects
          
          // Background colors (softer than pure black)
          'bg-primary': '#0f172a',      // Slate 900 - main background
          'bg-secondary': '#1e293b',    // Slate 800 - elevated surfaces
          'bg-tertiary': '#334155',     // Slate 600 - subtle divisions
          
          // Text colors
          'text-primary': '#f1f5f9',    // Slate 100 - main text
          'text-secondary': '#cbd5e1',  // Slate 300 - secondary text
          'text-dim': '#64748b',        // Slate 500 - muted text
          
          // Legacy colors for backwards compatibility
          'green': '#06d6a0',           // Updated to new primary
          'dark-green': '#059669',      // Darker mint green
          'amber': '#ffd60a',          // Updated to new accent
          'cyan': '#118ab2',           // Updated to new secondary
          'magenta': '#f72585',        // Updated to new error
          'purple': '#8b5cf6',         // Softer purple
          'bg-dark': '#1e293b',        // Updated to new secondary bg
          'bg-terminal': '#0f172a',    // Updated to new primary bg
          'glitch-red': '#f72585',     // Updated to new error
          'glitch-blue': '#118ab2',    // Updated to new secondary
        }
      },
      fontFamily: {
        'mono': ['VT323', 'monospace'],
      },
      fontSize: {
        // Fluid typography using clamp()
        'xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        '3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem)',
        '4xl': 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',
        '5xl': 'clamp(2.5rem, 2rem + 2.5vw, 3.5rem)',
        
        // Terminal-specific sizes
        'terminal': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
        'terminal-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
        'ascii': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.875rem)',
        'ascii-lg': 'clamp(0.625rem, 0.5rem + 0.625vw, 1rem)',
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
      spacing: {
        // 8pt grid system for consistent spacing
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
      },
      maxWidth: {
        // Custom container sizes
        'xs': '20rem',     // 320px
        'sm': '40rem',     // 640px  
        'md': '48rem',     // 768px
        'lg': '64rem',     // 1024px
        'xl': '80rem',     // 1280px
        '2xl': '96rem',    // 1536px
        'terminal': '90rem', // 1440px - optimal for terminal content
      },
      screens: {
        // Custom breakpoints for better responsive design
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;