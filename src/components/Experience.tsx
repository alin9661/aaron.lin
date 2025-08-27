import { experienceItems } from '@/data/portfolio';

export const Experience = () => {
  return (
    <section className="my-20" id="experience">
      <h2 className="text-center text-4xl mb-10 text-terminal-purple">
        {'> EXPERIENCE TIMELINE'}
      </h2>
      
      <div className="relative max-w-4xl mx-auto before:content-[''] before:absolute before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-terminal-dark-green">
        {experienceItems.map((item) => (
          <div key={item.id} className="relative pl-16 mb-10">
            {/* Timeline marker */}
            <div className="absolute left-3 top-0 w-5 h-5 bg-black border-4 border-terminal-cyan rounded-full" />
            
            {/* Timeline content */}
            <div className="border border-terminal-dark-green p-5 bg-terminal-green/[0.03]">
              <div className="text-terminal-amber text-base mb-1">
                {item.date}
              </div>
              <div className="text-terminal-cyan text-2xl mb-1">
                {item.title}
              </div>
              <div className="text-terminal-magenta mb-3">
                {item.company}
              </div>
              <div className="leading-relaxed opacity-90">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};