import { motion } from 'framer-motion';
import { ArrowDown, Github, MapPin } from 'lucide-react';
import Button from '../common/Button';

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero section">
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="availability">
            <span className="pulse-dot" /> Available for work
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="hero-kicker">
            Full-stack systems · Game development · Creative technology
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.8 }}>
            <span>I build useful</span> <em>products</em><br />with code.
          </motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Full-stack developer crafting performant web applications with modern technologies. Open to interesting opportunities.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Button href="#projects">View Projects</Button>
            <Button href={profile.resumeUrl} variant="ghost" download>Download CV</Button>
          </motion.div>
          <div className="hero-meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <a href={profile.socialLinks.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
          </div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/assets/avatar.png" alt={`Illustrated portrait of ${profile.name}`} width="500" height="500" fetchPriority="high" />
          <div className="portrait-label">
            <span>HELLO, I’M</span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </div>
          <span className="portrait-mark" aria-hidden="true">ANWAR.DEV</span>
        </motion.div>
      </div>
      <button className="scroll-cue" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <ArrowDown size={16} />
        <span>Scroll to explore</span>
      </button>
    </section>
  );
}

