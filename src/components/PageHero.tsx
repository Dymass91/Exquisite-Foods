import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  eyebrow: string;
  lines: ReactNode[];
  lead?: string;
  image: string;
  alt: string;
  position?: string;
  children?: ReactNode;
}

/** Photographic page opener — same language as the home hero, a little shorter. */
export default function PageHero({ eyebrow, lines, lead, image, alt, position = '50% 50%', children }: Props) {
  return (
    <section className="hero page-hero" aria-label={eyebrow}>
      <div className="hero-media">
        <motion.img
          src={image} alt={alt} style={{ objectPosition: position }}
          initial={{ scale: 1.16 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }}
        />
      </div>
      <div className="hero-content">
        <div className="wrap">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease }}>
            {eyebrow}
          </motion.span>
          <h1 className="display">
            {lines.map((l, i) => (
              <span className="line-mask" key={i}>
                <motion.span initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 1.2, ease, delay: 0.3 + i * 0.13 }}>{l}</motion.span>
              </span>
            ))}
          </h1>
          {(lead || children) && (
            <motion.div className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1, ease }}>
              {lead && <p className="lead">{lead}</p>}
              {children && <div className="hero-ctas">{children}</div>}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
