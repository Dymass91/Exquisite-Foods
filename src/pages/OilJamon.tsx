import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductRow from '../components/ProductRow';
import CtaBand from '../components/CtaBand';
import { Lines, Reveal, ParallaxImage } from '../components/Motion';
import { gbp, productsIn } from '../data/products';

import rangeImg from '../images/jamon-range.jpg';
import bottleImg from '../images/jamon-250ml.jpg';
import bowlImg from '../images/MainImg7.jpg';
import shelfImg from '../images/72570639_406389683609046_1593854890302504960_n.jpg';

const ease = [0.22, 1, 0.36, 1] as const;

const taste = [
  { n: 'I', t: 'Aroma', p: 'Warm, savoury notes of cured Iberian ham rising from the glass.' },
  { n: 'II', t: 'Palate', p: 'Smooth extra virgin olive oil with a nutty, rounded depth.' },
  { n: 'III', t: 'Finish', p: 'Long and gently sweet, with a whisper of the acorn-fed south.' },
];

const serve = [
  ['Fried eggs', 'A few drops over the yolk.'],
  ['Tomato on toast', 'The classic Spanish breakfast, elevated.'],
  ['Roast potatoes', 'Toss through just before serving.'],
  ['Grilled vegetables', 'Add savoury depth without the salt shaker.'],
  ['Cheese & bread', 'Drizzle over manchego or fresh bread.'],
];

export default function OilJamon() {
  const range = productsIn('jamon');
  const from = Math.min(...range.map((p) => p.priceTiers[0].price));
  return (
    <>
      <section className="jh" aria-label="Oil & Jamón">
        <span className="ghost" aria-hidden="true">Jamón</span>
        <div className="wrap grid-12">
          <div className="copy">
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease }}>Oil &amp; Jamón</motion.span>
            <h1 className="display">
              {['Two icons of', <><em key="i">Iberian</em></>, 'gastronomy.'].map((l, i) => (
                <span className="line-mask" key={i}>
                  <motion.span initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 1.2, ease, delay: 0.3 + i * 0.13 }}>{l}</motion.span>
                </span>
              ))}
            </h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 1, ease }}>
              <p className="lead" style={{ marginTop: 36 }}>Extra virgin olive oil flavoured with Iberian ham — one bottle that seasons, dresses and finishes.</p>
              <div className="hero-ctas" style={{ marginTop: 40 }}>
                <a href="#formats" className="btn btn-cream">Shop from {gbp(from)} <ArrowRight size={16} /></a>
                <a href="#story" className="btn btn-ghost">The idea</a>
              </div>
            </motion.div>
          </div>
          <motion.div className="media" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease, delay: 0.2 }}>
            <div className="frame"><img src={rangeImg} alt="Oil & Jamón bottles and a jar of olive oil cream with gold labels" style={{ objectPosition: '50% 55%' }} /></div>
          </motion.div>
        </div>
      </section>

      <section className="section on-light" id="story" aria-label="The idea">
        <div className="wrap grid-12 jamon-story">
          <div className="l">
            <Reveal><span className="eyebrow" style={{ color: 'var(--terracotta)', marginBottom: 28 }}>The idea</span></Reveal>
            <Lines as="h2" className="h2" lines={['The essence of', <>the best jamón,</>, <>in the best <em key="o" style={{ color: 'var(--terracotta-2)' }}>oil.</em></>]} />
          </div>
          <Reveal className="r" delay={0.15}>
            <p className="lead">Two ingredients that define Spanish tables — olive oil and Iberian ham — brought together in a single bottle.</p>
            <p className="lead" style={{ marginTop: '1.1em' }}>The oil is extra virgin; the ham lends its aroma. Nothing to slice, nothing to plate: just open, drizzle and taste.</p>
          </Reveal>
        </div>
      </section>

      <section className="section on-dark taste" aria-labelledby="taste-title">
        <div className="wrap">
          <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 28 }}>Tasting profile</span></Reveal>
          <Lines as="h2" className="h2" lines={[<span id="taste-title" key="t">Savoury, smooth,</span>, <><em key="l">lingering.</em></>]} />
          <div className="cols">
            {taste.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.1} className="col">
                <span className="n">{t.n}</span>
                <h3>{t.t}</h3>
                <p>{t.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-stone serve" aria-labelledby="serve-title">
        <div className="wrap grid-12">
          <ParallaxImage className="pic" src={bowlImg} alt="A square bottle of golden oil beside a bowl, peppercorns and rosemary" strength={6} position="65% 50%" />
          <div className="txt">
            <Reveal><span className="eyebrow" style={{ color: 'var(--terracotta)', marginBottom: 28 }}>Serving suggestions</span></Reveal>
            <Lines as="h2" className="h2" lines={[<span id="serve-title" key="s">A drizzle</span>, <><em key="i" style={{ color: 'var(--terracotta-2)' }}>changes everything.</em></>]} />
            <Reveal delay={0.15}>
              <ul className="places warm">
                {serve.map(([a, b]) => <li key={a}>{a}<span>{b}</span></li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section on-light" id="formats" aria-labelledby="formats-title">
        <div className="wrap">
          <div className="collections-head">
            <div>
              <Reveal><span className="eyebrow" style={{ color: 'var(--terracotta)', marginBottom: 24 }}>Product formats</span></Reveal>
              <Lines as="h2" className="h2" lines={[<span id="formats-title" key="f">Choose your</span>, <><em key="f2" style={{ color: 'var(--terracotta-2)' }}>format.</em></>]} />
            </div>
            <p className="lead muted" style={{ fontSize: '.95rem' }}>Bottles and a sweet olive-oil cream, all flavoured with Iberian ham.</p>
          </div>
          <div className="prows">
            {range.map((p, i) => <ProductRow key={p.id} product={p} index={i} flip={i % 2 === 1} />)}
          </div>
        </div>
      </section>

      <section className="jorigin" aria-label="Origin">
        <div className="wrap grid-12">
          <div className="pic">
            <div className="frame"><img src={bottleImg} alt="An Oil & Jamón gourmet bottle with a gold label" loading="lazy" style={{ objectPosition: '50% 45%' }} /></div>
          </div>
          <div className="txt">
            <Reveal><span className="eyebrow" style={{ color: '#f0c987', marginBottom: 24 }}>Made in Andalucía</span></Reveal>
            <Lines as="h2" className="h2" lines={['From the heart', <>of <em key="a">Seville.</em></>]} />
            <Reveal delay={0.2}>
              <p className="lead" style={{ margin: '32px 0 36px' }}>Crafted in Mairena del Aljarafe, in the olive-growing countryside outside Seville, and brought to the UK by Exquisite Foods.</p>
              <Link to="/contact" className="btn btn-cream">Trade &amp; wholesale <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
          <div className="shelf"><div className="frame"><img src={shelfImg} alt="Oil & Jamón bottles and a jar on a wooden table" loading="lazy" /></div></div>
        </div>
      </section>

      <CtaBand tone="dark" eyebrow="Also from the grove" lines={['Pair it with', <><em key="p">pure olive oil.</em></>]} primary={{ to: '/extra-virgin', label: 'Extra Virgin' }} secondary={{ to: '/organic', label: 'Organic' }} />
    </>
  );
}
