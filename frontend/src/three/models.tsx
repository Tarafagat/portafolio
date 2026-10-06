import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide, ExtrudeGeometry, LatheGeometry, Shape, Vector2 } from "three";
import type { Group, MeshStandardMaterial } from "three";

const GOLD = "#d4a017";
const GOLD_LIGHT = "#f0c04a";

// Estrella de cuatro puntas extruida — el mismo símbolo del favicon,
// rodeada por una órbita con un nodo por nube.
export function AsterionNode() {
  const orbit = useRef<Group>(null);
  const star = useMemo(() => {
    const s = new Shape();
    const pts: [number, number][] = [
      [0, 1.15], [0.24, 0.24], [1.15, 0], [0.24, -0.24],
      [0, -1.15], [-0.24, -0.24], [-1.15, 0], [-0.24, 0.24],
    ];
    s.moveTo(...pts[0]);
    pts.slice(1).forEach((p) => s.lineTo(...p));
    s.closePath();
    const g = new ExtrudeGeometry(s, {
      depth: 0.22, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 2,
    });
    g.center();
    return g;
  }, []);

  useFrame((_, dt) => {
    if (orbit.current) orbit.current.rotation.y += dt * 0.6;
  });

  const nodes = ["#ff9900", "#2f8cff", "#34a853", "#f80000"]; // AWS, Azure, GCP, OCI

  return (
    <group>
      <mesh geometry={star}>
        <meshStandardMaterial color={GOLD} metalness={0.75} roughness={0.22} flatShading />
      </mesh>
      <mesh scale={1.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={GOLD_LIGHT} wireframe transparent opacity={0.18} />
      </mesh>
      <group rotation={[0.45, 0, 0.2]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.05, 0.012, 8, 120]} />
          <meshBasicMaterial color={GOLD_LIGHT} transparent opacity={0.55} />
        </mesh>
        <group ref={orbit}>
          {nodes.map((c, i) => {
            const a = (i / nodes.length) * Math.PI * 2;
            return (
              <mesh key={c} position={[Math.cos(a) * 2.05, 0, Math.sin(a) * 2.05]}>
                <sphereGeometry args={[0.13, 20, 20]} />
                <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.6} roughness={0.35} />
              </mesh>
            );
          })}
        </group>
      </group>
    </group>
  );
}

