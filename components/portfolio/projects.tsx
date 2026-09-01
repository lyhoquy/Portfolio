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
  return (
    <div className="project-actions">
      <Link className="text-link" href={`/projects/${project.slug}`}>
        Case study <span aria-hidden="true">↗</span>
      </Link>
      <a className="text-link text-link-muted" href={project.href} target="_blank" rel="noreferrer">
        Source code <span aria-hidden="true">↗</span>
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
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2 id="work-title">Selected projects I&apos;ve built.</h2>
        <p>A focused collection of frontend work, academic projects, and experiments.</p>
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
          <article className="project-card" key={project.number}>
            <ProjectVisual project={project} />
            <ProjectDetails project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
