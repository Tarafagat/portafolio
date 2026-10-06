import { profile } from "../data/profile";
import { ChatIcon, GithubIcon, GlobeIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Contact() {
  const items = [
    { icon: <MailIcon />, label: "Correo", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: "Teléfono", value: profile.phone, href: profile.phoneHref },
    { icon: <ChatIcon />, label: "WhatsApp", value: profile.phone, href: profile.whatsapp, external: true },
    { icon: <GithubIcon />, label: "GitHub", value: strip(profile.github), href: profile.github, external: true },
    { icon: <GlobeIcon />, label: "Asterion", value: strip(profile.asterion), href: profile.asterion, external: true },
    { icon: <GlobeIcon />, label: "Fuelity", value: strip(profile.fuelity), href: profile.fuelity, external: true },
  ];

  return (
    <section className="section container" id="contacto">
      <div className="contact card">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Conversemos</h2>
          <p className="muted">
            <PinIcon /> {profile.location}
          </p>
        </div>
        <ul className="contact-list">
          {items.map((i) => (
            <li key={i.label}>
              <a href={i.href} {...(i.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {i.icon}
                <span>
                  <small>{i.label}</small>
                  {i.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
