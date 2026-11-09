import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const contactMethods = [
  {
    label: 'Email',
    value: 'emtayes542anwar.pro@gmail.com',
    href: 'mailto:emtayes542anwar.pro@gmail.com',
    hint: 'Send me an email',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: '+880 172-731-2063',
    href: 'tel:+8801727312063',
    hint: 'Call me directly',
    Icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: 'Message me on WhatsApp',
    href: 'https://wa.me/8801727312063',
    hint: 'Open a direct chat',
    Icon: MessageCircle,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Get In Touch"
          title="Let’s build something"
          description="Have a project in mind or need a web developer? Feel free to reach me by email, phone, or WhatsApp."
        />
        <div className="contact-layout contact-methods">
          {contactMethods.map(({ label, value, href, hint, Icon, external }) => (
            <a
              className="contact-card contact-method"
              href={href}
              key={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={`${label}: ${value}`}
            >
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{hint} <ArrowUpRight size={13} aria-hidden="true" /></small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
