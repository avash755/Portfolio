import { Sparkles } from 'lucide-react';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="01 / Introduction" title="About Me" description="From full-stack web applications to interactive experiences and game development." />
        <div className="about-layout">
          <Reveal className="about-main">
            <p className="lead">I'm a developer driven by a passion for building things that are useful, functional, and well-designed.</p>
            <p>From full-stack web development to interactive experiences and games, I enjoy turning ideas into working products. I care about clean code, thoughtful design, performance, and continuously learning new technologies.</p>
            <div className="signature-row">
              <div className="signature">EMTAYES ANWAR AVASH<span>I believe the best way to learn is to build, experiment, and keep improving.</span></div>
            </div>
          </Reveal>
        </div>
        <div className="stat-grid">
          <div><strong>16<span>+</span></strong><small>Projects</small></div>
          <div><strong>3<span>+</span></strong><small>Years Learning</small></div>
          <div><strong>20<span>+</span></strong><small>Techs</small></div>
          <div><strong>Always</strong><small>Building</small></div>
        </div>
      </div>
    </section>
  );
}
