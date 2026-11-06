import { ArrowUpRight, Download } from 'lucide-react';
export default function Button({ href, children, variant='primary', download=false, onClick }) {
  const className = `button button-${variant}`;
  if (onClick) return <button className={className} onClick={onClick}>{children}<ArrowUpRight size={16}/></button>;
  return <a className={className} href={href} download={download}>{children}{download ? <Download size={16}/> : <ArrowUpRight size={16}/>}</a>;
}
