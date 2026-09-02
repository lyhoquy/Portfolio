import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="contact-section cinematic-act" aria-labelledby="contact-title">
      <div className="act-marker" aria-label="Act 05, Contact"><span>05</span><span>Contact</span></div>
      <h2 id="contact-title">Let&apos;s make it useful.</h2>
      <p className="contact-copy">I am open to frontend opportunities, collaborations, and thoughtful conversations about the web.</p>
      <a className="button button-primary" href={`mailto:${profile.email}`}>
        Start a conversation
      </a>
      <div id="resume" className="contact-links" aria-label="Contact links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <span className="resume-note">Resume PDF / add locally when ready.</span>
      </div>
      <p className="contact-closing">Thanks for making it this far.</p>
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
