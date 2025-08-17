import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    // Set background color
    scene.background = new THREE.Color("#101820"); // background color

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Create particle system
    const particleCount = 500;
    const particles = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < particleCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }

    particles.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf2aa4c, // particle color (accent)
      size: 0.1,
      transparent: true,
      opacity: 0.8,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animate particles
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeBackground;
