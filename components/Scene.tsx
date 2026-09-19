'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WireframeIcosahedron = () => {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handlePointerMove = (e: PointerEvent) => {
    // Normalize mouse position between -1 and 1
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMousePos({ x, y });
  };

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const geometry1 = useMemo(() => new THREE.IcosahedronGeometry(1, 1), []);
  const geometry2 = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);

  useFrame((state, delta) => {
    const speed = prefersReducedMotion ? 0.05 : 1;
    if (meshRef1.current) {
      meshRef1.current.rotation.x += 0.002 * speed;
      meshRef1.current.rotation.y += 0.003 * speed;
      if (!prefersReducedMotion) {
        meshRef1.current.rotation.x += mousePos.y * 0.01;
        meshRef1.current.rotation.y += mousePos.x * 0.01;
      }
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x -= 0.001 * speed;
      meshRef2.current.rotation.y -= 0.002 * speed;
      if (!prefersReducedMotion) {
        meshRef2.current.rotation.x += mousePos.y * 0.01;
        meshRef2.current.rotation.y += mousePos.x * 0.01;
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef1} geometry={geometry1}>
        <meshBasicMaterial color="#4fc3f7" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh ref={meshRef2} geometry={geometry2}>
        <meshBasicMaterial color="#ab47bc" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default function Scene() {
  const [hasError, setHasError] = useState(false);

  if (hasError) return <div className="w-full h-full bg-transparent" />;

  return (
    <div className="w-full h-full relative" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent', pointerEvents: 'none' }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000000'), 0);
        }}
      >
        <ambientLight intensity={1} />
        <WireframeIcosahedron />
      </Canvas>
    </div>
  );
}
