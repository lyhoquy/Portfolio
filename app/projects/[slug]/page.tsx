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

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return <div className="case-study-marker"><span>{number}</span><span>{label}</span></div>;
}

function ProjectMeta({ meta }: { meta: string }) {
  const parts = meta.split(" · ");

  return (
    <div className="case-study-meta">
      <span><small>Type</small><strong>{parts[0]}</strong></span>
      {parts[1] ? <span><small>Year</small><strong>{parts[1]}</strong></span> : null}
    </div>
  );
}

function StatusMeta({ status }: { status: string }) {
  return (
    <span className="project-status"><small>Status</small>{status.split(" · ").map((part) => <strong key={part}>{part}</strong>)}</span>
  );
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
        <Link className="text-link" href="/#projects">Back to projects</Link>
      </nav>
      <article className="case-study-shell">
        <header className="case-study-header">
          <ChapterMarker number={project.number} label="Project detail" />
          <ProjectMeta meta={project.meta} />
          <h1>{project.title}</h1>
          <p className="case-study-lede">{project.description}</p>
          <div className="case-study-actions">
            <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">
              View source code <span aria-hidden="true">↗</span>
            </a>
            {project.liveDemo ? <a className="button" href={project.liveDemo} target="_blank" rel="noreferrer">View live demo <span aria-hidden="true">↗</span></a> : null}
            <StatusMeta status={project.status} />
          </div>
        </header>
        <div className="case-study-grid">
          <aside>
            <h2 className="case-study-aside-title">At a glance</h2>
            <dl className="case-study-facts">
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Stack</dt><dd><span className="case-study-tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</span></dd></div>
              <div><dt>Status</dt><dd>{project.status.split(" · ").map((part) => <span className="fact-line" key={part}>{part}</span>)}</dd></div>
            </dl>
          </aside>
          <div className="case-study-content">
            <section aria-labelledby="problem-title">
              <ChapterMarker number="01" label="Context" />
              <h2 id="problem-title">The problem</h2>
              <p>{project.problem}</p>
            </section>

            <section aria-labelledby="role-title">
              <ChapterMarker number="02" label="Responsibilities" />
              <h2 id="role-title">What I was responsible for.</h2>
              <ul className="case-study-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            {hasCaseStudy ? (
              <>
                <section aria-labelledby="overview-title">
                  <ChapterMarker number="03" label="Overview" />
                  <h2 id="overview-title">From input to useful action.</h2>
                  <p>{project.overview}</p>
                </section>

                <section aria-labelledby="ux-title">
                  <ChapterMarker number="04" label="UX reasoning" />
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
                  <ChapterMarker number="05" label="Project evidence" />
                  <h2 id="gallery-title">What the prototype shows.</h2>
                  <div className="case-study-images">
                    {project.images?.map((image, index) => (
                      <figure className={index === 0 ? "case-study-image-featured" : ""} key={image.src}>
                        <div className="case-study-image-frame"><Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 650px" : "(max-width: 760px) 100vw, 320px"} /></div>
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="approach-title">
                  <ChapterMarker number="06" label="Development" />
                  <h2 id="approach-title">How it was connected.</h2>
                  <ul className="case-study-list">{project.approach?.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>

                {project.metrics?.length ? <section aria-labelledby="metrics-title">
                  <ChapterMarker number="07" label="Results" />
                  <h2 id="metrics-title">Measured in the project environment.</h2>
                  <div className="case-study-metrics">{project.metrics.map((metric) => <div className="case-study-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.context}</small></div>)}</div>
                </section> : null}

                {project.outcome ? <section aria-labelledby="outcome-title"><ChapterMarker number="08" label="Outcome" /><h2 id="outcome-title">What the project demonstrates.</h2><p>{project.outcome}</p></section> : null}
                {project.limitations?.length ? <section aria-labelledby="limitations-title"><ChapterMarker number="09" label="Scope" /><h2 id="limitations-title">What remains contextual.</h2><ul className="case-study-list">{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul></section> : null}
                {project.reflection ? <section aria-labelledby="reflection-title"><ChapterMarker number="10" label="Reflection" /><h2 id="reflection-title">What I learned.</h2><p>{project.reflection}</p></section> : null}
              </>
            ) : (
              <>
                <section aria-labelledby="ux-title">
                  <ChapterMarker number="03" label="UX reasoning" />
                  <h2 id="ux-title">How the interface supports the visitor.</h2>
                  <div className="case-study-decisions">{project.uxDecisions.map((item) => <article className="case-study-decision" key={item.decision}><h3>{item.decision}</h3><p><strong>Why it mattered.</strong> {item.reason}</p><p><strong>What I implemented.</strong> {item.implementation}</p></article>)}</div>
                </section>
                <section aria-labelledby="development-title"><ChapterMarker number="04" label="Development" /><h2 id="development-title">How it was built.</h2><p>{project.overview}</p><div className="case-study-placeholder" role="img" aria-label="Project screenshot placeholder"><span>Project screenshots<br />will be added here</span></div></section>
                {project.outcome ? <section aria-labelledby="outcome-title"><ChapterMarker number="05" label="Outcome" /><h2 id="outcome-title">What the project demonstrates.</h2><p>{project.outcome}</p></section> : null}
                {project.reflection ? <section aria-labelledby="reflection-title"><ChapterMarker number="06" label="Reflection" /><h2 id="reflection-title">What I learned.</h2><p>{project.reflection}</p></section> : null}
              </>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
