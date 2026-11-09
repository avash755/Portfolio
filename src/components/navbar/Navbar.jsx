import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';
const links = [['home','Home'],['about','About'],['projects','Projects'],['skills','Skills'],['journey','Experience'],['contact','Contact']];
export default function Navbar() {
  const [open,setOpen]=useState(false); const active=useActiveSection(links.map(([id])=>id));
  const go=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
  
  return <header className="nav-wrap">
    <nav className="navbar container">
      <button className="brand" onClick={()=>go('home')} aria-label="Go home">EMTAYES_ANWAR<span>.DEV</span></button>
      <div className="desktop-nav">{links.map(([id,label])=>
        <button key={id} className={active===id?'active':''} onClick={()=>go(id)}>{label}</button>)}
      </div>
      <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    </nav>
    {open&&<div className="mobile-nav">
      <div className="container mobile-nav-inner">{links.map(([id,label])=>
        <button key={id} onClick={()=>go(id)}>{label}</button>)}
      </div>
    </div>
    }
  </header>;
}
