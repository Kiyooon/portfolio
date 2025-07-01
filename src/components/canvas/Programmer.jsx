import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Programmer = ({ isMobile }) => {
  const programmer = useGLTF("./programmer/scene.gltf");

  // State to track rotation
  const [autoRotate, setAutoRotate] = useState(true);

  // Track rotation using useFrame
  useFrame(() => {
    if (autoRotate) {
      programmer.scene.rotation.y += 0.01; // Adjust the speed here (0.01 for slow rotation)
    }
  });

  // Mouse interaction events to control auto rotation
  useEffect(() => {
    const handleMouseDown = () => setAutoRotate(false);
    const handleMouseUp = () => setAutoRotate(true);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <mesh>
      <primitive
        object={programmer.scene}
        scale={isMobile ? 0.9 : 1.5}
        position={[0, -2, 0]}
        rotation={[0, 3.2, 0]}
      />
    </mesh>
  );
};

const ProgrammerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1.4);

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true, localClippingEnabled: true }}
      onCreated={({ gl }) => {
        gl.clippingPlanes = [clippingPlane];
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Programmer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ProgrammerCanvas;
