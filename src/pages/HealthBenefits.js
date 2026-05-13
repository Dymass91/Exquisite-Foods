import React from 'react';
import '../styles/BenefitsPage.css';
import benefitsimg from '../images/benefitsimg.jpg';

const benefits = [
  { icon: '♥', title: 'Heart Health', text: 'Oleic acid increases HDL ("good") cholesterol and reduces LDL deposition in arteries, lowering the risk of arterial thrombosis and infarction.' },
  { icon: '🛡', title: 'Anti-inflammatory', text: 'Oleocanthal, a key antioxidant, works similarly to ibuprofen — actively fighting chronic low-level inflammation linked to heart disease and diabetes.' },
  { icon: '⚡', title: 'Rich in Antioxidants', text: 'Oleuropein and other antioxidants protect cells from oxidative damage, reducing the risk of cancer and supporting the immune system.' },
  { icon: '🌿', title: 'Vitamins & Fatty Acids', text: 'One tablespoon delivers 13% daily Vitamin E, 7% Vitamin K, and 73% monounsaturated fat — the gold standard among dietary fats.' },
];

const BenefitsPage = () => (
  <div className="benefits-page">

    <div className="benefits-page__hero">
      <img src={benefitsimg} alt="Health benefits of olive oil" className="benefits-page__hero-img" />
      <div className="benefits-page__hero-overlay">
        <h1 className="benefits-page__hero-title">Health Benefits</h1>
        <p className="benefits-page__hero-sub">
          Nature's most powerful food — backed by centuries of Mediterranean wisdom
        </p>
      </div>
    </div>

    <div className="benefits-page__content">

      <div className="benefits-page__intro">
        <p>
          Olive oil is the key ingredient of the Mediterranean diet and one of the most researched foods in
          nutritional science. Composed mainly of <strong>oleic acid</strong> (≈75% of total fat), extra virgin
          olive oil is also rich in <strong>Vitamin E</strong>, <strong>beta-carotene</strong>, and a broad
          spectrum of antioxidants.
        </p>
        <p>
          Unlike any other vegetable oil, virgin olive oil can be obtained solely by physical processes — it is
          the pure juice of the olive, with no chemical treatment. This makes it uniquely suited to preserve all
          of the beneficial compounds the olive tree produces.
        </p>
        <p>
          Regular consumption helps prevent <strong>diabetes</strong>, <strong>breast and colon cancer</strong>,
          and <strong>cardiovascular diseases</strong> — making it far more than just a cooking fat.
        </p>
      </div>

      <div className="benefits-page__cards">
        {benefits.map((b, i) => (
          <div className="benefit-card" key={i}>
            <div className="benefit-card__icon">{b.icon}</div>
            <h3 className="benefit-card__title">{b.title}</h3>
            <p className="benefit-card__text">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="benefits-page__quote">
        <blockquote>
          "Let food be thy medicine and medicine be thy food."
          <cite>— Hippocrates</cite>
        </blockquote>
      </div>

    </div>
  </div>
);

export default BenefitsPage;
