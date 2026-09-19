import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categoryCopy, gbp, getUnitPrice, unitLabel, type Product } from '../data/products';
import QuantitySelector from './QuantitySelector';
import VolumePricing from './VolumePricing';
import { Reveal } from './Motion';

interface Props { product: Product; index: number; flip?: boolean }

/** Catalogue-style product presentation: one object, one row. */
export default function ProductRow({ product: p, index, flip }: Props) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  const copy = categoryCopy[p.category];
  const unit = getUnitPrice(p.priceTiers, qty);
  const warm = p.category === 'jamon';
  const href = `/product/${p.id}`;

  const onAdd = () => {
    add(p.id, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className={`prow${flip ? ' flip' : ''}`} aria-label={`${p.name} ${p.size}`}>
      <Reveal className="media">
        <Link to={href} className={`obj${warm ? ' warm' : ''}`} aria-label={`View ${p.name}, ${p.size}`}>
          <span className="idx" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <img src={p.image} alt={`${p.name}, ${p.size}`} loading="lazy" decoding="async" />
        </Link>
      </Reveal>

      <Reveal className="body" delay={0.12}>
        <p className="n">{copy.label.toUpperCase()}</p>
        <h3><Link to={href}>{p.name}</Link></h3>
        <p className="sz">{p.size}</p>
        <dl className="mini">
          <div><dt>Origin</dt><dd>{copy.origin}</dd></div>
          <div><dt>Tasting</dt><dd>{copy.tasting}</dd></div>
        </dl>
        <p className="price">{gbp(unit)}<small>{unitLabel(p)}</small></p>
        <div className="buy-actions">
          <QuantitySelector value={qty} onChange={setQty} label={`Quantity, ${p.name} ${p.size}`} />
          <button className="btn btn-ink" onClick={onAdd} aria-live="polite">
            {added ? <>Added <Check size={16} /></> : <>Add to cart <ArrowRight size={16} /></>}
          </button>
        </div>
        <div style={{ marginTop: 26 }}><VolumePricing tiers={p.priceTiers} quantity={qty} /></div>
        <Link to={href} className="arrow-link" style={{ marginTop: 22 }}>Product details <ArrowUpRight size={16} /></Link>
      </Reveal>
    </article>
  );
}
