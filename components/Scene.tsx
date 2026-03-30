
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SketchStars = () => {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <group key={i} position={[positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]]}>
          {/* Simple line-based cross star */}
          <line>
            <bufferGeometry attach="geometry">
              <float32BufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([-0.05, 0, 0, 0.05, 0, 0])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="white" transparent opacity={0.4} />
          </line>
          <line>
            <bufferGeometry attach="geometry">
              <float32BufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([0, -0.05, 0, 0, 0.05, 0])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="white" transparent opacity={0.4} />
          </line>
        </group>
      ))}
    </group>
  );
};

const MainModel = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color="#f472b6"
          speed={3}
          distort={0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#fbcfe8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#db2777" />
        
        <SketchStars />
        <MainModel />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          minDistance={3} 
          maxDistance={10} 
          autoRotate 
          autoRotateSpeed={0.5}
          makeDefault
        />
      </Canvas>
    </div>
  );
};

export default Scene;
