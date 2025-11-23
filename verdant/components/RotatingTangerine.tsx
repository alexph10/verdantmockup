'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { AsciiOrangeEffect } from './AsciiEffectOrange';
import { useGlyphTexture } from './GlyphTexture';
import { motion } from 'framer-motion';

function TangerineScene() {
  const { scene } = useGLTF('/tangerine.glb');
  const meshRef = useRef<THREE.Group>(null);
  const rotationSpeed = useRef(0.01);
  const time = useRef(0);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth oscillating rotation speed using sine wave
      time.current += delta;
      rotationSpeed.current = 0.01 + Math.sin(time.current * 0.5) * 0.005;
      meshRef.current.rotation.y += rotationSpeed.current;
    }
  });
  
  return (
    <primitive ref={meshRef} object={scene} scale={5} position={[0, 0, 0]} />
  );
}

export default function RotatingTangerine() {
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
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Canvas
        onCreated={(state) => {
          // Verify WebGL context is properly initialized
          if (!state.gl || !state.gl.getContextAttributes()) {
            setError(true);
          }
        }}
        camera={{
          position: [0, 0, 4],
          fov: 50,
        }}
        dpr={[1, 2]}
        gl={{ 
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: false
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={1} />
        
        <Suspense fallback={null}>
          <TangerineScene />
        </Suspense>
        
        {/* Post-processing with bloom and ASCII effect */}
        <EffectComposer multisampling={4}>
          <Bloom 
            intensity={3.0}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.95}
            mipmapBlur
            radius={0.8}
          />
          <AsciiOrangeEffect 
            glyphTexture={glyphTexture}
            characterSize={16}
            glyphCount={12}
            color="#ff8c42"
          />
        </EffectComposer>
      </Canvas>
    </motion.div>
  );
}

useGLTF.preload('/tangerine.glb');
