import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';
import { useCart, type CartLine } from '../context/CartContext';
import { gbp } from '../data/products';
import { SHIPPING } from '../data/site';
import { Lines } from '../components/Motion';

type Ship = 'standard' | 'express';

const fmtCard = (v: string) => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
const fmtExp = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
};

function Summary({ lines, subtotal, shipping, edit }: { lines: CartLine[]; subtotal: number; shipping: number; edit?: () => void }) {
  return (
    <aside className="co-sum" aria-label="Order summary">
      <div className="co-sum-head">
        <h2>Your order</h2>
        {edit && <button type="button" className="arrow-link" onClick={edit}>Edit</button>}
      </div>
      <ul>
        {lines.map(({ product: p, quantity, unit, total }) => (
          <li key={p.id}>
            <div className="thumb"><img src={p.image} alt="" /><span className="q" aria-hidden="true">{quantity}</span></div>
            <div className="nm"><strong>{p.name}</strong><span>{p.size} · {quantity} × {gbp(unit)}</span></div>
            <span className="pr">{gbp(total)}</span>
          </li>
        ))}
      </ul>
      <dl className="tot">
        <div><dt>Subtotal</dt><dd>{gbp(subtotal)}</dd></div>
        <div><dt>Delivery</dt><dd>{shipping === 0 ? 'Free' : gbp(shipping)}</dd></div>
        <div className="grand"><dt>Total</dt><dd>{gbp(subtotal + shipping)}</dd></div>
      </dl>
    </aside>
  );
}

export default function Checkout() {
  const { lines, subtotal, clear, open } = useCart();
  const [ship, setShip] = useState<Ship>('standard');
  const [card, setCard] = useState('');
  const [exp, setExp] = useState('');
  const [done, setDone] = useState<{ ref: string; lines: CartLine[]; subtotal: number; shipping: number; email: string } | null>(null);

  const shipping = useMemo(() => {
    if (ship === 'express') return SHIPPING.express;
    return subtotal >= SHIPPING.freeOver ? 0 : SHIPPING.standard;
  }, [ship, subtotal]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get('email'));
    setDone({ ref: `EF-${Date.now().toString(36).toUpperCase().slice(-6)}`, lines, subtotal, shipping, email });
    clear();
    window.scrollTo({ top: 0 });
  };

  if (done) {
    return (
      <section className="co on-light">
        <div className="wrap co-done">
          <span className="eyebrow" style={{ color: 'var(--olive)' }}>Order {done.ref}</span>
          <Lines as="h1" className="display" lines={['Gracias.', <><em key="t">Thank you.</em></>]} />
          <p className="lead" style={{ margin: '32px 0 44px' }}>This was a demo order, so nothing has been charged or shipped. A real confirmation would be sent to <strong>{done.email}</strong>.</p>
          <div className="co-done-sum"><Summary lines={done.lines} subtotal={done.subtotal} shipping={done.shipping} /></div>
          <div className="hero-ctas" style={{ marginTop: 48 }}>
            <Link to="/extra-virgin" className="btn btn-ink">Continue shopping <ArrowRight size={16} /></Link>
            <Link to="/" className="btn btn-ghost" style={{ color: 'var(--ink)' }}>Back home</Link>
          </div>
        </div>
      </section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="co on-light">
        <div className="wrap co-done">
          <span className="eyebrow" style={{ color: 'var(--olive)' }}>Checkout</span>
          <Lines as="h1" className="display" lines={['Your cart', <><em key="e">is empty.</em></>]} />
          <p className="lead" style={{ margin: '32px 0 40px' }}>Add a bottle or two and come back — we’ll keep the oil warm.</p>
          <Link to="/extra-virgin" className="btn btn-ink">Explore the collection <ArrowRight size={16} /></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="co on-light" aria-labelledby="co-title">
      <div className="wrap">
        <div className="co-head">
          <span className="eyebrow" style={{ color: 'var(--olive)' }}>Checkout</span>
          <h1 className="h2" id="co-title">Almost <em>there.</em></h1>
          <p className="demo-note" role="note"><Lock size={14} aria-hidden="true" /> Demo checkout — no real payment will be processed.</p>
        </div>

        <div className="co-grid">
          <form onSubmit={submit} className="co-form">
            <fieldset>
              <legend><span>1</span> Contact</legend>
              <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
              <label className="field"><span>Phone (optional)</span><input name="phone" type="tel" autoComplete="tel" /></label>
            </fieldset>

            <fieldset>
              <legend><span>2</span> Delivery</legend>
              <div className="field-row">
                <label className="field"><span>First name</span><input name="first" required autoComplete="given-name" /></label>
                <label className="field"><span>Last name</span><input name="last" required autoComplete="family-name" /></label>
              </div>
              <label className="field"><span>Address</span><input name="address" required autoComplete="address-line1" /></label>
              <div className="field-row three">
                <label className="field"><span>City</span><input name="city" required autoComplete="address-level2" /></label>
                <label className="field"><span>Postcode</span><input name="postcode" required autoComplete="postal-code" /></label>
                <label className="field"><span>Country</span>
                  <select name="country" defaultValue="United Kingdom" autoComplete="country-name">
                    <option>United Kingdom</option><option>Ireland</option><option>Spain</option><option>France</option><option>Germany</option>
                  </select>
                </label>
              </div>

              <div className="opts" role="radiogroup" aria-label="Delivery method">
                <label className={`opt${ship === 'standard' ? ' on' : ''}`}>
                  <input type="radio" name="ship" checked={ship === 'standard'} onChange={() => setShip('standard')} />
                  <span><strong>Standard</strong><small>3–5 working days · free over {gbp(SHIPPING.freeOver)}</small></span>
                  <b>{subtotal >= SHIPPING.freeOver ? 'Free' : gbp(SHIPPING.standard)}</b>
                </label>
                <label className={`opt${ship === 'express' ? ' on' : ''}`}>
                  <input type="radio" name="ship" checked={ship === 'express'} onChange={() => setShip('express')} />
                  <span><strong>Express</strong><small>1–2 working days</small></span>
                  <b>{gbp(SHIPPING.express)}</b>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend><span>3</span> Payment</legend>
              <p className="form-note" style={{ marginTop: 0 }}>Demonstration only. Use any values — nothing is stored or sent.</p>
              <label className="field"><span>Card number</span>
                <input name="card" inputMode="numeric" autoComplete="off" placeholder="4242 4242 4242 4242" required value={card} onChange={(e) => setCard(fmtCard(e.target.value))} pattern="[0-9 ]{13,19}" />
              </label>
              <div className="field-row">
                <label className="field"><span>Expiry</span><input name="exp" inputMode="numeric" autoComplete="off" placeholder="MM / YY" required value={exp} onChange={(e) => setExp(fmtExp(e.target.value))} pattern="[0-9]{2} / [0-9]{2}" /></label>
                <label className="field"><span>CVC</span><input name="cvc" inputMode="numeric" autoComplete="off" placeholder="123" required maxLength={4} pattern="[0-9]{3,4}" /></label>
              </div>
            </fieldset>

            <button type="submit" className="btn btn-ink btn-block place">Place demo order · {gbp(subtotal + shipping)} <ArrowRight size={16} /></button>
          </form>

          <Summary lines={lines} subtotal={subtotal} shipping={shipping} edit={open} />
        </div>
      </div>
    </section>
  );
}
