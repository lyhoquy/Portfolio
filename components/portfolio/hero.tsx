import Image from "next/image";
import { profile } from "@/lib/portfolio-data";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label={`${profile.brand} home`}>
        <span className="brand-mark">K</span>
        <span>{profile.brand}</span>
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="nav-resume" href="#resume">
        Resume <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-intro">
        <div className="hero-copy-block">
          <p className="eyebrow">{profile.role} · {profile.name}</p>
          <h1 id="hero-title">
            I build interfaces
            <span>that work and feel right.</span>
          </h1>
        </div>
        <figure className="hero-avatar">
          <Image
            src="/images/ly-ho-avatar.webp"
            alt="Ly Ho speaking at a presentation"
            fill
            priority
            sizes="(max-width: 760px) 42vw, 260px"
          />
          <figcaption>Ly Ho / 2026</figcaption>
        </figure>
      </div>
      <div className="hero-bottom">
        <p className="hero-copy">
          Frontend Developer building responsive and functional web experiences,
          with a growing interest in UI/UX.
        </p>
        <div className="hero-actions" aria-label="Hero actions">
          <a className="button button-primary" href="#work">
            View Projects <span aria-hidden="true">↓</span>
          </a>
          <a className="button button-secondary" href="#resume">
            View Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-note">
        <span className="status-dot" aria-hidden="true" />
        Currently growing through frontend work, learning, and building
      </div>
    </section>
  );
}
