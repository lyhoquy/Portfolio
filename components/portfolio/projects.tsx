import Link from "next/link";
import type { Project } from "@/lib/portfolio-data";

type ProjectsProps = {
  projects: Project[];
};

function ProjectVisual({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className={`project-visual ${featured ? "project-visual-featured" : ""}`} role="img" aria-label={`${project.title} preview placeholder`}>
      <span className="project-number">{project.number}</span>
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-label">
        <span className="visual-label-dot" aria-hidden="true" />
        Project preview / add locally
      </div>
      <span className="visual-arrow" aria-hidden="true">↗</span>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  const isSupporting = project.slug === "personal-portfolio";

  return (
    <div className="project-actions">
      <Link className="text-link" href={`/projects/${project.slug}`}>
        {isSupporting ? "Project notes" : "Read case study"} <span aria-hidden="true">↗</span>
      </Link>
      <a className="text-link text-link-muted" href={project.href} target="_blank" rel="noreferrer">
        View source code <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="project-content">
      <div className="project-header">
        <div>
          <p className="project-meta">{project.meta}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-status">{project.status}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <p className="project-role"><strong>My role</strong> {project.role}</p>
      <div className="tag-list" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <ProjectActions project={project} />
    </div>
  );
}

export function Projects({ projects }: ProjectsProps) {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const selected = projects.filter((project) => project.slug !== featured.slug);

  return (
    <section id="projects" className="section work-section cinematic-act" aria-labelledby="work-title">
      <div className="act-label">ACT 02 / THE WORK</div>
      <div className="section-heading">
        <p className="eyebrow">Selected projects</p>
        <h2 id="work-title">Things I built to make ideas work.</h2>
        <p>A focused selection of frontend, realtime, and computer-vision work. Each project shows a different way I turn requirements into a working experience.</p>
      </div>
      <article className="featured-project project-card">
        <ProjectVisual project={featured} featured />
        <ProjectDetails project={featured} />
      </article>
      <div className="selected-projects-heading">
        <p className="eyebrow">More work</p>
        <p>Explore the rest of the project set.</p>
      </div>
      <div className="project-list">
        {selected.map((project) => (
          <article className={`project-card ${project.slug === "personal-portfolio" ? "project-card-supporting" : ""}`} key={project.number}>
            <ProjectVisual project={project} />
            <ProjectDetails project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
