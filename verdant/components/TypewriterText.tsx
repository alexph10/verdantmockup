'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  className?: string;
}

export function TypewriterText({
  texts,
  speed = 100,
  deleteSpeed = 50,
  waitTime = 2000,
  className = ''
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    if (!isDeleting && currentText === targetText) {
      // Wait before starting to delete
      const timeout = setTimeout(() => setIsDeleting(true), waitTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === '') {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return targetText.slice(0, prev.length + 1);
          }
        });
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, waitTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
