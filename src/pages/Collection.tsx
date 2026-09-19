import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProductRow from '../components/ProductRow';
import CollectionCard from '../components/CollectionCard';
import CtaBand from '../components/CtaBand';
import { Lines, Reveal, ParallaxImage } from '../components/Motion';
import { productsIn, categoryCopy } from '../data/products';

import harvestImg from '../images/header3.jpeg';
import oilBowlImg from '../images/olive-oil-head.jpg';
import hillsImg from '../images/header2.jpg';
import groveImg from '../images/header4.jpg';
import bowlOliveImg from '../images/MainImg7.jpg';

const config = {
  eco: {
    hero: harvestImg, heroAlt: 'A tub of freshly picked green olives between rows of olive trees', heroPos: '50% 70%',
    eyebrow: 'Collection · Certified organic',
    title: ['Organic', <><em key="o">Olive Oil</em></>],
    lead: 'Grown gently, picked by hand and pressed honestly.',
    introLines: ['Grown gently.', <>Pressed <em key="p">honestly.</em></>],
    intro: 'Our organic oil comes from small Andalusian groves farmed without synthetic fertiliser or herbicides. Lechín and Manzanilla olives are picked by hand and extracted by mechanical means only — the result is creamy, green and full of the place it grew.',
    facts: [['Origin', 'Sierra de Cádiz'], ['Varieties', 'Lechín · Manzanilla'], ['Certified', 'CAAE · EU organic'], ['Harvest', 'Hand-picked']],
    ctaTitle: ['Taste the', <><em key="g">grove.</em></>],
    related: { to: '/extra-virgin', label: 'Extra Virgin Olive Oil', kicker: 'Everyday, cold extracted', image: oilBowlImg, alt: 'A jug and bowl of golden olive oil with rosemary', pos: '30% 50%' },
  },
  ext: {
    hero: oilBowlImg, heroAlt: 'A jug and bowl of golden extra virgin olive oil with rosemary on old wood', heroPos: '30% 50%',
    eyebrow: 'Collection · Everyday luxury',
    title: ['Extra Virgin', <><em key="o">Olive Oil</em></>],
    lead: 'Fresh, green and generous — made to be used freely.',
    introLines: ['Made to be', <>used <em key="u">freely.</em></>],
    intro: 'A bright, honest extra virgin olive oil from the sierras of Andalucía. Cold extracted shortly after harvest, it brings fresh-cut grass, green almond and a clean peppery finish to everything from a slice of tomato toast to a whole roast.',
    facts: [['Origin', 'Andalucía, Spain'], ['Extraction', 'Cold, mechanical'], ['Sizes', '500 ml – 5 L'], ['Best for', 'Cooking & finishing']],
    ctaTitle: ['Start with', <><em key="a">one bottle.</em></>],
    related: { to: '/organic', label: 'Organic Olive Oil', kicker: 'Certified organic', image: groveImg, alt: 'Olive trees in the afternoon light', pos: '50% 60%' },
  },
} as const;

export default function Collection({ kind }: { kind: 'eco' | 'ext' }) {
  const c = config[kind];
  const list = productsIn(kind);
  const info = categoryCopy[kind];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} lines={[...c.title]} lead={c.lead} image={c.hero} alt={c.heroAlt} position={c.heroPos}>
        <a href="#range" className="btn btn-gold">View the range <ArrowRight size={16} /></a>
      </PageHero>

      <section className="section on-light intro" aria-label="Introduction">
        <div className="wrap grid-12">
          <div className="l">
            <Reveal><span className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 28 }}>The collection</span></Reveal>
            <Lines as="h2" className="h2" lines={[...c.introLines]} />
            <Reveal delay={0.2}><p className="lead" style={{ marginTop: 40 }}>{c.intro}</p></Reveal>
          </div>
          <Reveal className="r" delay={0.15}>
            <ul className="meta-list">
              {c.facts.map(([k, v]) => <li key={k}><span>{k}</span>{v}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section on-stone" id="range" style={{ paddingTop: 'clamp(72px,9vw,140px)' }} aria-labelledby="range-title">
        <div className="wrap">
          <div className="collections-head">
            <Lines as="h2" className="h3" lines={[<span id="range-title" key="r">The range · {list.length} sizes</span>]} />
            <p className="lead muted" style={{ fontSize: '.95rem' }}>Prices fall automatically with volume — open “Volume pricing” on any bottle.</p>
          </div>
          <div className="prows">
            {list.map((p, i) => <ProductRow key={p.id} product={p} index={i} flip={i % 2 === 1} />)}
          </div>
        </div>
      </section>

      <section className="section on-light origin-strip" aria-label="Origin">
        <div className="wrap grid-12">
          <ParallaxImage className="pic" src={hillsImg} alt="Olive groves rolling across the hills of Andalucía" strength={7} />
          <div className="txt">
            <Reveal><span className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 24 }}>Where it comes from</span></Reveal>
            <Lines as="h2" className="h3" lines={['Zahara de la Sierra,', 'Grazalema,', <>Sierra de <em key="l">Líjar.</em></>]} />
            <Reveal delay={0.2}>
              <p className="lead" style={{ margin: '32px 0 30px' }}>Limestone soils, cold winters and long dry summers. Small growers who know every tree by name.</p>
              <Link to="/story" className="arrow-link">Read our story <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section on-dark" aria-labelledby="also-title" style={{ paddingBlock: 'clamp(72px,9vw,140px)' }}>
        <div className="wrap">
          <div className="collections-head">
            <Lines as="h2" className="h2" lines={[<span id="also-title" key="a">Also from the <em>grove</em></span>]} />
          </div>
          <div className="tiles pair">
            <CollectionCard className="r1" to={c.related.to} index="→" kicker={c.related.kicker} title={c.related.label} image={c.related.image} alt={c.related.alt} position={c.related.pos} />
            <CollectionCard className="r2" to="/oil-jamon" index="→" kicker="Iberian pairing" title="Oil & Jamón" image={bowlOliveImg} alt="Olive oil bottle with peppercorns on a wooden spoon" position="50% 55%" />
          </div>
        </div>
      </section>

      <CtaBand tone="olive" eyebrow={info.label} lines={[...c.ctaTitle]} lead="Delivered from Andalucía to your kitchen, restaurant or delicatessen." primary={{ to: '/contact', label: 'Trade enquiries' }} secondary={{ to: '/health', label: 'Why olive oil' }} />
    </>
  );
}
