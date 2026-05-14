import React from 'react';
import '../styles/SubPages.css';
import '../styles/JamsonPage.css';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

import JamonLogo from '../Jamon Files/LOGO OIL JAMON - TRANS.png';

const jamonProducts = products.filter(p => p.category === 'jamon');

const JamsonPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="subpage">
      <div className="jamon__logo-wrap">
        <img src={JamonLogo} alt="Oil & Jamón" className="jamon__logo" />
      </div>

      <h1 className="subpage__title">Oil &amp; Jamón</h1>
      <div className="subpage__divider"><span>✦</span></div>

      <div className="subpage__intro">
        <p>
          <strong>Oil &amp; Jamón</strong> is a brand born in January 2017 in Seville, Andalusia — a fusion of
          two icons of Iberian gastronomy: Extra Virgin Olive Oil and Iberian Ham.
          <br /><br />
          After months of testing using a completely natural process, we merged these two exceptional ingredients
          into a unique seasoning condiment that brings flavour and aroma to any dish — from grilled vegetables
          and pasta to seafood, poultry, and legumes.
          <br /><br />
          A 250 ml bottle of Oil &amp; Jamón can flavour <strong>up to 112 dishes</strong> — just one teaspoon
          per plate, at a cost of only <strong>€0.10 per portion</strong>. Remember: Oil &amp; Jamón is not for
          cooking. It is added after cooking to enrich the flavour of the finished dish.
        </p>
      </div>

      <div className="subpage__products">
        {jamonProducts.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-card__img-wrap">
              <img src={p.image} alt={`${p.name} ${p.size}`} />
            </div>
            <div className="product-card__body">
              <h2 className="product-card__name">{p.name} — {p.size}</h2>
              <div className="price-table">
                <div className="price-table__label">Price</div>
                {p.priceTiers.map((t, i) => (
                  <div
                    className={`price-row${i === p.priceTiers.length - 1 ? ' price-row--best' : ''}`}
                    key={i}
                  >
                    <span className="price-row__qty">{t.min}+ unit{t.min > 1 ? 's' : ''}</span>
                    <span className="price-row__amount">£{t.price.toFixed(2)} ea</span>
                  </div>
                ))}
              </div>
              <button className="add-to-cart-btn" onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="subpage__vat">* All prices are inclusive of VAT</p>
    </div>
  );
};

export default JamsonPage;
