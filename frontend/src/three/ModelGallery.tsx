import type { ReactNode } from "react";
import ModelCanvas from "./ModelCanvas";
import { Bottle, FuelDrum, JdmWheel, ServerRack } from "./models";

interface Item {
  title: string;
  inspiredBy: string;
  detail: string;
  model: ReactNode;
  cameraZ?: number;
  motion?: "spin" | "sway";
}

const gallery: Item[] = [
  { title: "Rack de servidores", inspiredBy: "Asterion Cloud", detail: "Low-poly con LEDs animados", model: <ServerRack />, cameraZ: 5, motion: "sway" },
  { title: "Barril de combustible", inspiredBy: "Fuelity X", detail: "Superficies metálicas y refuerzos", model: <FuelDrum /> },
  { title: "Llanta JDM", inspiredBy: "R&B Auto Parts", detail: "Pieza mecánica: rayos, disco y caliper", model: <JdmWheel />, cameraZ: 3.8, motion: "sway" },
  { title: "Botella", inspiredBy: "Botillerías App", detail: "Modelado por revolución (lathe)", model: <Bottle /> },
];

export default function ModelGallery() {
  return (
    <div className="model-grid">
      {gallery.map((m) => (
        <figure key={m.title} className="model-card">
          <ModelCanvas cameraZ={m.cameraZ} motion={m.motion} speed={m.motion === "sway" ? 0.8 : undefined}>
            {m.model}
          </ModelCanvas>
          <figcaption>
            <strong>{m.title}</strong>
            <span>{m.detail}</span>
            <small>Inspirado en {m.inspiredBy}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