// Rack de servidores low-poly con LEDs que parpadean (Asterion Cloud).
export function ServerRack() {
  const leds = useRef<MeshStandardMaterial[]>([]);
  const units = [0.75, 0.42, 0.09, -0.24, -0.57, -0.9];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    leds.current.forEach((m, i) => {
      m.emissiveIntensity = Math.sin(t * (2 + (i % 3)) + i * 1.7) > 0.2 ? 2.2 : 0.25;
    });
  });

  return (
    <group position={[0, 0.05, 0]}>
      <mesh>
        <boxGeometry args={[1.3, 2.3, 1]} />
        <meshStandardMaterial color="#2a3a7a" metalness={0.55} roughness={0.45} />
      </mesh>
      {units.map((y, i) => (
        <group key={y} position={[0, y, 0.5]}>
          <mesh>
            <boxGeometry args={[1.08, 0.26, 0.06]} />
            <meshStandardMaterial color="#0d1330" metalness={0.5} roughness={0.5} />
          </mesh>
          {[-0.3, -0.18, -0.06].map((x) => (
            <mesh key={x} position={[x, 0, 0.035]}>
              <boxGeometry args={[0.07, 0.16, 0.01]} />
              <meshStandardMaterial color="#26315f" />
            </mesh>
          ))}
          {[0.3, 0.4].map((x, j) => (
            <mesh key={x} position={[x, 0, 0.04]}>
              <sphereGeometry args={[0.03, 10, 10]} />
              <meshStandardMaterial
                ref={(m) => {
                  if (m) leds.current[i * 2 + j] = m;
                }}
                color={j === 0 ? "#8fd97a" : GOLD_LIGHT}
                emissive={j === 0 ? "#8fd97a" : GOLD_LIGHT}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// Barril de combustible con franja de seguridad (Fuelity X).
export function FuelDrum() {
  const steel = { metalness: 0.55, roughness: 0.38 };
  return (
    <group rotation={[0.12, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[0.8, 0.8, 1.8, 48]} />
        <meshStandardMaterial color="#b3261e" {...steel} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.806, 0.806, 0.42, 48, 1, true]} />
        <meshStandardMaterial color={GOLD} {...steel} />
      </mesh>
      {[-0.9, -0.32, 0.32, 0.9].map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.035, 10, 64]} />
          <meshStandardMaterial color="#7f1a14" {...steel} />
        </mesh>
      ))}
      <mesh position={[0.42, 0.93, 0.15]}>
        <cylinderGeometry args={[0.1, 0.1, 0.08, 24]} />
        <meshStandardMaterial color="#d9d9d9" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[-0.4, 0.92, -0.2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.05, 20]} />
        <meshStandardMaterial color="#d9d9d9" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Llanta de cinco rayos con disco y caliper (R&B Auto Parts).
export function JdmWheel() {
  const chrome = { color: "#cfd3dc", metalness: 0.95, roughness: 0.18 };
  const axle = useRef<Group>(null);
  useFrame((_, dt) => {
    if (axle.current) axle.current.rotation.z -= dt * 1.2;
  });
  return (
    <group rotation={[0.15, 0, 0]}>
      <group ref={axle}>
        <mesh>
          <torusGeometry args={[0.86, 0.3, 24, 72]} />
          <meshStandardMaterial color="#15161a" roughness={0.92} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 0.42, 48, 1, true]} />
          <meshStandardMaterial {...chrome} side={DoubleSide} />
        </mesh>
        {[0.2, -0.2].map((z) => (
          <mesh key={z} position={[0, 0, z]}>
            <torusGeometry args={[0.62, 0.035, 10, 64]} />
            <meshStandardMaterial {...chrome} />
          </mesh>
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <group key={i} rotation={[0, 0, (i / 5) * Math.PI * 2]}>
            <mesh position={[0, 0.33, 0.16]}>
              <boxGeometry args={[0.13, 0.56, 0.06]} />
              <meshStandardMaterial {...chrome} />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.08, 24]} />
          <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.03, 40]} />
          <meshStandardMaterial color="#8a8f99" metalness={0.8} roughness={0.35} />
        </mesh>
      </group>
      <mesh position={[0.36, 0.3, -0.02]} rotation={[0, 0, -0.7]}>
        <boxGeometry args={[0.16, 0.3, 0.12]} />
        <meshStandardMaterial color="#c0262d" metalness={0.3} roughness={0.4} />
      </mesh>
    </group>
  );
}

// Botella torneada (LatheGeometry) con etiqueta y tapa (Botillerías).
export function Bottle() {
  const glass = useMemo(() => {
    const profile: [number, number][] = [
      [0, 0], [0.4, 0], [0.45, 0.06], [0.45, 1.1], [0.41, 1.3], [0.24, 1.55],
      [0.16, 1.76], [0.16, 2.02], [0.19, 2.06], [0.19, 2.12], [0, 2.12],
    ];
    return new LatheGeometry(profile.map(([x, y]) => new Vector2(x, y)), 48);
  }, []);

  return (
    <group position={[0, -1.06, 0]} rotation={[0, 0, 0.08]}>
      <mesh geometry={glass}>
        <meshPhysicalMaterial color="#2e6b3c" roughness={0.12} metalness={0.1} clearcoat={1} transparent opacity={0.88} />
      </mesh>
      <mesh position={[0, 0.62, 0]}>
        <cylinderGeometry args={[0.456, 0.456, 0.55, 48, 1, true]} />
        <meshStandardMaterial color="#f3e3c3" roughness={0.7} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 0.62, 0]}>
        <cylinderGeometry args={[0.458, 0.458, 0.08, 48, 1, true]} />
        <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.3} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 2.16, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.25} />
      </mesh>
    </group>
  );
}
