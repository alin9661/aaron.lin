import { useEffect, useRef } from 'react';

export const useMatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createMatrixRain = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing columns
      container.innerHTML = '';

      const columns = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 20 + 'px';
        column.style.animationDuration = Math.random() * 5 + 5 + 's';
        column.style.animationDelay = Math.random() * 5 + 's';

        // Random characters - mix of code symbols and binary
        const chars = '01{}[]()<>/*-+=;:.,!@#$%^&|~`';
        let text = '';
        for (let j = 0; j < 30; j++) {
          text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        container.appendChild(column);
      }
    };

    createMatrixRain();

    const handleResize = () => {
      createMatrixRain();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return containerRef;
};