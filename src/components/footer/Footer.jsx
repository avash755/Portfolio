import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
export default function Footer(){
    return <footer className="footer">
            <div className="container footer-main">
                <div>
                    <div className="brand footer-brand">EMTAYES_ANWAR<span>.DEV</span></div>
                    <p>Building useful web applications with modern technologies.</p>
                </div>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#journey">Journey</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/avash755" target="_blank" rel="noreferrer">
                        <Github size={17}/> GitHub <ArrowUpRight size={14}/>
                    </a>
                    <a href="https://www.linkedin.com/in/emtayesanwaravash/" target="_blank" rel="noreferrer">
                        <Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/>
                    </a>
                </div>
            </div>
            <div className="container footer-bottom">
                <span>© 2026 Emtayes Anwar Avash. </span>
                <span>All rights reserved.</span>
            </div>
        </footer>
    }
