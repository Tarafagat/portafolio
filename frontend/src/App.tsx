import Clouds from "./components/Clouds";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import JobMatch from "./components/JobMatch";
import Modeling from "./components/Modeling";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { jobApplication, profile } from "./data/profile";

const nav = [
  ...(jobApplication ? [{ href: "#postulacion", label: "Postulación" }] : []),
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experticia", label: "Experticia" },
  { href: "#nubes", label: "Nubes" },
  { href: "#modelado-3d", label: "3D" },
];

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" aria-label="Inicio">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 8 38 26 56 32 38 38 32 56 26 38 8 32 26 26Z" fill="currentColor" />
            </svg>
            <span>Israel Andersen</span>
          </a>
          <ul className="nav-links">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-small" href="#contacto">
            Contacto
          </a>
        </div>
      </nav>

      <Hero />
      <main>
        {jobApplication && <JobMatch job={jobApplication} />}
        <Projects />
        <Skills />
        <Clouds />
        <Modeling />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <span>
            Hecho con React + TypeScript + Three.js · Publicado como plugin de{" "}
            <a href={profile.asterion} target="_blank" rel="noreferrer">
              Asterion
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
