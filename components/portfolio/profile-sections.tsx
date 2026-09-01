import { profile, skills } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="section about-section cinematic-act" aria-labelledby="about-title">
      <div className="act-label">ACT 04 / ABOUT</div>
      <div className="about-intro">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">I care about how things work — and how they feel to use.</h2>
      </div>
      <div className="about-copy">
        <p>
          I am {profile.name}, a Frontend Developer with a background in Information Technology. I enjoy turning requirements into responsive interfaces that are clear, practical, and connected to real product behavior.
        </p>
        <p>
          I am also exploring UI/UX to understand how structure, interaction, and visual decisions can make a product easier to use. Frontend development is my current direction; design learning is how I keep improving the way I build.
        </p>
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
          More about my journey <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="toolkit-block">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Tools I use</p>
          <h2 id="skills-title">A practical toolkit for building on the web.</h2>
          <p>The tools change with the problem. The focus stays on clear structure, responsive behavior, and working interfaces.</p>
        </div>
        <div className="skills-list" aria-labelledby="skills-title">
          {skills.map((skill, index) => (
            <span className="skill-item" key={skill}>
              <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>{skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return null;
}

export function Skills() {
  return null;
}
