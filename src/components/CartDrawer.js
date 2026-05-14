import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faMinus, faTrash, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import { getUnitPrice } from '../data/products';
import '../styles/CartDrawer.css';

const CartDrawer = () => {
  const { cartItems, isOpen, totalPrice, closeCart, removeFromCart, updateQuantity } = useCart();

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={closeCart} />}
      <div className={`cart-drawer${isOpen ? ' cart-drawer--open' : ''}`}>

        <div className="cart-drawer__header">
          <span className="cart-drawer__title">Your Cart</span>
          <button className="cart-drawer__close" onClick={closeCart} aria-label="Close cart">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-drawer__empty">
            <FontAwesomeIcon icon={faShoppingBasket} className="cart-drawer__empty-icon" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cartItems.map(({ product, quantity }) => {
                const unitPrice = getUnitPrice(product.priceTiers, quantity);
                const lineTotal = (unitPrice * quantity).toFixed(2);
                return (
                  <div className="cart-item" key={product.id}>
                    <img src={product.image} alt={product.name} className="cart-item__img" />
                    <div className="cart-item__info">
                      <p className="cart-item__name">{product.name}</p>
                      <p className="cart-item__size">{product.size}</p>
                      <p className="cart-item__unit-price">£{unitPrice.toFixed(2)} / unit</p>
                      <div className="cart-item__qty">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} aria-label="Decrease">
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} aria-label="Increase">
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className="cart-item__right">
                      <span className="cart-item__total">£{lineTotal}</span>
                      <button
                        className="cart-item__remove"
                        onClick={() => removeFromCart(product.id)}
                        aria-label="Remove item"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Total</span>
                <span>£{totalPrice.toFixed(2)}</span>
              </div>
              <p className="cart-drawer__vat">* All prices inclusive of VAT</p>
              <Link to="/checkout" className="cart-drawer__checkout" onClick={closeCart}>
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
