import { useRef, type ElementType, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

/** Staggered masked line reveal for display headings. */
export function Lines({
  lines, as: Tag = 'h2', className = '', delay = 0,
}: { lines: ReactNode[]; as?: ElementType; className?: string; delay?: number }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            initial={{ y: '112%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 1.15, ease, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Reveal({
  children, delay = 0, y = 28, className,
}: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Image frame: clip-path reveal on entry + gentle parallax drift. */
export function ParallaxImage({
  src, alt, className = '', strength = 8, eager = false, position,
}: { src: string; alt: string; className?: string; strength?: number; eager?: boolean; position?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  return (
    <motion.div
      ref={ref}
      className={`frame ${className}`}
      initial={{ clipPath: 'inset(12% 0% 0% 0%)', opacity: 0.001 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 1.4, ease }}
    >
      <motion.img
        src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async"
        style={{ y, objectPosition: position, height: `${100 + strength * 2}%`, marginTop: `-${strength}%` }}
      />
    </motion.div>
  );
}
