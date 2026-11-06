import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
const icons={Frontend:Code2,Backend:Database,Programming:Code2,'Tools & OS':Wrench};
export default function Skills({skills}){return <section id="skills" className="section"><div className="container"><SectionHeading eyebrow="04 / Competency" title="Tech Stack" description="The tools I use to design interfaces, services, data layers, and developer workflows."/><div className="skills-grid">{Object.entries(skills).map(([group,items],i)=>{const Icon=icons[group]||Code2;return <Reveal delay={i*.07} key={group} className="skill-card"><div className="skill-icon"><Icon size={18}/></div><h3>{group}</h3><div className="skill-list">{items.map((item,j)=><motion.span key={item} initial={{opacity:0,x:-8}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.08+j*.04}}>{item}</motion.span>)}</div></Reveal>})}</div></div></section>}
