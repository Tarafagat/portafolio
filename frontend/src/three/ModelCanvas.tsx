import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group } from "three";

const media = (q: string) => typeof window !== "undefined" && window.matchMedia(q).matches;

// Solo con mouse se habilita arrastrar: en touch, OrbitControls captura el
// gesto y bloquearía el scroll de la página.
const finePointer = media("(pointer: fine)");
const reducedMotion = media("(prefers-reduced-motion: reduce)");

// "spin" gira completo (piezas simétricas); "sway" oscila para que un
// modelo con cara frontal (rack, llanta) nunca quede de canto.
function Motion({ children, speed, mode }: { children: ReactNode; speed: number; mode: "spin" | "sway" }) {
  const ref = useRef<Group>(null);
  const t = useRef(0);
  useFrame((_, dt) => {
    if (!ref.current || reducedMotion) return;
    t.current += dt;
    if (mode === "sway") ref.current.rotation.y = Math.sin(t.current * speed) * 0.7;
    else ref.current.rotation.y += dt * speed;
  });
  return <group ref={ref}>{children}</group>;
}

interface Props {
  children: ReactNode;
  cameraZ?: number;
  speed?: number;
  motion?: "spin" | "sway";
  className?: string;
}

export default function ModelCanvas({ children, cameraZ = 4.4, speed = 0.45, motion = "spin", className }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Cada canvas solo renderiza mientras está en pantalla.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "120px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={box} className={className ?? "model-canvas"}>
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 2]}
        camera={{ position: [0, 0.4, cameraZ], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <directionalLight position={[-4, -1, -3]} intensity={0.8} color="#6b7cff" />
        <pointLight position={[0, 3, 2]} intensity={6} color="#f0c04a" />
        <Motion speed={speed} mode={motion}>
          {children}
        </Motion>
        {finePointer && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
}
