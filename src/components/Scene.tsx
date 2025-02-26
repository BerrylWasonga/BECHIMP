import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

function FloatingShape() {
  const { scale } = useSpring({
    from: { scale: 1 },
    to: { scale: 1.2 },
    loop: { reverse: true },
    config: { duration: 2000 },
  });

  return (
    <animated.mesh scale={scale.to((s) => [s, s, s])}>
      <torusGeometry args={[1.5, 0.4, 16, 32]} />
      <meshStandardMaterial color="#6c5ce7" metalness={0.5} roughness={0.2} />
    </animated.mesh>
  );
}

function FloatingCubes() {
  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <Float
          key={i}
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
          position={[
            Math.sin((i / 5) * Math.PI * 2) * 3,
            Math.cos((i / 5) * Math.PI * 2) * 3,
            0,
          ]}
        >
          <mesh castShadow>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="#ff6b6b" metalness={0.5} roughness={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function Scene() {
  return (
    <Canvas className="w-full h-screen" shadows>
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 8, 25]} />

      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <spotLight position={[-10, -10, -10]} intensity={0.5} />

      <FloatingShape />
      <FloatingCubes />
    </Canvas>
  );
}
