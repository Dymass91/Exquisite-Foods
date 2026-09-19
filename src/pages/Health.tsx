import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { Lines, Reveal, ParallaxImage } from '../components/Motion';

import heroImg from '../images/MainImg4.jpg';
import veggiesImg from '../images/benefitsimg.jpg';
import olivesImg from '../images/oliwki.jpg';
import bowlImg from '../images/olive-oil-head.jpg';

const facts = [
  { num: <>55–83<small>%</small></>, title: 'Monounsaturated fat', text: 'Most of the fat in olive oil is oleic acid — a monounsaturated fat, and the one that replaces saturated fat in a balanced diet.' },
  { num: <>E</>, title: 'A natural source of vitamin E', text: 'A tablespoon provides roughly 13% of the daily reference intake of this antioxidant vitamin.' },
  { num: <>+</>, title: 'Polyphenols', text: 'Extra virgin olive oil naturally contains polyphenols — plant compounds that give a fresh oil its peppery bite.' },
];

const tips = [
  ['Look for the harvest date', 'Freshness matters. The more recent the harvest, the livelier the oil.'],
  ['Choose dark glass or tin', 'Light is olive oil’s enemy. Good packaging protects flavour.'],
  ['Store it cool and closed', 'Keep it away from the hob and the window, and reseal after every use.'],
  ['Use it freely', 'Cook with it, dress with it, finish with it. A good oil is meant to be enjoyed.'],
];

export default function Health() {
  return (
    <>
      <PageHero
        eyebrow="Health" lines={['Good by', <><em key="n">nature.</em></>]}
        lead="Simple ingredients, honestly made — and a tradition of eating well that has lasted for generations."
        image={heroImg} alt="Green olives and a bottle of olive oil beside a burlap sack" position="70% 45%"
      >
        <a href="#facts" className="btn btn-ghost">The facts</a>
      </PageHero>

      <section className="section on-light" aria-label="Mediterranean tradition">
        <div className="wrap grid-12 duo">
          <div className="txt" style={{ gridColumn: '1 / span 6' }}>
            <Reveal><span className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 28 }}>Mediterranean tradition</span></Reveal>
            <Lines as="h2" className="h2" lines={['The oil at the', <>heart of the <em key="t">table.</em></>]} />
            <Reveal delay={0.2}>
              <p className="lead" style={{ marginTop: 36 }}>Across the Mediterranean, olive oil is the everyday fat — poured over vegetables, grains, pulses and fish. It is the constant in a way of eating that has long been admired for its balance.</p>
            </Reveal>
          </div>
          <ParallaxImage className="img blend" src={bowlImg} alt="A jug and bowl of olive oil with rosemary, salt and pepper on a wooden table" strength={6} position="30% 50%" />
        </div>
      </section>

      <section className="section on-dark health-facts" id="facts" aria-labelledby="facts-title">
        <div className="wrap">
          <div className="benefits-head">
            <Lines as="h2" className="display" lines={[<span id="facts-title" key="f">What’s</span>, <><em key="i">inside.</em></>]} />
            <Reveal className="lead-col" delay={0.2}><p className="lead muted">A few things worth knowing about what olive oil naturally contains.</p></Reveal>
          </div>
          <ul className="facts">
            {facts.map((f) => (
              <li key={f.title}>
                <Reveal className="num"><span>{f.num}</span></Reveal>
                <Reveal className="txt" delay={0.1}><h3>{f.title}</h3><p>{f.text}</p></Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-stone" aria-label="Everyday cooking">
        <div className="wrap grid-12 duo flipped">
          <ParallaxImage className="img blend" src={veggiesImg} alt="Olive oil beside tomatoes, peppers, courgette and onion" strength={4} position="50% 50%" />
          <div className="txt">
            <Reveal><span className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 28 }}>Everyday cooking</span></Reveal>
            <Lines as="h2" className="h2" lines={['Made for', <><em key="k">the kitchen.</em></>]} />
            <Reveal delay={0.2}>
              <p className="lead" style={{ margin: '36px 0 20px' }}>Olive oil is wonderfully versatile — for sautéing, roasting and baking as much as for dressing and finishing.</p>
              <p className="lead">Reach for a fruity extra virgin for salads and bread; a robust one for grilled vegetables and fish.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section on-light" aria-label="Simple ingredients">
        <div className="wrap grid-12 duo">
          <div className="txt" style={{ gridColumn: '1 / span 6' }}>
            <Reveal><span className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 28 }}>Simple ingredients</span></Reveal>
            <Lines as="h2" className="h2" lines={['Olives.', <><em key="n">Nothing else.</em></>]} />
            <Reveal delay={0.2}>
              <p className="lead" style={{ marginTop: 36 }}>Extra virgin olive oil is simply the juice of the olive — pressed, not refined. No additives, no shortcuts: just fruit, patience and a good mill.</p>
            </Reveal>
          </div>
          <ParallaxImage className="img blend" src={olivesImg} alt="A wooden bowl of green, purple and black olives with leaves" strength={4} />
        </div>
      </section>

      <section className="section on-olive tips" aria-labelledby="tips-title">
        <div className="wrap grid-12">
          <div className="l">
            <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 28 }}>Quality &amp; freshness</span></Reveal>
            <Lines as="h2" className="h2" lines={[<span id="tips-title" key="t">Choosing</span>, <><em key="w">well.</em></>]} />
          </div>
          <ol className="r">
            {tips.map(([t, p], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <li><span className="n">0{i + 1}</span><div><h3>{t}</h3><p>{p}</p></div></li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section on-light" style={{ paddingBlock: 'clamp(56px,7vw,110px)' }}>
        <div className="wrap">
          <p className="disclaimer" style={{ marginTop: 0 }}>
            Olive oil is one part of a varied, balanced diet. The information on this page is general and educational; it is not medical advice and does not describe any treatment or prevention of illness. Speak to a healthcare professional about your own needs.
          </p>
          <div style={{ marginTop: 28 }}><Link to="/story" className="arrow-link">Read our story <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <CtaBand eyebrow="Discover the oils" lines={['Good for the', <><em key="t">table.</em></>]} lead="Explore extra virgin and certified organic olive oil from Andalucía." primary={{ to: '/extra-virgin', label: 'Discover the oils' }} secondary={{ to: '/organic', label: 'Organic range' }} />
    </>
  );
}
