import { useMemo, useState } from 'react';
import { ExternalLink, Github, Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

function ProjectVisual({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="project-image-fallback" role="img" aria-label={`Preview image for ${title} has not been added yet`}>
        <span>PROJECT PREVIEW</span>
        <strong>{title}</strong>
      </div>
    );
  }

  return <img src={src} alt={`${title} preview`} loading="lazy" onError={() => setFailed(true)} />;
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const tags = ['All', 'React', 'Node.js', 'AI', 'Go'];
  const visible = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.technologies.some((technology) => technology.toLowerCase().includes(filter.toLowerCase()))),
    [projects, filter],
  );

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="02 / My Creations" title="Featured Projects" description="Selected products, systems, and developer tools built across the stack." />
        <div className="filter-row">
          {tags.map((tag) => <button className={filter === tag ? 'selected' : ''} key={tag} onClick={() => setFilter(tag)}>{tag}</button>)}
        </div>
        <div className="project-grid">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.06, 0.3)} className="project-card">
              <article onClick={() => setSelected(project)}>
                <div className="project-media">
                  <ProjectVisual src={project.image} title={project.title} />
                  <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
                  <div className="project-overlay"><span>Inspect project <ExternalLink size={15} /></span></div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <div className="project-links">
                    <a href={project.liveUrl} onClick={(event) => event.stopPropagation()} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14} /></a>
                    <a href={project.githubUrl} onClick={(event) => event.stopPropagation()} target="_blank" rel="noreferrer">Code <Github size={14} /></a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="center-cta">
          <button className="button button-ghost" onClick={() => setFilter(filter === 'All' ? 'React' : 'All')}>
            <Plus size={16} />{filter === 'All' ? 'Explore by stack' : 'View All Projects'}
          </button>
        </div>
      </div>
      {selected && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setSelected(null)}>
          <motion.div className="project-modal" initial={{ y: 30, scale: 0.96 }} animate={{ y: 0, scale: 1 }} onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details"><X /></button>
            <ProjectVisual src={selected.image} title={selected.title} />
            <span className="eyebrow">Project detail</span>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="tag-row">{selected.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <div className="hero-actions">
              <a className="button button-primary" href={selected.liveUrl}>Live Demo <ExternalLink size={16} /></a>
              <a className="button button-ghost" href={selected.githubUrl}>GitHub <Github size={16} /></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
