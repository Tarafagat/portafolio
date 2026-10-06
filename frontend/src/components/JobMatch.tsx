import type { JobApplication } from "../data/profile";
import { ExternalIcon } from "./Icons";
import LevelMeter from "./LevelMeter";

export default function JobMatch({ job }: { job: JobApplication }) {
  return (
    <section className="section container" id="postulacion">
      <p className="eyebrow">Postulación</p>
      <h2>
        {job.title} · {job.company}
      </h2>
      <div className="job-meta">
        <span className="chip">Empresa: {job.company}</span>
        <span className="chip">Cliente: {job.client}</span>
        <span className="chip">Modalidad: {job.modality}</span>
      </div>
      <p className="lead narrow">{job.pitch}</p>

      <ol className="req-list">
        {job.requirements.map((r) => (
          <li key={r.requirement} className="req card">
            <div className="req-head">
              <h3>{r.requirement}</h3>
              <ul className="skill-rows">
                {r.skills.map((s) => (
                  <li key={s.name}>
                    <span>{s.name}</span>
                    <LevelMeter level={s.level} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="req-body">
              <p>{r.evidence}</p>
              {r.links && (
                <div className="link-row">
                  {r.links.map((l) => (
                    <a key={l.href + l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ExternalIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
