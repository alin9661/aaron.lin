import { contactLinks } from '@/data/portfolio';

export const Contact = () => {
  return (
    <section className="my-20 text-center p-10 border-2 border-terminal-cyan bg-terminal-cyan/[0.02]" id="contact">
      <h2 className="text-4xl mb-8 text-terminal-cyan">
        {'> LET&apos;S CONNECT'}
      </h2>
      <p className="mb-5">
        Ready to build something amazing together? I&apos;m always interested in working on 
        innovative projects and connecting with fellow developers.
      </p>
      <p className="text-terminal-amber mb-8">
        {'> aaron.lin@email.com '}
        <span className="inline-block animate-blink">█</span>
      </p>
      
      <div className="flex justify-center gap-8 flex-wrap">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-terminal-green no-underline py-3 px-5 border-2 border-terminal-green transition-all duration-300 hover:bg-terminal-green hover:text-black hover:scale-110"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};