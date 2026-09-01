import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <p className="eyebrow">Have a project in mind?</p>
      <h2 id="contact-title">Let&apos;s build something useful.</h2>
      <p className="contact-copy">
        I&apos;m open to frontend opportunities, collaborations, and thoughtful
        conversations about building for the web.
      </p>
      <a className="button button-primary" href={`mailto:${profile.email}`}>
        Get in touch <span aria-hidden="true">↗</span>
      </a>
      <div id="resume" className="contact-links" aria-label="Contact links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <span className="resume-note">Resume file will be connected by backend.</span>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 Kiandas / Ly Ho</span>
      <span>Built with care, not claims.</span>
    </footer>
  );
}
