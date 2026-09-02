import { experience } from "@/lib/portfolio-data";

const steps = [
  ["01 / Understand", "Clarify the requirement, user, and information."],
  ["02 / Shape", "Turn the flow into a responsive structure."],
  ["03 / Connect", "Integrate APIs, maps, realtime data, or vision features."],
  ["04 / Refine", "Test across screens and remove rough edges."],
  ["05 / Ship", "Keep the code clear and move toward release."],
];

export function HowIBuild() {
  return (
    <section id="how-i-build" className="section process-section cinematic-act" aria-labelledby="process-title">
      <div className="act-marker" aria-label="Act 03, How I Build"><span>03</span><span>How I Build</span></div>
      <div className="section-heading process-heading">
        <h2 id="process-title">From a rough idea to a working interface.</h2>
      </div>
      <div className="process-list">
        {steps.map(([title, description]) => (
          <article className="process-step" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <div className="experience-insert">
        <div>
          <p className="eyebrow">Recent experience</p>
          <h3>Learning by shipping.</h3>
        </div>
        <div>
          <p className="experience-title">{experience.title}</p>
          <p className="muted"><span>{experience.company}</span><span>{experience.period}</span></p>
          <p className="experience-summary">{experience.summary}</p>
        </div>
      </div>
    </section>
  );
}
