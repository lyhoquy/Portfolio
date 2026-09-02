import { profile } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="section about-section cinematic-act" aria-labelledby="about-title">
      <div className="act-marker" aria-label="Act 04, About"><span>04</span><span>About</span></div>
      <div className="about-intro">
        <h2 id="about-title">I care about how things work — and how they feel to use.</h2>
      </div>
      <div className="about-copy">
        <p>I am {profile.name}, a Frontend Developer with a background in Information Technology. I turn requirements into responsive interfaces connected to real product behavior.</p>
        <p>I am exploring UI/UX to improve how I shape structure, interaction, and visual decisions. Frontend development is my current direction.</p>
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
          More about my journey <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
