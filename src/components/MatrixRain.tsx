import { useMatrixRain } from '@/hooks';

export const MatrixRain = () => {
  const containerRef = useMatrixRain();

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 z-[-1]"
      id="matrixRain"
    />
  );
};