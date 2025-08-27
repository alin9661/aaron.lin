import { useState, useEffect, useRef, useCallback } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  autoStart?: boolean;
}

export const useTypewriter = ({ 
  text, 
  speed = 50, 
  startDelay = 0,
  autoStart = true 
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const indexRef = useRef(0);

  const startTyping = useCallback(() => {
    setDisplayText('');
    setIsComplete(false);
    indexRef.current = 0;

    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayText(prev => prev + text.charAt(indexRef.current));
        indexRef.current++;
        timeoutRef.current = setTimeout(type, speed);
      } else {
        setIsComplete(true);
      }
    };

    if (startDelay > 0) {
      timeoutRef.current = setTimeout(type, startDelay);
    } else {
      type();
    }
  }, [text, speed, startDelay]);

  useEffect(() => {
    if (autoStart) {
      startTyping();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoStart, startTyping]);

  return {
    displayText,
    isComplete,
    startTyping,
  };
};