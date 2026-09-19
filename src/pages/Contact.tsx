import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Lines, Reveal } from '../components/Motion';
import { SITE } from '../data/site';

const ease = [0.22, 1, 0.36, 1] as const;
const { lat, lon } = SITE.coords;
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.06}%2C${lat - 0.032}%2C${lon + 0.06}%2C${lat + 0.032}&layer=mapnik&marker=${lat}%2C${lon}`;

const subjects = ['General enquiry', 'Trade & wholesale', 'Press & partnerships', 'An existing order'];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(String(f.get('subject')))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <section className="contact-hero on-dark" aria-label="Contact">
        <div className="wrap">
          <motion.span className="eyebrow" style={{ color: 'var(--gold-soft)' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease }}>Contact</motion.span>
          <h1 className="display">
            {['Let’s', <><em key="t">talk.</em></>].map((l, i) => (
              <span className="line-mask" key={i}>
                <motion.span initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 1.25, ease, delay: 0.3 + i * 0.14 }}>{l}</motion.span>
              </span>
            ))}
          </h1>
          <motion.dl className="details" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1, ease }}>
            <div><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
            <div><dt>Telephone</dt><dd><a href={SITE.phoneHref}>{SITE.phone}</a></dd></div>
            <div><dt>Origin</dt><dd>{SITE.origin}</dd></div>
          </motion.dl>
        </div>
      </section>

      <section className="section on-light contact-main" aria-label="Send a message">
        <div className="wrap grid-12">
          <div className="l">
            <Reveal><span className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 28 }}>Say hello</span></Reveal>
            <Lines as="h2" className="h3" lines={['Questions, orders,', <>or just a <em key="c" style={{ color: 'var(--olive)' }}>conversation.</em></>]} />
            <Reveal delay={0.15}>
              <p className="lead" style={{ margin: '32px 0 40px' }}>Whether you’re stocking a delicatessen, cooking for a restaurant or simply curious about the oil, we’d love to hear from you.</p>
              <ul className="meta-list">
                <li><span>General</span>Questions about products &amp; orders</li>
                <li><span>Trade</span>Wholesale &amp; volume pricing</li>
                <li><span>Company</span>{SITE.company}</li>
                <li><span>Reg. no.</span>{SITE.reg}</li>
              </ul>
            </Reveal>
          </div>

          <Reveal className="r" delay={0.1}>
            {sent ? (
              <div className="sent" role="status">
                <h3 className="h3">Gracias.</h3>
                <p className="lead">Your email app should now open with your message ready to send. If it didn’t, write to us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
                <button className="arrow-link" onClick={() => setSent(false)}>Write another message <ArrowRight size={16} /></button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="field-row">
                  <label className="field"><span>Name</span><input name="name" type="text" required autoComplete="name" /></label>
                  <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
                </div>
                <label className="field">
                  <span>Subject</span>
                  <select name="subject" defaultValue={subjects[0]}>{subjects.map((s) => <option key={s}>{s}</option>)}</select>
                </label>
                <label className="field"><span>Message</span><textarea name="message" rows={5} required /></label>
                <button type="submit" className="btn btn-ink">Send message <ArrowRight size={16} /></button>
                <p className="form-note">This opens your email app with the message ready to send.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="mapband" aria-label="Location">
        <iframe title="Map: the groves of Andalusia, Spain" src={mapSrc} loading="lazy" referrerPolicy="no-referrer" />
        <div className="cap">
          <span className="eyebrow"><MapPin size={14} /> Where it grows</span>
          <p className="h2">Andalusia,<br /><em>Spain.</em></p>
          <p className="coords-line">{lat.toFixed(4)}° N · {Math.abs(lon).toFixed(4)}° W</p>
        </div>
      </section>
    </>
  );
}
