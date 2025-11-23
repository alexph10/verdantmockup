'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';

interface ProductSceneProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

function ProductScene({ modelPath, scale = 5, position = [0, -0.5, 0] }: ProductSceneProps) {
  const { scene } = useGLTF(modelPath);
  
  // Preserve original materials and colors
  useEffect(() => {
    if (scene) {
      scene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          // Clone material to avoid modifying the original
          const material = child.material.clone();
          child.material = material;
          
          // Handle texture loading gracefully
          if (material.map) {
            material.map.needsUpdate = true;
          }
          
          // Ensure material updates
          material.needsUpdate = true;
        }
      });
    }
  }, [scene]);
  
  return (
    <primitive object={scene} scale={scale} position={position} />
  );
}

interface ProductModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  disablePixelation?: boolean;
  disableZoom?: boolean;
}

export function ProductModel({ modelPath, scale = 10, position = [0, -0.5, 0], disablePixelation = false, disableZoom = false }: ProductModelProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Suppress texture loading errors from GLTFLoader
  useEffect(() => {
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.error = (...args: any[]) => {
      const message = args[0]?.toString() || '';
      // Suppress THREE.GLTFLoader texture errors (these are benign)
      if (message.includes('GLTFLoader') && message.includes('texture')) {
        return;
      }
      if (message.includes('blob:') && message.includes('texture')) {
        return;
      }
      originalError.apply(console, args);
    };
    
    console.warn = (...args: any[]) => {
      const message = args[0]?.toString() || '';
      // Suppress texture-related warnings
      if (message.includes('texture') && message.includes('load')) {
        return;
      }
      originalWarn.apply(console, args);
    };
    
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);
  
  if (!mounted) return <div className="w-full h-full" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }} />;
  
  return (
    <div className="w-full h-full" style={{ backgroundColor: 'rgba(255, 255, 220, 0.95)' }}>
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 50,
        }}
        gl={{ 
          alpha: false,
          antialias: false,
          preserveDrawingBuffer: true,
        }}
      >
        <color attach="background" args={['rgba(255, 255, 220, 1)']} />
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#ffffff" />
        <pointLight position={[0, 5, 0]} intensity={0.4} />
        
        <Suspense fallback={null}>
          <ProductScene modelPath={modelPath} scale={scale} position={position} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={!disableZoom}
          enablePan={true}
          enableRotate={true}
          makeDefault
        />
        
        {!disablePixelation && (
          <EffectComposer>
            <Pixelation granularity={8} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
}

// Preload models
useGLTF.preload('/tangerine_tree.glb');
useGLTF.preload('/statue-dusk.glb');
useGLTF.preload('/pine-forest.glb');
useGLTF.preload('/texan-forest.glb');
useGLTF.preload('/flowerbed.glb');
useGLTF.preload('/apple.glb');
useGLTF.preload('/orange.glb');
useGLTF.preload('/orchid.glb');

