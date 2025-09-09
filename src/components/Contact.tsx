import { contactLinks } from '@/data/portfolio';

const linkIcons = {
  '[GITHUB]': '🐙',
  '[LINKEDIN]': '💼',
  '[TWITTER]': '🐦',
  '[EMAIL]': '📧',
  '[RESUME.PDF]': '📄'
};

export const Contact = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <header className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-terminal-secondary mb-4 font-mono">
            {'> CONNECT.sh'}
          </h2>
          <div className="w-24 h-1 bg-terminal-secondary mx-auto rounded-full"></div>
        </header>
        
        {/* Terminal-style contact box */}
        <div className="bg-terminal-bg-secondary/40 backdrop-blur-sm rounded-lg border border-terminal-secondary/50 p-6 sm:p-8 lg:p-10 mb-12 shadow-lg">
          {/* Terminal header */}
          <div className="flex items-center justify-between mb-6 text-terminal-text-secondary">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-accent"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-primary"></div>
              </div>
              <span className="font-mono text-xs sm:text-sm">contact@aaron-lin.dev</span>
            </div>
            <div className="text-xs sm:text-sm font-mono opacity-60">⌘+K</div>
          </div>
          
          {/* Contact content */}
          <div className="text-left space-y-4 sm:space-y-6">
            <p className="text-terminal-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
              Ready to build something amazing together? I&apos;m always interested in working on 
              innovative projects and connecting with fellow developers.
            </p>
            
            <div className="bg-terminal-bg-tertiary/30 rounded-lg p-4 sm:p-6 border border-terminal-primary/30">
              <div className="flex items-center space-x-3 text-terminal-accent text-sm sm:text-base lg:text-lg font-mono">
                <span className="text-terminal-primary">$</span>
                <span>echo</span>
                <span className="text-terminal-text-primary">&quot;aaron.lin@email.com&quot;</span>
                <span className="inline-block animate-blink text-terminal-accent">_</span>
              </div>
              <div className="mt-2 text-terminal-accent text-sm sm:text-base lg:text-lg font-mono">
                aaron.lin@email.com
              </div>
            </div>
            
            <p className="text-terminal-text-dim text-xs sm:text-sm">
              💡 Pro tip: I respond fastest to emails and GitHub issues
            </p>
          </div>
        </div>
        
        {/* Contact links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="group flex flex-col items-center p-4 sm:p-6 bg-terminal-bg-secondary/30 backdrop-blur-sm rounded-lg border border-terminal-primary/30 hover:border-terminal-primary transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-terminal-primary/20 focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-offset-2 focus:ring-offset-terminal-bg-primary"
              aria-label={`Connect with me on ${link.label.replace(/[\[\]]/g, '').replace('.PDF', '')}`}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {linkIcons[link.label as keyof typeof linkIcons] || '🔗'}
              </div>
              <span className="text-terminal-text-primary font-mono font-bold text-xs sm:text-sm text-center group-hover:text-terminal-primary transition-colors duration-300">
                {link.label.replace(/[\[\]]/g, '')}
              </span>
            </a>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-12 sm:mt-16 bg-terminal-bg-tertiary/20 rounded-lg p-4 sm:p-6 border border-terminal-dark-green">
          <p className="text-terminal-text-secondary text-sm sm:text-base mb-3">
            🌟 Open for opportunities in:
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <span className="px-3 py-1 bg-terminal-primary/20 text-terminal-primary text-xs sm:text-sm rounded-full font-mono">Full-time</span>
            <span className="px-3 py-1 bg-terminal-secondary/20 text-terminal-secondary text-xs sm:text-sm rounded-full font-mono">Contract</span>
            <span className="px-3 py-1 bg-terminal-accent/20 text-terminal-accent text-xs sm:text-sm rounded-full font-mono">Consulting</span>
            <span className="px-3 py-1 bg-terminal-error/20 text-terminal-error text-xs sm:text-sm rounded-full font-mono">Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};