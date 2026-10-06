import { lazy, Suspense } from "react";
import { modelingServices } from "../data/profile";
import ErrorBoundary from "./ErrorBoundary";
import { CheckIcon } from "./Icons";

const ModelGallery = lazy(() => import("../three/ModelGallery"));

const fallback = <p className="muted">Los modelos 3D necesitan un navegador con WebGL.</p>;

export default function Modeling() {
  return (
    <section className="section container" id="modelado-3d">
      <p className="eyebrow">Modelado 3D</p>
      <h2>También modelo en 3D</h2>
      <div className="modeling-intro">
        <p className="lead">
          Diseño y modelo objetos, piezas y escenas 3D listas para la web. Estos modelos están hechos en código con
          Three.js y se renderizan en tiempo real en tu navegador; cada uno está inspirado en uno de mis proyectos.
          <span className="drag-hint"> Arrástralos para rotarlos.</span>
        </p>
        <ul className="features">
          {modelingServices.map((s) => (
            <li key={s}>
              <CheckIcon /> {s}
            </li>
          ))}
        </ul>
      </div>
      <ErrorBoundary fallback={fallback}>
        <Suspense fallback={<div className="model-grid-placeholder" />}>
          <ModelGallery />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
