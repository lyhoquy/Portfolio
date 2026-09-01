import { experience, profile, skills } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="about-intro">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Code is my craft. Curiosity is my edge.</h2>
      </div>
      <div className="about-copy">
        <p>
          I&apos;m {profile.name}, a Frontend Developer with a background in Information
          Technology and a user-centered design mindset. I care about building
          interfaces that are not only visually clear, but also smooth, responsive,
          and genuinely easy to use.
        </p>
        <p>
          My goal is to grow into a developer who can carry an idea from UI to a
          finished product, while continuing to learn how thoughtful design improves
          the way products work.
        </p>
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
          More about my journey <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section experience-section" aria-labelledby="experience-title">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">Learning by shipping.</h2>
      </div>
      <div className="experience-row">
        <div>
          <h3>{experience.title}</h3>
          <p className="muted">{experience.company} · {experience.period}</p>
        </div>
        <p>{experience.summary}</p>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Toolkit</p>
        <h2 id="skills-title">Tools I use to make things.</h2>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span className="skill-item" key={skill}>
            <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>{skill}
          </span>
        ))}
      </div>
    </section>
  );
}
