'use client';

import { projects } from '@/data/portfolio';
import { Project } from '@/types';

const statusColors = {
  LIVE: 'border-terminal-green text-terminal-green',
  BETA: 'border-terminal-amber text-terminal-amber',
  IN_DEV: 'border-terminal-cyan text-terminal-cyan',
  OSS: 'border-terminal-magenta text-terminal-magenta',
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border-2 border-terminal-green p-6 text-left transition-all duration-300 relative bg-terminal-green/[0.02] hover:-translate-y-3 hover:shadow-[0_10px_20px_rgba(0,255,0,0.3)] hover:bg-terminal-green/10 group">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl text-terminal-amber">
          {project.title}
        </h3>
        <span className={`text-sm py-1 px-2 border ${statusColors[project.status]}`}>
          [{project.status}]
        </span>
      </div>
      
      <p className="text-terminal-green opacity-90 leading-relaxed mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-sm py-1 px-2 border border-terminal-magenta text-terminal-magenta"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-4 flex gap-4">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-terminal-cyan no-underline text-base transition-all duration-300 hover:text-terminal-green hover:drop-shadow-[0_0_5px_currentColor]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="my-20" id="projects">
      <h2 className="text-center text-4xl mb-10 text-terminal-cyan">
        {'> FEATURED PROJECTS'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};