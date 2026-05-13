import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

const Footer = () => {
  const [search, setSearch] = useState('');

  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__col footer__about">
          <h3 className="footer__heading">Exquisite Foods</h3>
          <p>Premium olive oils sourced directly from the<br />white villages of Andalusia, Spain.</p>
          <p className="footer__contact">
            Company reg. 12143850<br />
            Mobile: 07375081408
          </p>
        </div>

        <div className="footer__col footer__links">
          <h3 className="footer__heading">Navigation</h3>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/EcoOlive">Organic Oil</NavLink>
            <NavLink to="/ExtOlive">Extra Virgin</NavLink>
            <NavLink to="/JamsonOil">Oil &amp; Jamón</NavLink>
            <NavLink to="/HealtBenefits">Health Benefits</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        <div className="footer__col footer__social-col">
          <h3 className="footer__heading">Follow us</h3>
          <div className="footer__social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="footer__search">
            <input
              type="text"
              placeholder="Search here for any content"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

      </div>

      <div className="footer__map">
        <iframe
          title="Exquisite Foods location"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=36.880606,-5.408098&key=AIzaSyBj7ZA7DO2_mnpYz3SYZEeqAC56E9b7uyk"
        />
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Exquisite Foods Distributor Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
