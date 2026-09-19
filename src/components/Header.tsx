import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const shop = [
  { to: '/organic', label: 'Organic Olive Oil' },
  { to: '/extra-virgin', label: 'Extra Virgin' },
  { to: '/oil-jamon', label: 'Oil & Jamón' },
];
const links = [
  { to: '/story', label: 'Our Story' },
  { to: '/health', label: 'Health' },
  { to: '/oil-jamon', label: 'Oil & Jamón' },
  { to: '/contact', label: 'Contact' },
];
const mobileLinks = [
  { to: '/extra-virgin', label: 'Extra Virgin' },
  { to: '/organic', label: 'Organic' },
  ...links,
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { totalItems, open } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { setMenu(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle('no-scroll', menu);
    return () => document.body.classList.remove('no-scroll');
  }, [menu]);

  return (
    <>
      <header
        className={`site-header${scrolled && !menu ? ' is-solid' : ''}`}
        style={{ zIndex: menu ? 70 : undefined }}
      >
        <div className="wrap">
          <Link to="/" className="logo" aria-label="Exquisite Foods — home">Exquisite <i>Foods</i></Link>

          <nav className="nav-desktop" aria-label="Primary">
            <div className="nav-item">
              <Link to="/extra-virgin" className="nav-link" aria-haspopup="true">Shop</Link>
              <div className="dropdown">
                {shop.map((s) => (
                  <Link key={s.to} to={s.to}>{s.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>
                ))}
              </div>
            </div>
            {links.map((l) => (
              <NavLink key={l.to + l.label} to={l.to} className="nav-link">{l.label}</NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button className="icon-btn" onClick={open} aria-label={`Open cart, ${totalItems} item${totalItems === 1 ? '' : 's'}`}>
              <ShoppingBag size={22} strokeWidth={1.4} />
              {totalItems > 0 && <span className="cart-count" aria-hidden="true">{totalItems}</span>}
            </button>
            <button className="icon-btn menu-btn" onClick={() => setMenu((m) => !m)} aria-expanded={menu} aria-label={menu ? 'Close menu' : 'Open menu'}>
              {menu ? <X size={24} strokeWidth={1.4} /> : <Menu size={24} strokeWidth={1.4} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {mobileLinks.map((l, i) => (
                <motion.li
                  key={l.to + l.label}
                  initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={l.to}>{l.label}<small>0{i + 1}</small></Link>
                </motion.li>
              ))}
            </ul>
            <div className="mn-foot"><span>Andalusia, Spain</span><span>hello@exquisitefoods.co.uk</span></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
