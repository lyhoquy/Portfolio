"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        Resume
      </a>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="hero cinematic-act" aria-labelledby="hero-title">
      <div className="act-marker" aria-label="Act 01, The Sky"><span>01</span><span>The Sky</span></div>
      <div className="hero-intro">
        <div className="hero-copy-block">
          <p className="identity-line"><span>{profile.name}</span><span>{profile.role}</span></p>
          <h1 id="hero-title">
            I build interfaces
            <span>that connect ideas to real use.</span>
          </h1>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#projects">
              See my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#resume">
              View resume
            </a>
          </div>
        </div>
        <figure className="hero-placeholder">
          <Image src="/avatar.png" alt="Portrait of Ly Ho" fill sizes="(max-width: 760px) 100vw, 330px" />
          <span className="placeholder-kicker">Portrait / Ly Ho</span>
          <span className="placeholder-role">Frontend<br />Developer</span>
        </figure>
      </div>
      <div className="hero-note">
        <span className="status-dot" aria-hidden="true" />
        <span>React</span><span>TypeScript</span><span>Realtime interfaces</span>
      </div>
    </section>
  );
}
