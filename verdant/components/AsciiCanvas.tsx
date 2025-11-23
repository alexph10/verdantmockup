'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { ForestScene } from './ForestScene';
import { AsciiTextureEffect } from './AsciiEffectTexture';
import { useGlyphTexture } from './GlyphTexture';

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-white text-xl font-mono">Loading forest...</p>
    </div>
  );
}

export function AsciiCanvas() {
  const glyphTexture = useGlyphTexture(' .\',:;-=+*#%@', 64);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // Add a small delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (error) return null;
  if (!glyphTexture || !mounted) return null;
  
  return (
    <div className="w-screen h-screen fixed top-0 left-0 pointer-events-none">
      <Canvas
        onCreated={(state) => {
          // Verify WebGL context is properly initialized
          if (!state.gl || !state.gl.getContextAttributes()) {
            setError(true);
          }
        }}
        camera={{
          position: [0, 4, 18],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        dpr={[1, 2]}
        gl={{ 
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: false
        }}
      >
        {/* Scene */}
        <Suspense fallback={null}>
          <ForestScene />
        </Suspense>
        
        {/* Post-processing with bloom and ASCII texture effect */}
        <EffectComposer multisampling={4}>
          <Bloom 
            intensity={5.0}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.95}
            mipmapBlur
            radius={0.8}
          />
          <AsciiTextureEffect 
            characterSize={10} 
            glyphTexture={glyphTexture}
            glyphCount={12}
          />
        </EffectComposer>
      </Canvas>
      
      {/* Loading UI overlay */}
      <Suspense fallback={<LoadingFallback />} />
    </div>
  );
}

