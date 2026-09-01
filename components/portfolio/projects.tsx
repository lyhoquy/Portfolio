import type { Project } from "@/lib/portfolio-data";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
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
              <div className="tag-list" aria-label={`${project.title} technologies`}>
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
  );
}
