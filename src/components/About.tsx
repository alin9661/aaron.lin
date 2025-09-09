export const About = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="about">
      <div className="max-w-4xl mx-auto flex">
        {/* Section header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-terminal-error mb-4 font-mono">
            {'> ABOUT_ME.md'}
          </h2>
          <div className="w-24 h-1 bg-terminal-primary mx-auto rounded-full"></div>
        </header>

        {/* Status indicator */}
        <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-terminal-bg-secondary/40 rounded-lg border border-terminal-dark-green">
          <div className="flex items-center text-terminal-primary text-sm sm:text-base lg:text-lg">
            <span className="status-indicator mr-3" />
            <span className="font-mono">Status: </span>
            <span className="text-terminal-primary font-bold ml-2">Available for opportunities</span>
          </div>
        </div>

        {/* About content with better typography */}
        <div className="space-y-6 sm:space-y-8 text-terminal-text-secondary leading-relaxed">
          <p className="text-base sm:text-lg lg:text-xl first-letter:text-4xl first-letter:font-bold first-letter:text-terminal-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none">
            I&apos;m a full-stack developer with a passion for building digital experiences that matter.
            My journey in tech started with curiosity about how things work and evolved into a
            dedication to creating solutions that make a difference.
          </p>

          <p className="text-base sm:text-lg lg:text-xl">
            I specialize in modern JavaScript frameworks, cloud architecture, and creating
            performant applications that scale. When I&apos;m not coding, you&apos;ll find me exploring
            new technologies, contributing to open source, or experimenting with creative coding projects.
          </p>

          <p className="text-base sm:text-lg lg:text-xl">
            My approach combines technical expertise with creative problem-solving, always focusing
            on user experience and code quality. I believe in writing code that&apos;s not just functional,
            but elegant and maintainable.
          </p>
        </div>

        {/* Skills highlight */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6 bg-terminal-bg-secondary/20 rounded-lg border border-terminal-dark-green/50 hover:border-terminal-primary transition-colors duration-300">
            <div className="text-2xl sm:text-3xl mb-2 text-terminal-primary">⚡</div>
            <h3 className="font-mono text-terminal-primary text-sm sm:text-base font-bold mb-2">Performance</h3>
            <p className="text-xs sm:text-sm text-terminal-text-dim">Optimized, scalable solutions</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-terminal-bg-secondary/20 rounded-lg border border-terminal-dark-green/50 hover:border-terminal-accent transition-colors duration-300">
            <div className="text-2xl sm:text-3xl mb-2 text-terminal-accent">🎨</div>
            <h3 className="font-mono text-terminal-accent text-sm sm:text-base font-bold mb-2">Design</h3>
            <p className="text-xs sm:text-sm text-terminal-text-dim">User-focused interfaces</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-terminal-bg-secondary/20 rounded-lg border border-terminal-dark-green/50 hover:border-terminal-secondary transition-colors duration-300">
            <div className="text-2xl sm:text-3xl mb-2 text-terminal-secondary">🚀</div>
            <h3 className="font-mono text-terminal-secondary text-sm sm:text-base font-bold mb-2">Innovation</h3>
            <p className="text-xs sm:text-sm text-terminal-text-dim">Cutting-edge technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};
