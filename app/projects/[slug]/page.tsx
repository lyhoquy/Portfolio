import Image from "next/image";
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

  const hasCaseStudy = Boolean(project.overview && project.images?.length);

  return (
    <main className="case-study-page">
      <nav className="case-study-nav" aria-label="Case study navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">K</span>
          <span>Kiandas</span>
        </Link>
        <Link className="text-link" href="/#projects">Back to projects <span aria-hidden="true">↗</span></Link>
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
            {project.liveDemo ? <a className="button" href={project.liveDemo} target="_blank" rel="noreferrer">View live demo <span aria-hidden="true">↗</span></a> : null}
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

            <section aria-labelledby="role-title">
              <p className="eyebrow">02 / Role</p>
              <h2 id="role-title">What I was responsible for.</h2>
              <ul className="case-study-list">
                {project.responsibilities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            {hasCaseStudy ? (
              <>
                <section aria-labelledby="overview-title">
                  <p className="eyebrow">03 / Overview</p>
                  <h2 id="overview-title">From input to useful action.</h2>
                  <p>{project.overview}</p>
                </section>

                <section aria-labelledby="ux-title">
                  <p className="eyebrow">04 / UX reasoning</p>
                  <h2 id="ux-title">How the interface supports the user.</h2>
                  <div className="case-study-decisions">
                    {project.uxDecisions.map((item) => (
                      <article className="case-study-decision" key={item.decision}>
                        <h3>{item.decision}</h3>
                        <p><strong>Why it mattered.</strong> {item.reason}</p>
                        <p><strong>What I implemented.</strong> {item.implementation}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="case-study-gallery" aria-labelledby="gallery-title">
                  <p className="eyebrow">05 / Project evidence</p>
                  <h2 id="gallery-title">What the prototype shows.</h2>
                  <div className="case-study-images">
                    {project.images?.map((image, index) => (
                      <figure className={index === 0 ? "case-study-image-featured" : ""} key={image.src}>
                        <div className="case-study-image-frame">
                          <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 650px" : "(max-width: 760px) 100vw, 320px"} />
                        </div>
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="approach-title">
                  <p className="eyebrow">06 / Development</p>
                  <h2 id="approach-title">How it was connected.</h2>
                  <ul className="case-study-list">
                    {project.approach?.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>

                {project.metrics?.length ? (
                  <section aria-labelledby="metrics-title">
                    <p className="eyebrow">07 / Results</p>
                    <h2 id="metrics-title">Measured in the project environment.</h2>
                    <div className="case-study-metrics">
                      {project.metrics.map((metric) => (
                        <div className="case-study-metric" key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                          <small>{metric.context}</small>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {project.outcome ? (
                  <section aria-labelledby="outcome-title">
                    <p className="eyebrow">08 / Outcome</p>
                    <h2 id="outcome-title">What the project demonstrates.</h2>
                    <p>{project.outcome}</p>
                  </section>
                ) : null}

                {project.limitations?.length ? (
                  <section aria-labelledby="limitations-title">
                    <p className="eyebrow">09 / Scope</p>
                    <h2 id="limitations-title">What remains contextual.</h2>
                    <ul className="case-study-list">
                      {project.limitations.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </section>
                ) : null}

                {project.reflection ? (
                  <section aria-labelledby="reflection-title">
                    <p className="eyebrow">10 / Reflection</p>
                    <h2 id="reflection-title">What I learned.</h2>
                    <p>{project.reflection}</p>
                  </section>
                ) : null}
              </>
            ) : (
              <>
                <section aria-labelledby="ux-title">
                  <p className="eyebrow">03 / UX reasoning</p>
                  <h2 id="ux-title">How the interface supports the visitor.</h2>
                  <div className="case-study-decisions">
                    {project.uxDecisions.map((item) => (
                      <article className="case-study-decision" key={item.decision}>
                        <h3>{item.decision}</h3>
                        <p><strong>Why it mattered.</strong> {item.reason}</p>
                        <p><strong>What I implemented.</strong> {item.implementation}</p>
                      </article>
                    ))}
                  </div>
                </section>
                <section aria-labelledby="development-title">
                  <p className="eyebrow">04 / Development</p>
                  <h2 id="development-title">How it was built.</h2>
                  <p>{project.overview}</p>
                  <div className="case-study-placeholder" role="img" aria-label="Project screenshot placeholder">
                    <span>Project screenshots<br />will be added here</span>
                  </div>
                </section>
                {project.outcome ? <section aria-labelledby="outcome-title"><p className="eyebrow">05 / Outcome</p><h2 id="outcome-title">What the project demonstrates.</h2><p>{project.outcome}</p></section> : null}
                {project.reflection ? <section aria-labelledby="reflection-title"><p className="eyebrow">06 / Reflection</p><h2 id="reflection-title">What I learned.</h2><p>{project.reflection}</p></section> : null}
              </>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
