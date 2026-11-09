import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CheckCircle2, Code2, Github, MapPin } from 'lucide-react';
import Button from '../common/Button';

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <motion.figure
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-photo-frame">
            <img
              src="/assets/avatar.png"
              alt={`Portrait of ${profile.name}`}
              width="1254"
              height="1254"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-portrait-badge"><span className="pulse-dot" /> Open to web projects</div>
          <figcaption><span>{profile.role}</span><strong>{profile.name}</strong></figcaption>
          <div className="hero-tech-chip hero-chip-react"><Code2 size={15} /> React &amp; UI</div>
          <div className="hero-tech-chip hero-chip-responsive"><CheckCircle2 size={15} /> Responsive web</div>
        </motion.figure>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
        >
          <p className="hero-kicker">Web development · Responsive interfaces · React applications</p>
          <h1 id="hero-title"><span>I build for</span> <em>the web.</em></h1>
          <p className="hero-description">
            I build responsive web applications and practical digital products, focusing on clean interfaces, reliable functionality, and maintainable code.
          </p>
          <div className="hero-actions">
            <Button href="#projects">Explore Projects</Button>
            <Button href="#contact" variant="ghost">Get in Touch</Button>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github size={14} /> GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
      <button className="scroll-cue" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Scroll to About">
        <ArrowDown size={16} />
        <span>Scroll to explore</span>
      </button>
    </section>
  );
}
