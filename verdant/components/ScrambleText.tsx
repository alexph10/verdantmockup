'use client';

import { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  maxIterations?: number;
}

export function ScrambleText({ 
  text, 
  className = '',
  scrambleSpeed = 30,
  maxIterations = 8
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const iterationRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';

  useEffect(() => {
    if (isHovering) {
      iterationRef.current = 0;

      intervalRef.current = setInterval(() => {
        setDisplayText(prev => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              
              if (index < iterationRef.current) {
                return text[index];
              }
              
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });

        iterationRef.current += 1 / maxIterations;

        if (iterationRef.current >= text.length) {
          setDisplayText(text);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, scrambleSpeed);
    } else {
      setDisplayText(text);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, text, scrambleSpeed, maxIterations, characters]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}
