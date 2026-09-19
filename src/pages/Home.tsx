import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Lines, Reveal, ParallaxImage } from '../components/Motion';
import CollectionCard from '../components/CollectionCard';
import ProductShowcase from '../components/ProductShowcase';
import { productById, gbp } from '../data/products';

import heroImg from '../images/MainImg3.jpg';
import harvestImg from '../images/header3.jpeg';
import groveImg from '../images/header4.jpg';
import hillsImg from '../images/header2.jpg';
import oilBowlImg from '../images/olive-oil-head.jpg';
import bottlesImg from '../images/MainImg6.jpg';
import bowlOliveImg from '../images/MainImg7.jpg';
import jamonImg from '../images/jamon-range.jpg';
import bottleImg from '../images/Extravirginoilsmall.jpg';

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- 1 · Hero ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      <motion.div className="hero-media" style={{ y }}>
        <motion.img
          src={heroImg} alt="Golden olive oil in glass bottles on dark wood with olive leaves"
          initial={{ scale: 1.22 }} animate={{ scale: 1 }} transition={{ duration: 2.6, ease }}
        />
      </motion.div>
      <motion.div className="hero-content" style={{ opacity: fade }}>
        <div className="wrap">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease }}>
            Andalusia, Spain
          </motion.span>
          <h1 className="display">
            {['The essence', <>of <em>Andalucía.</em></>].map((l, i) => (
              <span className="line-mask" key={i}>
                <motion.span initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 1.3, ease, delay: 0.45 + i * 0.14 }}>{l}</motion.span>
              </span>
            ))}
          </h1>
          <motion.div className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1.1, ease }}>
            <p className="lead">Exceptional olive oils sourced from the white villages of southern Spain.</p>
            <div className="hero-ctas">
              <Link to="/extra-virgin" className="btn btn-gold">Explore the collection <ArrowRight size={16} /></Link>
              <a href="#story" className="btn btn-ghost">Our story</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="scroll-cue" aria-hidden="true">Scroll <span /></div>
    </section>
  );
}

/* ---------- 2 · Statement ---------- */
function Statement() {
  return (
    <section className="section on-light statement" id="story" aria-labelledby="statement-title">
      <div className="wrap grid-12">
        <div className="copy">
          <Reveal><span className="eyebrow">Pure by nature</span></Reveal>
          <Lines as="h2" className="display" lines={['From grove', <>to <em>table.</em></>]} />
          <Reveal delay={0.2}>
            <p className="lead">For generations, olive oil has shaped the landscape, cuisine and culture of Andalucía.</p>
            <p className="lead">We work with small growers who still pick by hand and press within hours — so what reaches your kitchen tastes of the place it came from.</p>
            <p className="stamp">Est. in the Sierra de Cádiz</p>
          </Reveal>
        </div>
        <div className="media">
          <ParallaxImage className="main" src={harvestImg} alt="A tub of freshly picked green olives between rows of olive trees" strength={7} />
          <Reveal className="inset" delay={0.3}>
            <div className="frame" style={{ height: '100%' }}>
              <img src={groveImg} alt="Sunlit rows of olive trees" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3 · Collections ---------- */
function Collections() {
  return (
    <section className="section on-dark" aria-labelledby="collections-title" style={{ paddingTop: 'clamp(84px,10vw,160px)' }}>
      <div className="wrap">
        <div className="collections-head">
          <div>
            <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 28 }}>The collection</span></Reveal>
            <Lines as="h2" className="h2" lines={['Three ways to', <>taste <em>the south.</em></>]} />
          </div>
          <Reveal delay={0.2}><p className="lead">From certified organic to a bold Iberian pairing — each bottle bears the mark of its terroir.</p></Reveal>
        </div>
        <div className="tiles">
          <CollectionCard className="t1" to="/organic" index="01" kicker="Certified organic" title="Organic Olive Oil" image={groveImg} alt="Olive trees in the afternoon light" position="50% 60%" />
          <CollectionCard className="t2" to="/extra-virgin" index="02" kicker="Cold extracted" title="Extra Virgin Olive Oil" image={oilBowlImg} alt="A jug and bowl of golden olive oil with rosemary" position="30% 50%" />
          <CollectionCard className="t3" to="/oil-jamon" index="03" kicker="Iberian pairing" title="Oil & Jamón" image={bowlOliveImg} alt="Olive oil bottle with peppercorns on a wooden spoon" position="50% 55%" />
        </div>
      </div>
    </section>
  );
}

