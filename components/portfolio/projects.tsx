"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/portfolio-data";

type ProjectsProps = {
  projects: Project[];
};

function ProjectVisual({ project }: { project: Project }) {
  const image = project.images?.[0];

  return (
    <div className="project-visual project-visual-gallery" role="img" aria-label={image?.alt ?? `${project.title} preview placeholder`}>
      {image ? <Image className="project-image" src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 48vw" priority /> : null}
      <span className="project-number">{project.number}</span>
      <div className="visual-grid" aria-hidden="true" />
      <div className={`visual-label${image ? " visual-label-overlay" : ""}`}>
        <span className="visual-label-dot" aria-hidden="true" />
        {image ? "Open project detail" : "Project preview / add locally"}
      </div>
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  const metaParts = project.meta.split(" · ");
  const statusParts = project.status.split(" · ");

  return (
    <div className="project-content">
      <div className="project-header">
        <div>
          <p className="project-meta">
            {metaParts.map((part, index) => <span key={part}>{index === 0 ? "TYPE" : "YEAR"}<strong>{part}</strong></span>)}
          </p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-status"><small>STATUS</small>{statusParts.map((part) => <strong key={part}>{part}</strong>)}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <p className="project-role"><strong>My role</strong> {project.role}</p>
      <div className="tag-list" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <div className="project-actions">
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Open project detail
        </Link>
        <a className="text-link text-link-muted" href={project.href} target="_blank" rel="noreferrer">
          View source code <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}

export function Projects({ projects: projectList }: ProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectList[activeIndex] ?? projectList[0];

  const changeProject = (direction: number) => {
    setActiveIndex((current) => (current + direction + projectList.length) % projectList.length);
  };

  return (
    <section id="projects" className="section work-section cinematic-act" aria-labelledby="work-title">
      <div className="act-marker" aria-label="Act 02, The Work"><span>02</span><span>The Work</span></div>
      <div className="section-heading section-heading-work">
        <h2 id="work-title">The work.</h2>
        <p className="section-supporting-copy">A selection of interfaces, systems, and experiments.</p>
      </div>
      <div className="project-gallery" aria-roledescription="carousel" aria-label="Project gallery">
        <div className="project-gallery-stage" aria-live="polite">
          <ProjectVisual project={activeProject} />
          <ProjectDetails project={activeProject} />
        </div>
        <div className="project-gallery-controls">
          <div className="project-gallery-index" aria-label={`Project ${activeIndex + 1} of ${projectList.length}`}>
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="gallery-rule" aria-hidden="true" />
            <span>{String(projectList.length).padStart(2, "0")}</span>
          </div>
          <div className="project-gallery-buttons">
            <button type="button" onClick={() => changeProject(-1)} aria-label="Previous project">← <span>Previous</span></button>
            <button type="button" onClick={() => changeProject(1)} aria-label="Next project"><span>Next</span> →</button>
          </div>
        </div>
        <div className="project-gallery-menu" role="tablist" aria-label="Choose a project">
          {projectList.map((project, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? "is-active" : ""}
              key={project.slug}
              onClick={() => setActiveIndex(index)}
            >
              <span>{project.number}</span>
              <span>{project.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
