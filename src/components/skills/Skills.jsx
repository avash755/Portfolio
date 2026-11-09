import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

const icons = { Frontend: Code2, Backend: Database, 'Development Tools': Wrench };

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="03 / Skills" title="Tech Stack" description="Technologies and tools I use to develop responsive interfaces and full-stack applications." />
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], index) => {
            const Icon = icons[group] || Code2;
            return (
              <Reveal delay={index * 0.07} key={group} className="skill-card">
                <div className="skill-icon"><Icon size={18} /></div>
                <h3>{group}</h3>
                <div className="skill-list">
                  {items.map((item, itemIndex) => (
                    <motion.span key={item} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 + itemIndex * 0.04 }}>{item}</motion.span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
