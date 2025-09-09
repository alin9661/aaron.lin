import { useSmoothScroll } from '@/hooks';
import { navItems } from '@/data/portfolio';

// Full ASCII art for desktop (fixed widths)
const asciiArtDesktop = `╔═══════════════════════════════════════════════════════════════════════════════╗
║   █████╗  █████╗ ██████╗  ██████╗ ███╗   ██╗    ██╗     ██╗███╗   ██╗         ║
║  ██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║    ██║     ██║████╗  ██║         ║
║  ███████║███████║██████╔╝██║   ██║██╔██╗ ██║    ██║     ██║██╔██╗ ██║         ║
║  ██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██║    ██║     ██║██║╚██╗██║         ║
║  ██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████║    ███████╗██║██║ ╚████║         ║
║  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝╚═╝  ╚═══╝         ║
╚═══════════════════════════════════════════════════════════════════════════════╝`;

// Simplified ASCII art for tablet (reverted text; borders aligned)
const asciiArtTablet = `╔════════════════════════════════════════════╗
║  █████╗  █████╗ ██████╗  ██████╗ ███╗   ██ ║
║ ██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██ ║
║ ███████║███████║██████╔╝██║   ██║██╔██╗ ██ ║
║ ██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██ ║
║ ██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████ ║
║ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══ ║
╚════════════════════════════════════════════╝`;

// Simple logo for mobile
const asciiArtMobile = `┌─────────────────┐
│   AARON  LIN    │
│  < DEVELOPER >  │
└─────────────────┘`;

export const Header = () => {
  const { handleNavClick } = useSmoothScroll();

  return (
    <header className="py-8 sm:py-12 lg:py-16">
      {/* Responsive ASCII Art Header */}
      <div className="text-center">
        {/* Mobile ASCII - Visible on small screens */}
        <div className="block md:hidden">
          <div className="text-terminal-primary text-ascii sm:text-ascii-lg animate-glow whitespace-pre leading-tight font-mono overflow-x-auto mx-auto">
            {asciiArtMobile}
          </div>
          <div className="mt-4 text-terminal-accent text-xs sm:text-sm font-bold tracking-wider p-4">
            FULL-STACK DEVELOPER & DIGITAL CRAFTSMAN
          </div>
        </div>

        {/* Tablet ASCII - Visible on medium screens */}
        <div className="hidden md:block lg:hidden">
          <div className="text-terminal-primary text-ascii-lg animate-glow whitespace-pre leading-tight font-mono overflow-x-auto">
            {asciiArtTablet}
          </div>
          <div className="mt-6 text-terminal-accent text-base font-bold tracking-wide">
            [ FULL-STACK DEVELOPER & DIGITAL CRAFTSMAN ]
          </div>
        </div>

        {/* Desktop ASCII - Visible on large screens */}
        <div className="hidden lg:block">
          <div className="text-terminal-primary text-ascii-lg animate-glow whitespace-pre leading-tight font-mono py-4">
            {asciiArtDesktop}
          </div>
          <div className="mt-6 text-terminal-accent text-lg font-bold tracking-wide">
            [ FULL-STACK DEVELOPER & DIGITAL CRAFTSMAN ]
          </div>
        </div>
      </div>

      {/* Improved Navigation */}
      <nav className="mt-12 p-4 sm:mt-16" role="navigation" aria-label="Main navigation">
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 lg:gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleNavClick}
              className="group text-terminal-secondary no-underline py-3 px-4 sm:px-5 lg:px-6 border-2 border-terminal-secondary transition-all duration-300 relative overflow-hidden hover:text-terminal-bg-primary hover:scale-105 focus:scale-105 text-sm sm:text-base lg:text-lg font-medium
                before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-terminal-secondary before:transition-all before:duration-300 before:-z-10 
                hover:before:left-0 focus:before:left-0
                focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-offset-2 focus:ring-offset-terminal-bg-primary
                active:transform active:scale-95"
              aria-label={`Navigate to ${item.label.replace(/[\[\]]/g, '')}`}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-terminal-bg-primary">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
