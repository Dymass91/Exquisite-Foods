import React from 'react';
import '../styles/SubPages.css';

import img500 from '../images/Extravirginoilsmall.jpg';
import img750 from '../images/Organic500ml.jpeg';
import img5l from '../images/olej5l.jpg';

const products = [
  {
    img: img500,
    name: 'Extra Virgin Olive Oil — 500 ml',
    prices: [
      { qty: '1+', amount: '£5.00' },
      { qty: '15+', amount: '£4.50' },
      { qty: '100+', amount: '£4.00' },
      { qty: '200+', amount: '£3.50' },
      { qty: '350+', amount: '£3.00' },
      { qty: '500+', amount: '£2.70', best: true },
    ],
  },
  {
    img: img750,
    name: 'Extra Virgin Olive Oil — 750 ml',
    prices: [
      { qty: '1+', amount: '£6.00' },
      { qty: '15+', amount: '£5.50' },
      { qty: '100+', amount: '£5.00' },
      { qty: '200+', amount: '£4.50' },
      { qty: '350+', amount: '£4.00' },
      { qty: '500+', amount: '£3.70', best: true },
    ],
  },
  {
    img: img5l,
    name: 'Extra Virgin Olive Oil — 5 Litres',
    prices: [
      { qty: '1+', amount: '£30.00' },
      { qty: '4+', amount: '£28.00' },
      { qty: '10+', amount: '£25.00' },
      { qty: '20+', amount: '£23.00' },
      { qty: '50+', amount: '£21.00' },
      { qty: '100+', amount: '£19.00', best: true },
    ],
  },
];

const ExtOlivePage = () => (
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

export default ExtOlivePage;
