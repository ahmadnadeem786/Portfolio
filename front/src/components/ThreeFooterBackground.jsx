import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating particle component
const FloatingSphere = ({ position, color }) => {
  const meshRef = useRef();
  const speed = Math.random() * 0.01 + 0.005;
  const offset = Math.random() * 1000;

  useFrame(({ clock }) => {
    meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * speed + offset) * 0.5;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial
        emissive={color}
        color={color}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
};

// Main background component
const ThreeFooterBackground = () => {
  // Generate random spheres with position + color
  const particles = [...Array(40)].map((_, i) => ({
    position: [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 15
    ],
    color: new THREE.Color(`hsl(${Math.random() * 360}, 100%, 70%)`)
  }));

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Soft Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ffff" />

          {/* Floating Animated Spheres */}
          {particles.map((p, i) => (
            <FloatingSphere key={i} position={p.position} color={p.color} />
          ))}

          {/* Controls */}
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeFooterBackground;
