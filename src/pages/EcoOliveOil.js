import React from 'react';
import '../styles/SubPages.css';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ecoProducts = products.filter(p => p.category === 'eco');

const EcoOlivePage = () => {
  const { addToCart } = useCart();

  return (
    <div className="subpage">
      <h1 className="subpage__title">Organic Olive Oil</h1>
      <div className="subpage__divider"><span>✦</span></div>

      <div className="subpage__intro">
        <p>
          Organic Extra Virgin Olive Oil is one of nature's most nutritious gifts. It contains vitamins E and K
          alongside powerful antioxidants and beneficial fatty acids — with 73% monounsaturated fat (oleic acid),
          known for its anti-inflammatory properties.
          <br /><br />
          The oil's antioxidants — including oleocanthal and oleuropein — actively fight inflammation and protect
          LDL cholesterol from oxidation. Researchers have found that oleocanthal works similarly to ibuprofen,
          making this oil far more than just a cooking ingredient.
          <br /><br />
          <strong>Saturated fat: 14% · Monounsaturated fat: 73% · Vitamin E: 13% DV · Vitamin K: 7% DV</strong>
        </p>
      </div>

      <div className="subpage__products">
        {ecoProducts.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-card__img-wrap">
              <img src={p.image} alt={`${p.name} ${p.size}`} />
            </div>
            <div className="product-card__body">
              <h2 className="product-card__name">{p.name} — {p.size}</h2>
              <div className="price-table">
                <div className="price-table__label">Price per unit</div>
                {p.priceTiers.map((t, i) => (
                  <div
                    className={`price-row${i === p.priceTiers.length - 1 ? ' price-row--best' : ''}`}
                    key={i}
                  >
                    <span className="price-row__qty">{t.min}+ units</span>
                    <span className="price-row__amount">£{t.price.toFixed(2)}</span>
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

export default EcoOlivePage;
