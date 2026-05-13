import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

import olivesWelcome from '../images/oliwki.jpg';
import bottleImg from '../images/Organic750ml.jpeg';
import product1 from '../images/productimg.jpg';
import product2 from '../images/product.jpg';
import product3 from '../images/productimg.webp';
import benefitsBg from '../images/benefitsimg.jpg';

const HomePage = () => (
  <div className="home">

    {/* Welcome card */}
    <div className="home__welcome-wrap">
      <div className="home__welcome-card">
        <div className="home__welcome-left">
          <h2 className="home__welcome-title">Welcome</h2>
          <img src={olivesWelcome} alt="Fresh olives" className="home__welcome-img" />
          <h3 className="home__welcome-subtitle">Premium olive oil</h3>
          <p>
            Our oils come from the heart of Andalusia — produced in white villages
            at the edge of Sierra de Lijar, where the "Lechin of Seville" and
            "Manzanillo" varieties yield some of the world's finest oils.
          </p>
          <h3 className="home__welcome-subtitle">More about us</h3>
          <p>
            We work directly with olive growers from Zahara de la Sierra, Gastor
            and Grazalema — covering nearly 6,000 hectares — to bring you
            exceptional quality, certified organic and extra virgin olive oils.
          </p>
        </div>

        <div className="home__natural">
          <div className="home__natural-text">
            <p>
              Enjoy<br />
              the healthy<br />
              gift from<br />
              nature
            </p>
          </div>
          <img src={bottleImg} alt="Olive oil bottle" className="home__natural-img" />
        </div>
      </div>
    </div>

    {/* Dark benefits banner */}
    <div className="home__dark-banner" style={{ backgroundImage: `url(${benefitsBg})` }}>
      <div className="home__dark-banner-overlay">
        <h2 className="home__dark-banner-title">Discover the health benefits of olive oil</h2>
        <p className="home__dark-banner-text">
          Rich in oleic acid, vitamin E and powerful antioxidants — extra virgin olive oil
          is one of nature's most potent gifts. It supports heart health, reduces inflammation
          and has been a cornerstone of the Mediterranean diet for centuries.
        </p>
        <Link to="/HealtBenefits" className="home__dark-banner-btn">Learn more</Link>
      </div>
    </div>

    {/* Products grid */}
    <div className="home__products">
      <h2 className="home__products-title">Products</h2>
      <div className="home__products-grid">
        <Link to="/EcoOlive" className="home__product-card">
          <img src={product1} alt="Organic Extra Virgin Olive Oil" />
          <p>Our certified organic extra virgin olive oil — available in 250ml, 500ml, 750ml and 5L formats for every need.</p>
        </Link>
        <Link to="/ExtOlive" className="home__product-card">
          <img src={product2} alt="Extra Virgin Olive Oil 5L" />
          <p>Premium extra virgin olive oil in bulk 5L format — ideal for families and professionals who demand quality.</p>
        </Link>
        <Link to="/JamsonOil" className="home__product-card">
          <img src={product3} alt="Oil and Jamon products" />
          <p>Exclusive Oil &amp; Jamón collection — a unique pairing of Iberian ham and our finest olive oils.</p>
        </Link>
      </div>
    </div>

  </div>
);

export default HomePage;
