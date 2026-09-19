import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Lines } from '../components/Motion';

/** Temporary page for routes still to be designed with the shared system. */
export default function Stub({ title, eyebrow }: { title: string[]; eyebrow: string }) {
  return (
    <section className="stub on-dark">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <Lines as="h1" className="h2" lines={title} />
        <p className="lead muted">This page is next in the redesign — it will reuse the same design system.</p>
        <p style={{ marginTop: 32 }}><Link to="/" className="arrow-link">Back home <ArrowRight size={16} /></Link></p>
      </div>
    </section>
  );
}
