'use client';

import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function ForestScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load the forest model
  const { scene } = useGLTF('/forest.glb');
  
  // Auto rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });
  
  return (
    <>
      {/* Brighter Lighting */}
      <ambientLight intensity={2.5} />
      <directionalLight position={[10, 10, 5]} intensity={4} castShadow />
      <directionalLight position={[-10, 10, -5]} intensity={3} />
      <directionalLight position={[0, -5, 0]} intensity={2} />
      <pointLight position={[0, 10, 0]} intensity={3} color="#ffffff" />
      <pointLight position={[5, 5, 5]} intensity={2} color="#ffaa66" />
      <pointLight position={[-5, 5, -5]} intensity={1.5} color="#66ddff" />
      <hemisphereLight intensity={2} groundColor="#666666" />
      
      {/* Environment for reflections */}
      <Environment preset="forest" />
      
      {/* Forest Model */}
      <group ref={groupRef}>
        <primitive object={scene} scale={3} position={[0, -5, 0]} />
      </group>
      
      {/* Camera Controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        enableZoom={false}
        minDistance={5}
        maxDistance={50}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Preload the model
useGLTF.preload('/forest.glb');

