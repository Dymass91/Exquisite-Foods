import React from 'react';
import '../styles/SubPages.css';
import '../styles/JamsonPage.css';

import marmelada from '../Jamon Files/Imagen Crema Dulce  Mermelada 100 gr.jpg';
import bottle99 from '../Jamon Files/Imagen botella 99 ml.jpg';
import bottle250 from '../Jamon Files/Botella 250 ml. condimento oiljamon.jpg';
import JamonLogo from '../Jamon Files/LOGO OIL JAMON - TRANS.png';

const products = [
  {
    img: marmelada,
    name: 'Iberian Ham Mermelade — 220 g',
    prices: [
      { qty: '1', amount: '£5.50' },
      { qty: '15', amount: '£73.50 (£4.90 ea)', best: true },
    ],
  },
  {
    img: bottle99,
    name: 'Iberian Ham Extra Virgin Olive Oil — 100 ml',
    prices: [
      { qty: '1', amount: '£3.60' },
      { qty: '12', amount: '£36.00 (£3.00 ea)', best: true },
    ],
  },
  {
    img: bottle250,
    name: 'Iberian Ham Gourmet Bottle — 250 ml',
    prices: [
      { qty: '1', amount: '£7.00' },
      { qty: '12', amount: '£78.00 (£6.50 ea)', best: true },
    ],
  },
];

const JamsonPage = () => (
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
      {products.map((p, i) => (
        <div className="product-card" key={i}>
          <div className="product-card__img-wrap">
            <img src={p.img} alt={p.name} />
          </div>
          <div className="product-card__body">
            <h2 className="product-card__name">{p.name}</h2>
            <div className="price-table">
              <div className="price-table__label">Price</div>
              {p.prices.map((r, j) => (
                <div className={`price-row${r.best ? ' price-row--best' : ''}`} key={j}>
                  <span className="price-row__qty">{r.qty} unit{r.qty !== '1' ? 's' : ''}</span>
                  <span className="price-row__amount">{r.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <p className="subpage__vat">* All prices are inclusive of VAT</p>
  </div>
);

export default JamsonPage;
