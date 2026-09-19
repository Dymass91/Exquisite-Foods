import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categoryCopy, gbp, getUnitPrice, products, productsIn, unitLabel } from '../data/products';
import QuantitySelector from '../components/QuantitySelector';
import VolumePricing from '../components/VolumePricing';
import CtaBand from '../components/CtaBand';
import { Reveal } from '../components/Motion';
import NotFound from './NotFound';

export default function ProductPage() {
  const { id } = useParams();
  const p = products.find((x) => x.id === id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  useEffect(() => { setQty(1); setAdded(false); }, [id]);
  if (!p) return <NotFound />;

  const copy = categoryCopy[p.category];
  const unit = getUnitPrice(p.priceTiers, qty);
  const warm = p.category === 'jamon';
  const others = productsIn(p.category).filter((x) => x.id !== p.id);

  const onAdd = () => {
    add(p.id, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      <section className={`pdp ${warm ? 'is-warm' : 'on-dark'}`}>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to={copy.path}>{copy.label}</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{p.size}</span>
          </nav>
          <div className="grid-12">
            <div className="media">
              <div className={`obj${warm ? ' warm' : ''}`}>
                <img src={p.image} alt={`${p.name}, ${p.size}`} decoding="async" />
              </div>
            </div>

            <div className="info">
              <Reveal><span className="eyebrow" style={{ color: warm ? '#f0c987' : 'var(--gold-soft)' }}>{copy.label}</span></Reveal>
              <Reveal delay={0.05}><h1 className="h2 pdp-title">{p.name}</h1></Reveal>
              <p className="size">{p.size}</p>
              <p className="lead" style={{ marginTop: 26, opacity: 0.85 }}>{copy.blurb}</p>

              <dl className="notes">
                <div><dt>Origin</dt><dd>{copy.origin}</dd></div>
                <div><dt>Tasting</dt><dd>{copy.tasting}</dd></div>
                <div><dt>Pairs with</dt><dd>{copy.pairing}</dd></div>
              </dl>

              <p className="price" aria-live="polite">{gbp(unit)}<small>{unitLabel(p)}</small></p>
              <div className="buy-actions">
                <QuantitySelector value={qty} onChange={setQty} label={`Quantity, ${p.name} ${p.size}`} />
                <button className="btn btn-gold" onClick={onAdd}>
                  {added ? <>Added to cart <Check size={16} /></> : <>Add to cart <span style={{ opacity: 0.6 }}>· {gbp(unit * qty)}</span> <ArrowRight size={16} /></>}
                </button>
              </div>

              <div style={{ marginTop: 34 }}>
                <VolumePricing tiers={p.priceTiers} quantity={qty} />
                <details className="volume">
                  <summary>Storage &amp; care <Plus size={16} /></summary>
                  <p>{copy.storage}</p>
                </details>
                <details className="volume">
                  <summary>Delivery <Plus size={16} /></summary>
                  <p>Shipped from Andalucía. Delivery costs and timing are confirmed at checkout; trade orders are quoted on request.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section on-light" style={{ paddingBlock: 'clamp(72px,9vw,140px)' }} aria-labelledby="sizes-title">
          <div className="wrap">
            <Reveal><h2 className="h3" id="sizes-title" style={{ marginBottom: 36 }}>Also available in</h2></Reveal>
            <ul className="places">
              {others.map((o) => (
                <li key={o.id}>
                  <Link to={`/product/${o.id}`} className="place-link">
                    <b>{o.name} — <em>{o.size}</em></b>
                    <span>from {gbp(o.priceTiers[o.priceTiers.length - 1].price)} <ArrowUpRight size={14} aria-hidden="true" /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand tone="olive" eyebrow="Explore" lines={['Keep', <><em key="e">discovering.</em></>]} primary={{ to: copy.path, label: `All ${copy.label}` }} secondary={{ to: '/story', label: 'Our story' }} />
    </>
  );
}

