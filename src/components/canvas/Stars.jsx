import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ color = '#f272c8', size = 0.002 }) => {
  const ref = useRef();
  const POINT_COUNT = 5000;
  const [sphere] = useState(() => random.inSphere(new Float32Array(POINT_COUNT * 3), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ starColor, starSize }) => {
  const glRef = useRef(null);
   useEffect(() => {
    return () => {
      if (glRef.current) {
        const webgl = glRef.current.getContext();
        const ext = webgl.getExtension("WEBGL_lose_context");
        ext?.loseContext();
      }
    };
  }, []);
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas onCreated={({ gl }) => {
          glRef.current = gl;
        }} 
        camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars color={starColor} size={starSize} />
        </Suspense>

        

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;