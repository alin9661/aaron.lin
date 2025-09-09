'use client';

import { projects } from '@/data/portfolio';
import { Project } from '@/types';

const statusColors = {
  LIVE: 'border-terminal-primary text-terminal-primary bg-terminal-primary/10',
  BETA: 'border-terminal-accent text-terminal-accent bg-terminal-accent/10',
  IN_DEV: 'border-terminal-secondary text-terminal-secondary bg-terminal-secondary/10',
  OSS: 'border-terminal-error text-terminal-error bg-terminal-error/10',
};

const statusIcons = {
  LIVE: '🟢',
  BETA: '🟡',
  IN_DEV: '🔵',
  OSS: '🔴',
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group bg-terminal-bg-secondary/30 backdrop-blur-sm rounded-lg border border-terminal-dark-green hover:border-terminal-primary transition-all duration-500 overflow-hidden hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-terminal-primary/20">
      {/* Project header */}
      <header className="p-4 sm:p-6 bg-terminal-bg-tertiary/40 border-b border-terminal-dark-green">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <h3 className="text-terminal-accent text-xl sm:text-2xl font-mono font-bold leading-tight">
            {project.title}
          </h3>
          <div className={`inline-flex items-center gap-2 text-xs sm:text-sm py-2 px-3 rounded-full border ${statusColors[project.status]} font-mono font-bold whitespace-nowrap`}>
            <span>{statusIcons[project.status]}</span>
            {project.status}
          </div>
        </div>
      </header>
      
      {/* Project content */}
      <div className="p-4 sm:p-6">
        {/* Description */}
        <p className="text-terminal-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-terminal-text-primary text-sm font-mono font-bold mb-3 flex items-center">
            <span className="text-terminal-primary mr-2">⚡</span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm py-1.5 px-3 bg-terminal-bg-secondary/60 border border-terminal-error/50 text-terminal-error rounded-md font-mono hover:border-terminal-error hover:bg-terminal-error/10 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="inline-flex items-center gap-2 text-terminal-secondary no-underline text-sm sm:text-base font-mono font-bold px-4 py-2 border border-terminal-secondary rounded-md transition-all duration-300 hover:text-terminal-bg-primary hover:bg-terminal-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-offset-2 focus:ring-offset-terminal-bg-primary"
              aria-label={`${link.label.replace(/[\[\]]/g, '')} for ${project.title}`}
            >
              <span>🔗</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      
      {/* Hover effect indicator */}
      <div className="h-1 bg-gradient-to-r from-terminal-primary via-terminal-secondary to-terminal-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </article>
  );
};

export const Projects = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24" id="projects">
      {/* Section header */}
      <header className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-terminal-secondary mb-4 font-mono">
          {'> FEATURED_PROJECTS/'}
        </h2>
        <div className="w-24 h-1 bg-terminal-secondary mx-auto rounded-full"></div>
        <p className="mt-4 text-terminal-text-secondary text-sm sm:text-base">
          A showcase of my recent work and contributions
        </p>
      </header>
      
      {/* Projects grid - responsive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Call to action */}
      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-terminal-text-secondary text-sm sm:text-base mb-4">
          Want to see more of my work?
        </p>
        <a
          href="https://github.com/aaronlin"
          className="inline-flex items-center gap-3 text-terminal-primary no-underline text-base sm:text-lg font-mono font-bold px-6 py-3 border-2 border-terminal-primary rounded-lg transition-all duration-300 hover:text-terminal-bg-primary hover:bg-terminal-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-terminal-primary focus:ring-offset-2 focus:ring-offset-terminal-bg-primary"
        >
          <span>👨‍💻</span>
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};