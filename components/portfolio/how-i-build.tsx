import { experience } from "@/lib/portfolio-data";

const steps = [
  ["01 / Understand", "Start with the requirement, the user, and the information the interface must make clear."],
  ["02 / Shape", "Turn the flow into a responsive structure with readable hierarchy and reusable interface sections."],
  ["03 / Connect", "Bring the interface together with APIs, realtime data, maps, or computer-vision features when the project requires them."],
  ["04 / Refine", "Test the experience across screen sizes, fix rough edges, and improve the details that affect usability."],
  ["05 / Ship", "Keep the code organized, document what remains, and move the project toward a usable release."],
];

export function HowIBuild() {
  return (
    <section id="how-i-build" className="section process-section cinematic-act" aria-labelledby="process-title">
      <div className="act-label">ACT 03 / HOW I BUILD</div>
      <div className="section-heading process-heading">
        <p className="eyebrow">A working process</p>
        <h2 id="process-title">From a rough idea to a working interface.</h2>
        <p>I break a problem into a clear user flow, shape the interface around that flow, then build and refine the experience through code.</p>
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
          <p className="muted">{experience.company} · {experience.period}</p>
          <p className="experience-summary">{experience.summary}</p>
        </div>
      </div>
      <p className="process-note">The goal is not to add motion for its own sake. The goal is to make the interface easier to understand and use.</p>
    </section>
  );
}
