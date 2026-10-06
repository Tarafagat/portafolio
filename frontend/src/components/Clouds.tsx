import { cloudEquivalences, clouds } from "../data/profile";
import LevelMeter from "./LevelMeter";

export default function Clouds() {
  return (
    <section className="section container" id="nubes">
      <p className="eyebrow">Multi-cloud</p>
      <h2>Interpreto y opero la mayoría de las nubes</h2>
      <p className="lead narrow">
        AWS, Azure, Google Cloud, Oracle Cloud y más. Los conceptos —cómputo, redes, identidad, almacenamiento,
        mensajería y observabilidad— son los mismos en todas; cambia el nombre del servicio. Por eso leo una
        arquitectura en cualquier proveedor y la llevo a otro.
      </p>
      <div className="cloud-grid">
        {clouds.map((c) => (
          <div key={c.short} className="card cloud">
            <strong>{c.short}</strong>
            {c.name !== c.short && <span className="muted small">{c.name}</span>}
            <LevelMeter level={c.level} />
            <p>{c.note}</p>
          </div>
        ))}
      </div>

      <h3 className="table-title">Mismo concepto, distinto nombre</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Concepto</th>
              <th scope="col">AWS</th>
              <th scope="col">Azure</th>
              <th scope="col">GCP</th>
              <th scope="col">OCI</th>
            </tr>
          </thead>
          <tbody>
            {cloudEquivalences.map((r) => (
              <tr key={r.concept}>
                <th scope="row">{r.concept}</th>
                <td>{r.aws}</td>
                <td className="hl">{r.azure}</td>
                <td>{r.gcp}</td>
                <td>{r.oci}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
