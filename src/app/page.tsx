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
      
      <div className="max-w-6xl mx-auto p-5 relative">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
