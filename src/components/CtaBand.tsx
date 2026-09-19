import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Lines, Reveal } from './Motion';

interface Props {
  eyebrow: string;
  lines: ReactNode[];
  lead?: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
  tone?: 'dark' | 'olive';
}

/** Closing call-to-action that leads visitors on to the shop. */
export default function CtaBand({ eyebrow, lines, lead, primary, secondary, tone = 'dark' }: Props) {
  return (
    <section className={`section cta-band ${tone === 'olive' ? 'on-olive' : 'on-dark'}`}>
      <div className="wrap">
        <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 28 }}>{eyebrow}</span></Reveal>
        <Lines as="h2" className="display" lines={lines} />
        <Reveal delay={0.2}>
          {lead && <p className="lead muted" style={{ marginTop: 36 }}>{lead}</p>}
          <div className="hero-ctas" style={{ marginTop: 44 }}>
            <Link to={primary.to} className="btn btn-gold">{primary.label} <ArrowRight size={16} /></Link>
            {secondary && <Link to={secondary.to} className="btn btn-ghost">{secondary.label}</Link>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
