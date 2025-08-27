export const About = () => {
  return (
    <section className="my-20 py-10 border-t-2 border-b-2 border-terminal-dark-green" id="about">
      <div className="max-w-4xl mx-auto leading-loose px-5">
        <h2 className="text-4xl text-terminal-magenta mb-8 text-center">
          {'> ABOUT ME'}
        </h2>
        <p className="mb-4">
          <span className="status-indicator" />
          Status: Available for opportunities
        </p>
        <br />
        <p className="mb-4">
          I&apos;m a full-stack developer with a passion for building digital experiences that matter. 
          My journey in tech started with curiosity about how things work and evolved into a 
          dedication to creating solutions that make a difference.
        </p>
        <br />
        <p className="mb-4">
          I specialize in modern JavaScript frameworks, cloud architecture, and creating 
          performant applications that scale. When I&apos;m not coding, you&apos;ll find me exploring 
          new technologies, contributing to open source, or experimenting with creative coding projects.
        </p>
        <br />
        <p>
          My approach combines technical expertise with creative problem-solving, always focusing 
          on user experience and code quality. I believe in writing code that&apos;s not just functional, 
          but elegant and maintainable.
        </p>
      </div>
    </section>
  );
};