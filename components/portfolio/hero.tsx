"use client";

import { useEffect, useState } from "react";
import { MobileNav } from "@/components/portfolio/mobile-nav";
import { profile } from "@/lib/portfolio-data";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? " site-nav-scrolled" : ""}`} aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label={`${profile.brand} home`}>
        <span className="brand-mark">K</span>
        <span>{profile.brand}</span>
      </a>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#how-i-build">How I build</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <MobileNav />
      <a className="nav-resume" href="#resume">
        Resume <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="hero cinematic-act" aria-labelledby="hero-title">
      <div className="act-label">ACT 01 / THE SKY</div>
      <div className="hero-intro">
        <div className="hero-copy-block">
          <p className="identity-line">{profile.name} · {profile.role}</p>
          <h1 id="hero-title">
            I build interfaces
            <span>that connect ideas to real use.</span>
          </h1>
          <p className="hero-lede">
            Responsive interfaces connected to realtime systems and computer&#8209;vision features.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#projects">
              See my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#resume">
              View resume <span aria-hidden="true">↗</span>
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
        React · TypeScript · realtime interfaces
      </div>
    </section>
  );
}
