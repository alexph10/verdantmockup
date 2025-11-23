'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

export function useGlyphTexture(characters = ' .\',:;-=+*#%@', fontSize = 64) {
  return useMemo(() => {
    if (typeof document === 'undefined') return null;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    const charCount = characters.length;
    const cellSize = fontSize;
    
    canvas.width = cellSize * charCount;
    canvas.height = cellSize;
    
    // Black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw each character in white
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${fontSize * 0.8}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < charCount; i++) {
      ctx.fillText(
        characters[i],
        i * cellSize + cellSize / 2,
        cellSize / 2
      );
    }
    
    // Create Three.js texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    
    return texture;
  }, [characters, fontSize]);
}

