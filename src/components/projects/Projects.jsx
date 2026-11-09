import { useMemo, useState } from 'react';
import { ArrowUpRight, Github, Plus } from 'lucide-react';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

function ProjectVisual({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="project-image-fallback" role="img" aria-label={`No website preview image is available for ${title}`}>
        <span>WEBSITE PREVIEW</span>
        <strong>{title}</strong>
        <small>Open the project to explore the live site</small>
      </div>
    );
  }

  return <img src={src} alt={`${title} website preview`} loading="lazy" decoding="async" onError={() => setFailed(true)} />;
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'React', 'JavaScript', 'HTML', 'Node.js'];
  const visible = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.technologies.some((technology) => technology.toLowerCase().includes(filter.toLowerCase()))),
    [projects, filter],
  );

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="02 / Web Development" title="Selected Projects" description="A few web applications I've designed and built for study, campus life, and business workflows." />
        <div className="filter-row" role="group" aria-label="Filter projects by technology">
          {tags.map((tag) => (
            <button type="button" className={filter === tag ? 'selected' : ''} key={tag} onClick={() => setFilter(tag)} aria-pressed={filter === tag}>
              {tag}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.06, 0.3)} className="project-card">
              <article>
                <a
                  className="project-card-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live website in a new tab`}
                >
                  <div className="project-media">
                    <ProjectVisual src={project.image} title={project.title} />
                    <div className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                    <div className="project-overlay" aria-hidden="true"><span>Open live project <ArrowUpRight size={15} /></span></div>
                  </div>
                  <div className="project-info">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span className="project-title-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
                    </div>
                    <p>{project.description}</p>
                    <div className="tag-row" aria-label="Technologies used">
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  </div>
                </a>
                <div className="project-card-footer">
                  <span>LIVE PROJECT</span>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}>
                    Source code <Github size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="center-cta">
          <button type="button" className="button button-ghost" onClick={() => setFilter(filter === 'All' ? 'React' : 'All')}>
            <Plus size={16} />{filter === 'All' ? 'Explore by stack' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
}
