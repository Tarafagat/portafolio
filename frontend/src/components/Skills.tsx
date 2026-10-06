import { skillGroups } from "../data/profile";
import type { Level } from "../data/profile";
import LevelMeter from "./LevelMeter";

const legend: [Level, string][] = [
  [4, "Diseño y lidero soluciones completas"],
  [3, "Autónomo en producción"],
  [2, "Trabajo con soltura en proyectos reales"],
  [1, "Conocimiento inicial"],
];

export default function Skills() {
  return (
    <section className="section container" id="experticia">
      <p className="eyebrow">Niveles de experticia</p>
      <h2>Competencias técnicas</h2>
      <ul className="legend" aria-label="Escala de niveles">
        {legend.map(([level, meaning]) => (
          <li key={level}>
            <LevelMeter level={level} />
            <span className="muted">{meaning}</span>
          </li>
        ))}
      </ul>
      <div className="skill-grid">
        {skillGroups.map((g) => (
          <div key={g.title} className="card">
            <h3>{g.title}</h3>
            <ul className="skill-rows">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <span>{s.name}</span>
                  <LevelMeter level={s.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
