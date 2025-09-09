'use client';

import { useConsoleEasterEgg } from '@/hooks';
import {
  MatrixRain,
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer
} from '@/components';

export default function Home() {
  useConsoleEasterEgg();

  return (
    <>
      <MatrixRain />

      <div className="w-full">
        {/* Container with responsive padding and max-width */}
        <div className="max-w-terminal p-8 mx-auto px-4 sm:px-6 l:px-8 relative">
          <Header />
          <Hero />
        </div>

        {/* Full-width sections with inner containers */}
        <div className="w-full b-terminal-bg-secondary/30">
          <div className="max-w-terminal mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </div>

        <div className="max-w-terminal mx-auto px-4 sm:px-6 lg:px-8">
          <Skills />
        </div>

        <div className="w-full bg-terminal-bg-secondary/20">
          <div className="max-w-terminal mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
        </div>

        <div className="max-w-terminal mx-auto px-4 sm:px-6 lg:px-8">
          <Experience />
        </div>

        <div className="w-full bg-terminal-bg-secondary/30">
          <div className="max-w-terminal mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </div>

        <div className="max-w-terminal mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </div>
    </>
  );
}
