import { useSmoothScroll } from '@/hooks';
import { navItems } from '@/data/portfolio';

const asciiArt = `╔═══════════════════════════════════════════════════════════════════════════════╗
║   █████╗  █████╗ ██████╗  ██████╗ ███╗   ██╗    ██╗     ██╗███╗   ██╗       ║
║  ██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║    ██║     ██║████╗  ██║       ║
║  ███████║███████║██████╔╝██║   ██║██╔██╗ ██║    ██║     ██║██╔██╗ ██║       ║
║  ██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██║    ██║     ██║██║╚██╗██║       ║
║  ██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████║    ███████╗██║██║ ╚████║       ║
║  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝╚═╝  ╚═══╝       ║
╚═══════════════════════════════════════════════════════════════════════════════╝
                     [ FULL-STACK DEVELOPER & DIGITAL CRAFTSMAN ]`;

export const Header = () => {
  const { handleNavClick } = useSmoothScroll();

  return (
    <>
      {/* ASCII Art Header */}
      <div className="text-center whitespace-pre text-ascii leading-tight text-terminal-green my-10 animate-glow md:text-ascii-mobile overflow-x-auto">
        {asciiArt}
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 my-8 flex-wrap">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={handleNavClick}
            className="text-terminal-cyan no-underline py-3 px-5 border-2 border-terminal-cyan transition-all duration-300 relative overflow-hidden hover:text-black hover:scale-110 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-terminal-cyan before:transition-all before:duration-300 before:-z-10 hover:before:left-0"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};