import { LEVEL_LABEL } from "../data/profile";
import type { Level } from "../data/profile";

export default function LevelMeter({ level }: { level: Level }) {
  const label = LEVEL_LABEL[level];
  return (
    <span className="meter" role="img" aria-label={`Nivel ${label} (${level} de 4)`} data-level={level}>
      <span className="meter-bars" aria-hidden="true">
        {[1, 2, 3, 4].map((n) => (
          <i key={n} className={n <= level ? "on" : ""} />
        ))}
      </span>
      <span className="meter-label">{label}</span>
    </span>
  );
}
