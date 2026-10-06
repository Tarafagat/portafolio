import { projects } from "../data/profile";
import { CheckIcon, ExternalIcon } from "./Icons";

export default function Projects() {
  return (
    <section className="section container" id="proyectos">
      <p className="eyebrow">Proyectos y propuestas</p>
      <h2>Lo que he construido</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.name} className="project card">
            <div className="project-head">
              <h3>{p.name}</h3>
              {p.badge && <span className="badge">{p.badge}</span>}
            </div>
            <p className="tagline">{p.tagline}</p>
            <p>{p.description}</p>
            <div className="proposal">
              <span>Propuesta</span>
              <p>{p.proposal}</p>
            </div>
            <ul className="features">
              {p.features.map((f) => (
                <li key={f}>
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
            <ul className="chips">
              {p.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            <div className="link-row">
              {p.links.map((l) => (
                <a key={l.href} className="btn btn-small" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <ExternalIcon />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
