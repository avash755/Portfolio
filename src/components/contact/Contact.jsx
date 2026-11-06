import { useState } from 'react';
import { ArrowUpRight, Check, Mail, Send } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { sendContactMessage } from '../../services/contactService';

const emptyForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [state, setState] = useState({ loading: false, success: false, error: '' });

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setState({ loading: true, success: false, error: '' });

    try {
      await sendContactMessage(form);
      setForm(emptyForm);
      setState({ loading: false, success: true, error: '' });
    } catch (error) {
      setState({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          eyebrow="06 / Get In Touch"
          title="Let’s build something"
          description="Have an interesting project proposal or an open engineering role? Send me a message directly."
        />
        <div className="contact-layout">
          <div className="contact-copy">
            <div className="contact-card">
              <Mail size={18} />
              <span>Email</span>
              <a href="mailto:emtayes542anwar.pro@gmail.com">emtayes542anwar.pro@gmail.com <ArrowUpRight size={14} /></a>
            </div>
            <div className="contact-card accent">
              <span>Open to</span>
              <strong>Interesting projects · Freelance work · Developer opportunities</strong>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <label>
              Name
              <input required value={form.name} onChange={updateField('name')} placeholder="Your name" />
            </label>
            <label>
              Email
              <input required type="email" value={form.email} onChange={updateField('email')} placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea required minLength={10} value={form.message} onChange={updateField('message')} placeholder="Details about your project..." />
            </label>
            <button className="button button-primary submit-btn" disabled={state.loading}>
              {state.loading ? <><span className="spinner" /> Sending...</> : state.success ? <><Check size={17} /> Sent</> : <><Send size={17} /> Send Message</>}
            </button>
            {state.error && <p className="form-error">{state.error}</p>}
            {state.success && <p className="form-success">Message sent. I’ll get back to you through the contact details provided.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
