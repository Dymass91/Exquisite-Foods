import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { Lines, Reveal, ParallaxImage } from '../components/Motion';

import heroImg from '../images/header2.jpg';
import townImg from '../images/town.jpg';
import harvestImg from '../images/header3.jpeg';
import groveImg from '../images/header4.jpg';
import labelImg from '../images/73361237_435025560537963_3271124131461988352_n.jpg';
import cellarImg from '../images/MainImg2.jpg';

const principles = [
  { n: '01', t: 'Hand-picked', p: 'Olives are gathered by hand at first colour change, so fruit arrives at the mill unbruised and full of life.' },
  { n: '02', t: 'Pressed within hours', p: 'The clock starts at harvest. Pressed quickly and by mechanical means only, the oil keeps its freshness.' },
  { n: '03', t: 'Small growers', p: 'We work with a handful of families, not factories — people who can tell you the name of every grove.' },
  { n: '04', t: 'Traditional methods', p: 'Natural fertiliser, no herbicides, no shortcuts. Quality over quantity, every single season.' },
];

export default function Story() {
  return (
    <>
      <PageHero
        eyebrow="Our story" lines={['Rooted in', <><em key="a">Andalucía.</em></>]}
        lead="A distributor of small-grove olive oil, guided by one idea: good food begins where it grows."
        image={heroImg} alt="Aerial view of olive groves rolling across the Andalusian hills" position="50% 45%"
      >
        <a href="#begin" className="btn btn-ghost">Begin the story</a>
      </PageHero>

      <section className="section on-light" id="begin" aria-label="Introduction">
        <div className="wrap grid-12 story-intro">
          <div className="l">
            <Reveal><span className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 28 }}>Chapter one</span></Reveal>
            <Lines as="h2" className="display" lines={['A long', <>friendship <em key="w">with</em></>, <>the olive.</>]} />
          </div>
          <div className="r">
            <Reveal delay={0.1}>
              <p className="lead">In Andalucía the olive is not a crop so much as a companion. It shapes the hillsides, the calendar and the table — and it has done for centuries.</p>
              <p className="lead" style={{ marginTop: '1.1em' }}>Exquisite Foods began with a simple wish: to bring the oil from the groves we love to kitchens far from them, without losing anything on the way.</p>
            </Reveal>
            <ParallaxImage className="town" src={townImg} alt="A white village nestled among olive groves in the Andalusian sierra" strength={5} />
            <p className="caption">Sierra de Cádiz</p>
          </div>
        </div>
      </section>

      <section className="section on-stone origin" aria-label="Origin">
        <div className="wrap">
          <div className="top">
            <Lines as="h2" className="h2" lines={['Where the', <>sierra <em key="m">meets</em></>, 'the sun.']} />
            <Reveal className="coords" delay={0.3}><small>Origin</small>36°52′ N<br />5°24′ W</Reveal>
          </div>
          <div className="body">
            <ParallaxImage className="land" src={groveImg} alt="Rows of olive trees in dappled afternoon light" strength={7} />
            <div className="side">
              <Reveal>
                <ul className="meta-list">
                  <li><span>Region</span>Andalucía</li>
                  <li><span>Province</span>Cádiz</li>
                  <li><span>Varieties</span>Lechín · Manzanilla</li>
                  <li><span>Harvest</span>Autumn – winter</li>
                </ul>
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

      <section className="section on-dark craft" aria-labelledby="craft-title">
        <div className="wrap grid-12">
          <div className="pics">
            <ParallaxImage className="big" src={harvestImg} alt="A tub of freshly picked green olives" strength={6} />
            <Reveal className="note" delay={0.2}>
              <div className="frame"><img src={labelImg} alt="Printed label describing organic hand-picked Andalusian olive oil" loading="lazy" /></div>
              <p className="caption">The label on every bottle</p>
            </Reveal>
          </div>
          <div className="txt">
            <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 28 }}>The craft</span></Reveal>
            <Lines as="h2" className="h2" lines={['Slow work,', <><em key="g">done well.</em></>]} />
            <ol className="principles">
              {principles.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.06}>
                  <li><span className="n">{s.n}</span><div><h3>{s.t}</h3><p>{s.p}</p></div></li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="manifesto on-olive" aria-label="Philosophy">
        <div className="wrap">
          <Reveal><span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Our philosophy</span></Reveal>
          <Lines as="h2" className="display" lines={['Good food begins', <>with good <em key="i">ingredients.</em></>]} />
          <Reveal delay={0.2}><p className="lead muted">Everything else — the bottle, the label, the story — is only there to honour that.</p></Reveal>
        </div>
      </section>

      <section className="band" aria-label="Photograph">
        <ParallaxImage className="band-img" src={cellarImg} alt="Golden olive oil in glass bottles with olives on a wooden table" strength={9} position="50% 55%" />
      </section>

      <CtaBand
        eyebrow="From our groves to your table" lines={['Taste it for', <><em key="y">yourself.</em></>]}
        lead="Start with the collection — or tell us about your kitchen and we’ll suggest a place to begin."
        primary={{ to: '/extra-virgin', label: 'Shop the collection' }} secondary={{ to: '/contact', label: 'Get in touch' }}
      />
    </>
  );
}
