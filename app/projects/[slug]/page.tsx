import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/portfolio-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project ? `${project.title} — Ly Ho` : "Project — Ly Ho",
    description: project?.description ?? "Project case study by Ly Ho.",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="case-study-page">
      <nav className="case-study-nav" aria-label="Case study navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">K</span>
          <span>Kiandas</span>
        </Link>
        <Link className="text-link" href="/#work">Back to projects <span aria-hidden="true">↗</span></Link>
      </nav>
      <article className="case-study-shell">
        <header className="case-study-header">
          <p className="eyebrow">{project.meta}</p>
          <h1>{project.title}</h1>
          <p className="case-study-lede">{project.description}</p>
          <div className="case-study-actions">
            <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">
              View source code <span aria-hidden="true">↗</span>
            </a>
            <span className="project-status">{project.status}</span>
          </div>
        </header>
        <div className="case-study-grid">
          <aside>
            <p className="eyebrow">At a glance</p>
            <dl className="case-study-facts">
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Stack</dt><dd>{project.tags.join(" · ")}</dd></div>
              <div><dt>Status</dt><dd>{project.status}</dd></div>
            </dl>
          </aside>
          <div className="case-study-content">
            <section aria-labelledby="problem-title">
              <p className="eyebrow">01 / Context</p>
              <h2 id="problem-title">The problem</h2>
              <p>{project.problem}</p>
            </section>
            <section aria-labelledby="development-title">
              <p className="eyebrow">02 / Evidence</p>
              <h2 id="development-title">Development notes</h2>
              <p>This case study is being expanded with verified screenshots, implementation decisions, responsive behavior, and outcome notes.</p>
              <div className="case-study-placeholder" role="img" aria-label="Project screenshot placeholder">
                <span>Project screenshots<br />will be added here</span>
              </div>
            </section>
            <section aria-labelledby="next-title">
              <p className="eyebrow">03 / Next update</p>
              <h2 id="next-title">What remains to document</h2>
              <ul className="case-study-list">
                <li>Verified screenshots and captions.</li>
                <li>Specific implementation decisions and constraints.</li>
                <li>Live demo link, when available.</li>
                <li>Outcome or learning supported by project evidence.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