/* ---------- 5 · Origin ---------- */
function Origin() {
  return (
    <section className="section on-stone origin" aria-labelledby="origin-title">
      <div className="wrap">
        <div className="top">
          <Lines as="h2" className="h2" lines={['Born beneath', <>the <em>Andalusian</em> sun.</>]} />
          <Reveal className="coords" delay={0.3}>
            <small>Where it begins</small>
            36°50′ N<br />5°23′ W
          </Reveal>
        </div>
        <div className="body">
          <ParallaxImage className="land" src={hillsImg} alt="Aerial view of olive groves rolling across the Andalusian hills" strength={8} />
          <div className="side">
            <Reveal>
              <p className="lead">High in the Sierra de Cádiz, limestone soils, cold winters and long dry summers give our olives their depth — green, peppery, quietly complex.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="places">
                <li>Zahara de la Sierra <span>Cádiz</span></li>
                <li>Grazalema <span>Natural Park</span></li>
                <li>Sierra de Líjar <span>Algodonales</span></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6 · Process ---------- */
const steps = [
  { n: '01', title: 'Harvest', text: 'Olives are picked at first colour change, by hand and by comb, then carried to the mill within hours.', img: harvestImg, alt: 'Freshly harvested olives in a tub' },
  { n: '02', title: 'Cold pressing', text: 'Crushed and pressed below 27 °C. No heat, no chemicals — only patience and stainless steel.', img: bottlesImg, alt: 'Fresh olive oil in glass jugs' },
  { n: '03', title: 'Bottling', text: 'Rested, filtered and bottled in small batches, sealed against light to preserve freshness.', img: bottleImg, alt: 'A bottle of extra virgin olive oil' },
  { n: '04', title: <>From Andalucía <em>to your table</em></>, text: 'Shipped directly from the cooperative to your kitchen, restaurant or delicatessen.', img: oilBowlImg, alt: 'Olive oil served in a glass bowl at the table' },
];

function Process() {
  const [active, setActive] = useState(0);
  return (
    <section className="section on-olive process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="head">
          <Reveal><span className="eyebrow">The process</span></Reveal>
          <Lines as="h2" className="h2" lines={['Slow by', <><em>design.</em></>]} />
        </div>
        <div className="cols">
          <div className="sticky" aria-hidden="true">
            {steps.map((s, i) => (
              <div key={s.n} className={`frame${i === active ? ' on' : ''}`}><img src={s.img} alt="" loading="lazy" /></div>
            ))}
            <div className="counter">{steps[active].n}</div>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                className={`step${i === active ? ' on' : ''}`}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: '-45% 0px -45% 0px' }}
              >
                <span className="n">{s.n} / 04</span>
                <h3 className="h2" style={{ fontSize: 'clamp(2.6rem, 5.4vw, 5rem)' }}>{s.title}</h3>
                <p className="lead">{s.text}</p>
                <div className="step-img frame"><img src={s.img} alt={s.alt} loading="lazy" /></div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7 · Benefits ---------- */
const facts = [
  { num: <>55–83<small>%</small></>, title: 'Monounsaturated fat', text: 'Most of the fat in olive oil is oleic acid, a monounsaturated fat — the kind that replaces saturated fat in a balanced diet.' },
  { num: <>E</>, title: 'A source of vitamin E', text: 'A natural antioxidant vitamin. One tablespoon provides roughly 13% of the daily reference intake.' },
  { num: <>1<small>st</small></>, title: 'Pillar of the Mediterranean diet', text: 'Olive oil is the principal added fat in the traditional Mediterranean way of eating — alongside vegetables, grains, fish and pulses.' },
];

function Benefits() {
  return (
    <section className="section on-light benefits" aria-labelledby="benefits-title">
      <div className="wrap">
        <div className="head">
          <Lines as="h2" className="display" lines={[<>Good by</>, <em key="n">nature.</em>]} />
          <Reveal className="lead" delay={0.2}><p>Simple ingredients, honestly made. Here is what olive oil offers as part of everyday eating.</p></Reveal>
        </div>
        <ul className="facts">
          {facts.map((f) => (
            <li key={f.title}>
              <Reveal className="num"><span>{f.num}</span></Reveal>
              <Reveal className="txt" delay={0.1}><h3>{f.title}</h3><p>{f.text}</p></Reveal>
            </li>
          ))}
        </ul>
        <p className="disclaimer">Olive oil is one part of a varied, balanced diet. This information is general in nature and is not medical advice; speak to a healthcare professional about your own needs.</p>
        <div style={{ marginTop: 40 }}><Link to="/health" className="arrow-link">Read more on health <ArrowRight size={16} /></Link></div>
      </div>
    </section>
  );
}

/* ---------- 8 · Oil & Jamón ---------- */
function Jamon() {
  return (
    <section className="section jamon" aria-labelledby="jamon-title">
      <div className="wrap grid-12">
        <div className="copy">
          <Reveal><span className="eyebrow">Oil &amp; Jamón</span></Reveal>
          <Lines as="h2" className="h2" lines={['Two icons of', <><em>Iberian</em> gastronomy.</>]} />
          <Reveal delay={0.2}>
            <p className="lead">Extra virgin olive oil gently infused with the aroma of Iberian ham — a seasoning, dressing and finishing oil in a single bottle. Drizzle over eggs, tomato toast, potatoes or a simple salad.</p>
            <div className="tags"><span>Iberian ham</span><span>Extra virgin</span><span>Finishing oil</span></div>
            <div className="ctas">
              <Link to="/oil-jamon" className="btn btn-cream">Shop Oil &amp; Jamón <ArrowRight size={16} /></Link>
              <Link to="/oil-jamon" className="btn btn-ghost">Learn more</Link>
            </div>
          </Reveal>
        </div>
        <div className="media">
          <span className="price-from">From {gbp(productById('jamon-oil-100ml').priceTiers[0].price)}</span>
          <ParallaxImage src={jamonImg} alt="Oil & Jamón bottles and jar with gold labels" strength={6} position="50% 60%" />
          <span className="badge" aria-hidden="true">Made in<br />Andalucía</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9 · Moment ---------- */
function Moment() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  return (
    <section className="moment" ref={ref} aria-label="A Mediterranean moment">
      <motion.div className="frame" style={{ y, background: 'var(--ink)' }}>
        <img src={heroImg} alt="Golden olive oil catching the light" style={{ objectPosition: '75% 40%' }} loading="lazy" />
      </motion.div>
      <div className="inner">
        <Reveal><span className="eyebrow">A Mediterranean moment</span></Reveal>
        <Lines as="h2" className="h2" lines={['Made slowly.', <><em>Enjoyed slowly.</em></>]} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Collections />
      <ProductShowcase
        product={productById('extra-virgin-500ml')}
        to="/extra-virgin"
        headline={['Extra Virgin', <>Olive <em>Oil</em></>]}
        notes={[
          { label: 'Origin', text: 'Sierra de Cádiz, Andalucía' },
          { label: 'Tasting', text: 'Fresh-cut grass, green almond, a gentle peppery finish.' },
          { label: 'Pairs with', text: 'Tomato toast, grilled fish, salads and slow-roasted vegetables.' },
        ]}
      />
      <Origin />
      <Process />
      <Benefits />
      <Jamon />
      <Moment />
    </>
  );
}
