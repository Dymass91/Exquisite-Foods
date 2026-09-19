import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { gbp, nextTier } from '../data/products';
import QuantitySelector from './QuantitySelector';

export default function CartDrawer() {
  const { isOpen, close, lines, subtotal, totalItems, setQty, remove } = useCart();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('no-scroll');
    closeRef.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', esc);
    return () => { document.body.classList.remove('no-scroll'); window.removeEventListener('keydown', esc); };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="drawer-backdrop" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} />
          <motion.aside
            className="drawer" role="dialog" aria-modal="true" aria-label="Shopping cart"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="drawer-head">
              <h2>Your cart<span>{totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'}</span></h2>
              <button ref={closeRef} className="icon-btn" onClick={close} aria-label="Close cart"><X size={24} strokeWidth={1.4} /></button>
            </div>

            <div className="drawer-body">
              {lines.length === 0 ? (
                <div className="drawer-empty">
                  <p>Nothing here <em className="script">yet.</em></p>
                  <Link to="/extra-virgin" className="arrow-link" onClick={close}>Explore the collection <ArrowRight size={16} /></Link>
                </div>
              ) : (
                <ul>
                  <AnimatePresence initial={false}>
                    {lines.map(({ product: p, quantity, unit, total }) => {
                      const nt = nextTier(p.priceTiers, quantity);
                      return (
                        <motion.li key={p.id} layout className="d-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.35 }}>
                          <div className="thumb"><img src={p.image} alt={`${p.name} ${p.size}`} /></div>
                          <div>
                            <h3>{p.name}</h3>
                            <p className="meta">{p.size} · {gbp(unit)} each</p>
                            <div className="d-row">
                              <QuantitySelector small value={quantity} onChange={(n) => setQty(p.id, n)} label={`Quantity for ${p.name} ${p.size}`} />
                              <span className="d-total">{gbp(total)}</span>
                            </div>
                            {nt && <p className="d-tier">Add {nt.min - quantity} more for {gbp(nt.price)} each</p>}
                            <button className="d-remove" onClick={() => remove(p.id)}><Trash2 size={13} /> Remove</button>
                          </div>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="drawer-foot">
                <div className="d-sub"><span>Subtotal</span><strong>{gbp(subtotal)}</strong></div>
                <small>Delivery calculated at checkout.</small>
                <Link to="/checkout" className="btn btn-ink btn-block" onClick={close}>Checkout <ArrowRight size={16} /></Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
