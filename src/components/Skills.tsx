import { skillCategories } from '@/data/portfolio';

export const Skills = () => {
  return (
    <section className="my-20" id="skills">
      <h2 className="text-center text-4xl mb-10 text-terminal-cyan">
        {'> TECH STACK & SKILLS'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="border-2 border-terminal-green p-5 bg-terminal-green/[0.02]"
          >
            <h3 className="text-terminal-amber mb-4 text-2xl">
              {category.title}
            </h3>
            <ul className="list-none">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="my-2 pl-5 relative before:content-['>'] before:absolute before:left-0 before:text-terminal-cyan"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};