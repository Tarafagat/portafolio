import { lazy, Suspense } from "react";
import { profile } from "../data/profile";
import ErrorBoundary from "./ErrorBoundary";
import { ChatIcon, GithubIcon, MailIcon, PinIcon } from "./Icons";

const HeroScene = lazy(() => import("../three/HeroScene"));

const StarFallback = () => (
  <div className="hero-canvas hero-fallback" aria-hidden="true">
    <svg viewBox="0 0 64 64">
      <path d="M32 8 38 26 56 32 38 38 32 56 26 38 8 32 26 26Z" fill="currentColor" />
    </svg>
  </div>
);

export default function Hero() {
  return (
    <header className="hero container" id="inicio">
      <div className="hero-text">
        <p className="eyebrow">
          <PinIcon /> {profile.location} · {profile.headline}
        </p>
        <h1>{profile.name}</h1>
        <ul className="role-list">
          {profile.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className="lead">{profile.summary}</p>
        <p className="muted">{profile.focus}</p>
        <div className="actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon /> Escríbeme
          </a>
          <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
            <ChatIcon /> WhatsApp
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>
      <ErrorBoundary fallback={<StarFallback />}>
        <Suspense fallback={<StarFallback />}>
          <HeroScene />
        </Suspense>
      </ErrorBoundary>
    </header>
  );
}
