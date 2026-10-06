import ModelCanvas from "./ModelCanvas";
import { AsterionNode } from "./models";

export default function HeroScene() {
  return (
    <ModelCanvas className="hero-canvas" cameraZ={7.6} speed={0.3}>
      <AsterionNode />
    </ModelCanvas>
  );
}
