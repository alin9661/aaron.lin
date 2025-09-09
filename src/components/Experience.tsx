import { experienceItems } from '@/data/portfolio';

export const Experience = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-terminal-error mb-4 font-mono">
            {'> EXPERIENCE.log'}
          </h2>
          <div className="w-24 h-1 bg-terminal-error mx-auto rounded-full"></div>
          <p className="mt-4 text-terminal-text-secondary text-sm sm:text-base">
            My professional journey in tech
          </p>
        </header>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-terminal-primary via-terminal-secondary to-terminal-accent"></div>
          
          {experienceItems.map((item, index) => (
            <div key={item.id} className="relative pl-12 sm:pl-16 pb-12 sm:pb-16 last:pb-0">
              {/* Timeline marker */}
              <div className="absolute left-2.5 sm:left-4.5 top-2 w-4 h-4 bg-terminal-bg-primary border-4 border-terminal-secondary rounded-full shadow-lg shadow-terminal-secondary/50"></div>
              
              {/* Experience card */}
              <article className="bg-terminal-bg-secondary/30 backdrop-blur-sm rounded-lg border border-terminal-dark-green hover:border-terminal-secondary transition-all duration-300 overflow-hidden group hover:transform hover:scale-[1.02]">
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Date badge */}
                  <div className="inline-flex items-center gap-2 text-terminal-accent text-sm sm:text-base font-mono font-bold mb-3 bg-terminal-accent/10 px-3 py-1 rounded-full border border-terminal-accent/30">
                    <span>📅</span>
                    {item.date}
                  </div>
                  
                  {/* Title and company */}
                  <header className="mb-4">
                    <h3 className="text-terminal-secondary text-xl sm:text-2xl lg:text-3xl font-mono font-bold mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-terminal-error text-base sm:text-lg font-mono">
                      <span>🏢</span>
                      {item.company}
                    </div>
                  </header>
                  
                  {/* Description */}
                  <p className="text-terminal-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                    {item.description}
                  </p>
                  
                  {/* Experience number indicator */}
                  <div className="mt-4 pt-4 border-t border-terminal-dark-green/50 flex items-center justify-between">
                    <div className="text-terminal-text-dim text-xs sm:text-sm font-mono">
                      Experience #{experienceItems.length - index}
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-terminal-primary rounded-full animate-pulse"></div>
                      <span className="text-terminal-text-dim text-xs">Active memory</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect indicator */}
                <div className="h-1 bg-gradient-to-r from-terminal-secondary to-terminal-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </article>
            </div>
          ))}
        </div>
        
        {/* Summary */}
        <div className="mt-12 sm:mt-16 text-center bg-terminal-bg-secondary/20 rounded-lg p-6 sm:p-8 border border-terminal-dark-green">
          <p className="text-terminal-text-secondary text-sm sm:text-base mb-4">
            🚀 <strong className="text-terminal-primary">5+ years</strong> of experience building scalable applications and leading development teams
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <span className="px-3 py-1 bg-terminal-primary/20 text-terminal-primary text-xs sm:text-sm rounded-full font-mono">Team Leadership</span>
            <span className="px-3 py-1 bg-terminal-secondary/20 text-terminal-secondary text-xs sm:text-sm rounded-full font-mono">Architecture</span>
            <span className="px-3 py-1 bg-terminal-accent/20 text-terminal-accent text-xs sm:text-sm rounded-full font-mono">Mentoring</span>
            <span className="px-3 py-1 bg-terminal-error/20 text-terminal-error text-xs sm:text-sm rounded-full font-mono">Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
};