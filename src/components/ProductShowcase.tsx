import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { gbp, getUnitPrice, type Product } from '../data/products';
import QuantitySelector from './QuantitySelector';
import VolumePricing from './VolumePricing';
import { Lines, Reveal } from './Motion';

interface Props {
  product: Product;
  headline: ReactNode[];
  notes: { label: string; text: string }[];
  to: string;
}

/** Dark, perfume-style product presentation. */
export default function ProductShowcase({ product, headline, notes, to }: Props) {
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const unit = getUnitPrice(product.priceTiers, qty);
  const lowest = product.priceTiers[product.priceTiers.length - 1].price;

  return (
    <section className="section feature on-dark" aria-labelledby="feature-title">
      <div className="wrap">
        <div className="grid-12">
          <Reveal className="stage">
            <span className="ghost" aria-hidden="true">{product.size.replace(' ', '')}</span>
            <div className="bottle">
              <img src={product.image} alt={`${product.name}, ${product.size} bottle`} />
            </div>
          </Reveal>

          <div className="details">
            <Reveal><span className="eyebrow">Signature bottle</span></Reveal>
            <Lines as="h2" className="display" lines={headline} />
            <Reveal delay={0.2}><p className="size">{product.size}</p></Reveal>

            <Reveal delay={0.25}>
              <dl className="notes">
                {notes.map((n) => (
                  <div key={n.label}><dt>{n.label}</dt><dd>{n.text}</dd></div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="buy-row">
                <span className="price" aria-live="polite">{gbp(unit)}<small>per bottle</small></span>
              </div>
              <div className="buy-actions">
                <QuantitySelector value={qty} onChange={setQty} label={`Quantity, ${product.name} ${product.size}`} />
                <button className="btn btn-gold" onClick={() => add(product.id, qty)}>
                  Add to cart <span style={{ opacity: 0.6 }}>· {gbp(unit * qty)}</span> <ArrowRight size={16} />
                </button>
              </div>
              <div style={{ marginTop: 28 }}>
                <VolumePricing tiers={product.priceTiers} quantity={qty} />
              </div>
              <p className="muted" style={{ fontSize: '.8rem', marginTop: 6 }}>Trade prices fall to {gbp(lowest)} per bottle.</p>
              <Link to={to} className="arrow-link">Discover the oil <ArrowUpRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
