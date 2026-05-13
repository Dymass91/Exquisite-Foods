import React from 'react';
import '../styles/SubPages.css';

import img250 from '../images/Extravirginoil 250ml.jpg';
import img500 from '../images/Extravirginoilsmall.jpg';
import img750 from '../images/Organic500ml.jpeg';
import img5l from '../images/olej5l.jpg';

const products = [
  {
    img: img250,
    name: 'Organic Extra Virgin Olive Oil — 250 ml',
    prices: [
      { qty: '1+', amount: '£4.00' },
      { qty: '15+', amount: '£3.70' },
      { qty: '100+', amount: '£3.50' },
      { qty: '200+', amount: '£3.00' },
      { qty: '500+', amount: '£2.50', best: true },
    ],
  },
  {
    img: img500,
    name: 'Organic Extra Virgin Olive Oil — 500 ml',
    prices: [
      { qty: '1+', amount: '£6.00' },
      { qty: '15+', amount: '£5.50' },
      { qty: '100+', amount: '£5.00' },
      { qty: '200+', amount: '£4.50' },
      { qty: '350+', amount: '£4.00' },
      { qty: '500+', amount: '£3.50', best: true },
    ],
  },
  {
    img: img750,
    name: 'Organic Extra Virgin Olive Oil — 750 ml',
    prices: [
      { qty: '1+', amount: '£7.00' },
      { qty: '15+', amount: '£6.50' },
      { qty: '100+', amount: '£6.00' },
      { qty: '200+', amount: '£5.50' },
      { qty: '350+', amount: '£5.00' },
      { qty: '500+', amount: '£4.50', best: true },
    ],
  },
  {
    img: img5l,
    name: 'Organic Extra Virgin Olive Oil — 5 Litres',
    prices: [
      { qty: '1+', amount: '£35.00' },
      { qty: '4+', amount: '£33.00' },
      { qty: '10+', amount: '£30.00' },
      { qty: '20+', amount: '£27.00' },
      { qty: '50+', amount: '£25.00' },
      { qty: '100+', amount: '£23.00', best: true },
    ],
  },
];

const EcoOlivePage = () => (
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
      {products.map((p, i) => (
        <div className="product-card" key={i}>
          <div className="product-card__img-wrap">
            <img src={p.img} alt={p.name} />
          </div>
          <div className="product-card__body">
            <h2 className="product-card__name">{p.name}</h2>
            <div className="price-table">
              <div className="price-table__label">Price per unit</div>
              {p.prices.map((r, j) => (
                <div className={`price-row${r.best ? ' price-row--best' : ''}`} key={j}>
                  <span className="price-row__qty">{r.qty} units</span>
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

export default EcoOlivePage;
