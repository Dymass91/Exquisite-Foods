import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Instagram, Facebook, WhatsApp } from './Icons';

export default function Footer() {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); };
  return (
    <footer className="site-footer on-dark">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link to="/" className="logo">Exquisite <i>Foods</i></Link>
            <p>Exceptional olive oils and Iberian delicacies, sourced from the white villages of southern Spain.</p>
          </div>
          <nav className="foot-col" aria-label="Shop">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/organic">Organic Olive Oil</Link></li>
              <li><Link to="/extra-virgin">Extra Virgin</Link></li>
              <li><Link to="/oil-jamon">Oil &amp; Jamón</Link></li>
            </ul>
          </nav>
          <nav className="foot-col" aria-label="Discover">
            <h4>Discover</h4>
            <ul>
              <li><Link to="/story">Our Story</Link></li>
              <li><Link to="/health">Health</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="news">
            <h4>Letters from the grove</h4>
            {done ? <p className="ok" role="status">Gracias — you’re on the list.</p> : (
              <form onSubmit={submit}>
                <label htmlFor="news-email" style={{ position: 'absolute', left: -9999 }}>Email address</label>
                <input id="news-email" type="email" required placeholder="Your email address" autoComplete="email" />
                <button type="submit" aria-label="Subscribe"><ArrowRight size={20} /></button>
              </form>
            )}
          </div>
        </div>

        <div className="foot-mid">
          <span className="loc"><MapPin size={16} /> Andalusia, Spain</span>
          <div className="socials">
            <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
            <a href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
            <a href="https://wa.me/" aria-label="WhatsApp"><WhatsApp /></a>
          </div>
        </div>
      </div>
      <div className="foot-word" aria-hidden="true">EXQUISITE <i>FOODS</i></div>
      <div className="wrap foot-legal"><span>© 2026 Exquisite Foods. All rights reserved.</span><span>Portfolio concept · demo store</span></div>
    </footer>
  );
}
