'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { EffectComposer } from '@react-three/postprocessing';
import { AsciiTextureEffect } from './AsciiEffectTexture';
import { useGlyphTexture } from './GlyphTexture';

function TangerineScene() {
  const { scene } = useGLTF('/tangerine.glb');
  
  return (
    <primitive object={scene} scale={8} position={[0, 0, 0]} />
  );
}

export function TangerineModel() {
  const glyphTexture = useGlyphTexture(' .\',:;-=+*#%@', 64);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  if (!glyphTexture || !mounted) return null;
  
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 50,
        }}
        gl={{ 
          alpha: true,
          antialias: true,
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        
        <Suspense fallback={null}>
          <TangerineScene />
        </Suspense>
        
        <EffectComposer>
          <AsciiTextureEffect 
            glyphTexture={glyphTexture}
            characterSize={16}
            glyphCount={12}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/tangerine.glb');
