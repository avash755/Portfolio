import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
export default function Journey({journey}){
    return <section id="journey" className="section section-alt">
        <div className="container">
            <SectionHeading eyebrow="04 / Chronology" title="My Journey" description="A timeline of the tools, products, and engineering habits that shaped how I build."/>
            <div className="timeline">{journey.map((item,i)=>
                <motion.article className="timeline-item" key={`${item.year}-${item.title}`} initial={{opacity:0,x:i%2?28:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.65}}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-dot"/>
                    <div className="timeline-card"><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div>
                </motion.article>)}
            </div>
        </div>
    </section>}
