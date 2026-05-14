import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getUnitPrice } from '../data/products';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '', email: '', address: '',
    card: '', expiry: '', cvv: '',
  });
  const [success, setSuccess] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  if (success) {
    return (
      <div className="checkout-page">
        <div className="checkout-success">
          <div className="checkout-success__icon">✓</div>
          <h2 className="checkout-success__title">Order Confirmed!</h2>
          <p className="checkout-success__msg">
            Thank you for your order. We will be in touch shortly with delivery details.
          </p>
          <Link to="/" className="checkout-btn checkout-btn--back">Return to Home</Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-success">
          <p className="checkout-success__msg">Your cart is empty.</p>
          <Link to="/EcoOlive" className="checkout-btn checkout-btn--back">Browse Products</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setSuccess(true);
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-page__title">Checkout</h1>
      <div className="subpage__divider"><span>✦</span></div>

      <div className="checkout-layout">

        {/* ── Order summary ── */}
        <div className="checkout-summary">
          <h2 className="checkout-section-title">Order Summary</h2>
          <div className="checkout-summary__items">
            {cartItems.map(({ product, quantity }) => {
              const unitPrice = getUnitPrice(product.priceTiers, quantity);
              return (
                <div className="checkout-summary__row" key={product.id}>
                  <img src={product.image} alt={product.name} className="checkout-summary__img" />
                  <div className="checkout-summary__info">
                    <p className="checkout-summary__name">{product.name}</p>
                    <p className="checkout-summary__size">{product.size}</p>
                    <p className="checkout-summary__qty">
                      {quantity} × £{unitPrice.toFixed(2)}
                    </p>
                  </div>
                  <span className="checkout-summary__line">
                    £{(unitPrice * quantity).toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="checkout-summary__total">
            <span>Total</span>
            <span>£{totalPrice.toFixed(2)}</span>
          </div>
          <p className="checkout-summary__vat">* All prices inclusive of VAT</p>
        </div>

        {/* ── Form ── */}
        <form className="checkout-form" onSubmit={handleSubmit}>

          <h2 className="checkout-section-title">Delivery Details</h2>

          <div className="checkout-field">
            <label>Full Name</label>
            <input
              required
              value={form.name}
              onChange={set('name')}
              placeholder="John Smith"
            />
          </div>
          <div className="checkout-field">
            <label>Email Address</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={set('email')}
              placeholder="john@example.com"
            />
          </div>
          <div className="checkout-field">
            <label>Delivery Address</label>
            <textarea
              required
              rows={3}
              value={form.address}
              onChange={set('address')}
              placeholder="123 High Street, London, SW1A 1AA"
            />
          </div>

          <h2 className="checkout-section-title checkout-section-title--mt">Payment</h2>
          <div className="checkout-demo-notice">
            Demo mode — no real payment will be processed
          </div>

          <div className="checkout-field">
            <label>Card Number</label>
            <input
              required
              value={form.card}
              onChange={set('card')}
              placeholder="4242 4242 4242 4242"
              maxLength={19}
            />
          </div>
          <div className="checkout-field-row">
            <div className="checkout-field">
              <label>Expiry</label>
              <input
                required
                value={form.expiry}
                onChange={set('expiry')}
                placeholder="MM / YY"
                maxLength={7}
              />
            </div>
            <div className="checkout-field">
              <label>CVV</label>
              <input
                required
                value={form.cvv}
                onChange={set('cvv')}
                placeholder="123"
                maxLength={4}
              />
            </div>
          </div>

          <button type="submit" className="checkout-btn checkout-btn--submit">
            Place Order — £{totalPrice.toFixed(2)}
          </button>
        </form>

      </div>
    </div>
  );
};

export default CheckoutPage;
