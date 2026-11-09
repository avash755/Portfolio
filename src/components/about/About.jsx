import { ArrowRight, Code2 } from 'lucide-react';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

const workflowSteps = [
  { number: '01', title: 'Understand', description: "Identify the problem, target users, and project requirements." },
  { number: '02', title: 'Structure', description: 'Define the structure, features, and user experience.' },
  { number: '03', title: 'Build', description: 'Build the frontend and backend using appropriate technologies.' },
  { number: '04', title: 'Refine', description: 'Test functionality, fix issues, and improve responsiveness.' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="01 / Introduction" title="About Me" description="A little about my background, approach, and the products I build." />
        <div className="about-layout">
          <Reveal className="about-main">
            <p className="lead">I'm a web developer interested in building practical, accessible, and responsive web applications.</p>
            <p>I enjoy turning ideas into functional products, from planning the interface to implementing the frontend and backend. My experience has grown from HTML, CSS, and JavaScript to building full-stack applications using React, Node.js, Express, and MongoDB.</p>
            <div className="signature-row">
              <div>
                <div className="signature">EMTAYES ANWAR AVASH </div>
                <div className="signature-title"><span>Web development · UI engineering</span></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="about-workflow">
            <div className="about-workflow-card">
              <div className="about-workflow-topline">
                <span className="about-workflow-icon"><Code2 size={17} /></span>
                <span className="about-workflow-label">MY APPROACH · WEB DEVELOPMENT</span>
              </div>
              <h3>How I Build</h3>
              <p className="about-workflow-intro">A structured approach to turning ideas into functional web applications.</p>
              <ol className="workflow-list">
                {workflowSteps.map((step) => (
                  <li key={step.number}>
                    <span className="workflow-number">{step.number}</span>
                    <div className="workflow-copy"><strong>{step.title}</strong><p>{step.description}</p></div>
                    <ArrowRight size={15} aria-hidden="true" />
                  </li>
                ))}
              </ol>
              <div className="about-workflow-footer">
                <span>CORE FOCUS</span>
                <div className="about-focus-tags"><span>React Development</span><span>Responsive Interfaces</span><span>Full-Stack Applications</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}