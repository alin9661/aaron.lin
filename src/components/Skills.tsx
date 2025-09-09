import { skillCategories } from '@/data/portfolio';

const categoryIcons = {
  '[FRONTEND]': '🎨',
  '[BACKEND]': '⚙️',
  '[DEVOPS & TOOLS]': '🚀'
};

export const Skills = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="skills">
      {/* Section header */}
      <header className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-terminal-secondary mb-4 font-mono">
          {'> TECH_STACK.json'}
        </h2>
        <div className="w-24 h-1 bg-terminal-secondary mx-auto rounded-full"></div>
        <p className="mt-4 text-terminal-text-secondary text-sm sm:text-base">
          Technologies and tools I work with
        </p>
      </header>
      
      {/* Skills grid with improved responsive design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-terminal-bg-secondary/30 backdrop-blur-sm rounded-lg border border-terminal-dark-green hover:border-terminal-primary transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
          >
            {/* Category header */}
            <div className="p-4 sm:p-6 bg-terminal-bg-tertiary/40 border-b border-terminal-dark-green">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">
                  {categoryIcons[category.title as keyof typeof categoryIcons] || '💻'}
                </span>
                <h3 className="text-terminal-accent text-lg sm:text-xl lg:text-2xl font-mono font-bold">
                  {category.title}
                </h3>
              </div>
            </div>
            
            {/* Skills list */}
            <div className="p-4 sm:p-6">
              <ul className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center space-x-3 text-terminal-text-secondary hover:text-terminal-primary transition-colors duration-200 text-sm sm:text-base"
                  >
                    <span className="text-terminal-primary font-mono text-xs">▸</span>
                    <span className="leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Hover effect indicator */}
            <div className="h-1 bg-gradient-to-r from-terminal-primary to-terminal-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* Additional info */}
      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-terminal-text-dim text-sm sm:text-base">
          Always learning new technologies and expanding my skill set
        </p>
        <div className="mt-4 flex justify-center items-center space-x-2">
          <div className="w-2 h-2 bg-terminal-primary rounded-full animate-pulse"></div>
          <span className="text-terminal-text-secondary text-xs sm:text-sm font-mono">
            Currently exploring: WebAssembly, Rust, and AI/ML integrations
          </span>
        </div>
      </div>
    </section>
  );
};