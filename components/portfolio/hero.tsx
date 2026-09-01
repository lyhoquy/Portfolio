import { profile } from "@/lib/portfolio-data";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label={`${profile.brand} home`}>
        <span className="brand-mark">K</span>
        <span>{profile.brand}</span>
      </a>
      <div className="nav-links">
        <a href="#work">Projects</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
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
          <p className="eyebrow">{profile.name} / {profile.role}</p>
          <h1 id="hero-title">
            Frontend interfaces
            <span>built for real use.</span>
          </h1>
          <p className="hero-lede">
            I build responsive web experiences that turn clear product goals into
            useful, accessible interfaces.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#work">
              View selected projects <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              Contact me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-placeholder" role="img" aria-label="Portrait placeholder for Ly Ho">
          <span className="placeholder-kicker">Portrait / replace locally</span>
          <strong>LY<br />HO</strong>
          <span className="placeholder-role">Frontend<br />Developer</span>
        </div>
      </div>
      <div className="hero-note">
        <span className="status-dot" aria-hidden="true" />
        React · TypeScript · responsive UI
      </div>
    </section>
  );
}
