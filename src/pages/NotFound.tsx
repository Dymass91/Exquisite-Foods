import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Lines } from '../components/Motion';

export default function NotFound() {
  return (
    <section className="nf on-dark">
      <div className="wrap">
        <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Error 404</span>
        <Lines as="h1" className="display" lines={['Lost in the', <><em key="g">grove.</em></>]} />
        <p className="lead muted" style={{ marginTop: 32 }}>The page you’re looking for has wandered off. Let’s get you back to the table.</p>
        <div className="hero-ctas" style={{ marginTop: 40 }}>
          <Link to="/" className="btn btn-gold">Back home <ArrowRight size={16} /></Link>
          <Link to="/extra-virgin" className="btn btn-ghost">Explore the collection</Link>
        </div>
      </div>
    </section>
  );
}
