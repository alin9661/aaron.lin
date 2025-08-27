import { useEffect } from 'react';

export const useConsoleEasterEgg = () => {
  useEffect(() => {
    // Console Easter Egg
    console.log('%c' + `
╔═══════════════════════════════════════╗
║  WELCOME TO MY DEVELOPER CONSOLE     ║
║  Curious? Let's chat!                ║
║  > aaron.lin@email.com               ║
╚═══════════════════════════════════════╝
    `, 'color: #00ff00; font-family: monospace; font-size: 14px;');

    // Add interactive console commands
    (window as unknown as Record<string, unknown>).portfolio = {
      about: () => {
        console.log('%c About Aaron Lin:', 'color: #00ffff; font-size: 16px;');
        console.log('Full-stack developer passionate about creating digital experiences.');
        return 'Type portfolio.skills() to see my tech stack!';
      },
      skills: () => {
        console.log('%c Tech Stack:', 'color: #ffb000; font-size: 16px;');
        console.table({
          Frontend: 'React, Next.js, TypeScript',
          Backend: 'Node.js, Python, PostgreSQL',
          DevOps: 'Docker, AWS, CI/CD'
        });
        return 'Type portfolio.contact() to get in touch!';
      },
      contact: () => {
        console.log('%c Let\'s Connect!', 'color: #ff00ff; font-size: 16px;');
        console.log('Email: aaron.lin@email.com');
        console.log('GitHub: github.com/aaronlin');
        console.log('LinkedIn: linkedin.com/in/aaronlin');
        return 'Looking forward to hearing from you!';
      },
      secret: () => {
        console.log('%c 🎮 Achievement Unlocked!', 'color: #00ff00; font-size: 20px;');
        return 'You found the secret command! Here\'s a virtual high-five 🖐️';
      }
    };

    console.log('Try typing: portfolio.about()');

    // Update last modified date
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
      lastUpdateElement.textContent = new Date().toLocaleDateString();
    }
  }, []);
};