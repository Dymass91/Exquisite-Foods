import React from 'react';
import '../styles/SubPages.css';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const extProducts = products.filter(p => p.category === 'ext');

const ExtOlivePage = () => {
  const { addToCart } = useCart();

  return (
    <div className="subpage">
      <h1 className="subpage__title">Extra Virgin Olive Oil</h1>
      <div className="subpage__divider"><span>✦</span></div>

      <div className="subpage__intro">
        <p>
          Extra Virgin Olive Oil is the crown jewel of culinary fats — a cornerstone of the Mediterranean diet and
          a staple of the world's healthiest populations. Unlike refined oils, extra virgin is extracted using only
          natural methods and standardised for purity, taste and aroma.
          <br /><br />
          Its distinctive flavour comes from a high concentration of phenolic antioxidants — the very compounds
          responsible for its remarkable health benefits, including a significantly reduced risk of heart disease.
          Olives are cold-pressed and centrifuged to preserve every drop of nutritional value.
          <br /><br />
          <strong>Truly extra virgin olive oil stands apart in taste, smell and in its protective properties for your health.</strong>
        </p>
      </div>

      <div className="subpage__products">
        {extProducts.map((p) => (
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

export default ExtOlivePage;
