const projects = [
  {
    number: "01",
    title: "Real-Time Traffic Navigation Dashboard",
    meta: "Graduation Project · 2026",
    description:
      "A driver-facing navigation experience combining route guidance with realtime traffic and incident awareness from camera and computer-vision signals.",
    tags: ["React", "TypeScript", "Mapbox", "WebSocket", "YOLO/OpenCV"],
    href: "https://github.com/lyhoquy/DATN",
    status: "Case study draft",
  },
  {
    number: "02",
    title: "Vietnamese Food Recognition & Travel Guide",
    meta: "Project · 2025",
    description:
      "A web and edge-device experience for recognizing Vietnamese food, looking up recipes, and exploring related travel destinations.",
    tags: ["Python", "Flask", "TensorFlow", "Leaflet", "Raspberry Pi"],
    href: "https://github.com/lyhoquy/PBL5",
    status: "Case study draft",
  },
  {
    number: "03",
    title: "Personal Portfolio Website",
    meta: "Personal project · 2026",
    description:
      "A portfolio platform in progress for presenting frontend work, technical decisions, and a growing interest in UI/UX.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/lyhoquy/Portfolio",
    status: "Work in progress",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "React Native",
  "Zustand",
  "Git / GitHub",
  "Figma",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Kiandas home">
          <span className="brand-mark">K</span>
          <span>Kiandas</span>
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

      <div id="top" className="page-shell">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Frontend Developer · Ly Ho</p>
          <h1 id="hero-title">
            I build interfaces
            <span>that work and feel right.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-copy">
              Frontend Developer building responsive and functional web experiences,
              with a growing interest in UI/UX.
            </p>
            <div className="hero-actions">
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

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Proof over promises.</h2>
            <p>
              A selection of projects where I turn requirements into responsive,
              working experiences.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-visual" aria-hidden="true">
                  <span>{project.number}</span>
                  <div className="visual-grid" />
                  <span className="visual-arrow">↗</span>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <div>
                      <p className="project-meta">{project.meta}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                    View repository <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="about-intro">
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title">Code is my craft. Curiosity is my edge.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Ly Ho, a Frontend Developer with a background in Information
              Technology and a user-centered design mindset. I care about building
              interfaces that are not only visually clear, but also smooth, responsive,
              and genuinely easy to use.
            </p>
            <p>
              My goal is to grow into a developer who can carry an idea from UI to a
              finished product, while continuing to learn how thoughtful design improves
              the way products work.
            </p>
            <a className="text-link" href="https://www.linkedin.com/in/hoquylyka" target="_blank" rel="noreferrer">
              More about my journey <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section experience-section" aria-labelledby="experience-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Learning by shipping.</h2>
          </div>
          <div className="experience-row">
            <div>
              <h3>Frontend Development Intern</h3>
              <p className="muted">NCC · Nov 2025 — Mar 2026</p>
            </div>
            <p>
              Built responsive React interfaces, translated designs into reusable
              components, integrated APIs, and collaborated with designers and developers
              through code reviews, debugging, and iterative improvements.
            </p>
          </div>
        </section>

        <section className="section skills-section" aria-labelledby="skills-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Toolkit</p>
            <h2 id="skills-title">Tools I use to make things.</h2>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill-item" key={skill}>
                <span className="skill-index">0{index + 1}</span>{skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Have a project in mind?</p>
          <h2 id="contact-title">Let&apos;s build something useful.</h2>
          <p className="contact-copy">
            I&apos;m open to frontend opportunities, collaborations, and thoughtful
            conversations about building for the web.
          </p>
          <a className="button button-primary" href="mailto:hoquyly.dev@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
          <div id="resume" className="contact-links" aria-label="Contact links">
            <a href="mailto:hoquyly.dev@gmail.com">Email</a>
            <a href="https://github.com/lyhoquy" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hoquylyka" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="resume-note">Resume file will be connected by backend.</span>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <span>© 2026 Kiandas / Ly Ho</span>
        <span>Built with care, not claims.</span>
      </footer>
    </main>
  );
}
