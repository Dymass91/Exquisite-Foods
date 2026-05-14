import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/TopNav.css';
import ImgLogo from '../images/logonavbar.png';
import { useCart } from '../context/CartContext';

const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  const close = () => setMobileOpen(false);

  return (
    <div className="topnav">
      <div className="topnav__logo-bar">
        <NavLink exact to="/" className="topnav__brand-link" onClick={close}>
          <img src={ImgLogo} alt="Exquisite Foods" className="topnav__logo-img" />
          <div className="topnav__brand">
            <span className="topnav__brand-name">Exquisite Foods</span>
            <span className="topnav__brand-tagline">The Olive Oil Experience</span>
          </div>
        </NavLink>

        <div className="topnav__actions">
          <button className="topnav__cart-btn" onClick={toggleCart} aria-label="Open cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
          <button
            className={`topnav__toggle${mobileOpen ? ' is-open' : ''}`}
            onClick={() => setMobileOpen(s => !s)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`topnav__links${mobileOpen ? ' open' : ''}`}>
        <NavLink exact to="/"           onClick={close}>Home</NavLink>
        <NavLink to="/EcoOlive"         onClick={close}>Organic Oil</NavLink>
        <NavLink to="/ExtOlive"         onClick={close}>Extra Virgin</NavLink>
        <NavLink to="/JamsonOil"        onClick={close}>Oil &amp; Jamón</NavLink>
        <NavLink to="/HealtBenefits"    onClick={close}>Health Benefits</NavLink>
        <NavLink to="/contact"          onClick={close}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default TopNav;
