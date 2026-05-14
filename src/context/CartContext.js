import React, { createContext, useContext, useReducer } from 'react';
import { getUnitPrice } from '../data/products';

const CartContext = createContext();

const initialState = { items: [], isOpen: false };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(i => i.product.id === action.product.id);
      if (exists) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map(i =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        isOpen: true,
        items: [...state.items, { product: action.product, quantity: 1 }],
      };
    }
    case 'UPDATE_QTY': {
      if (action.quantity <= 0) {
        return { ...state, items: state.items.filter(i => i.product.id !== action.id) };
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.product.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.product.id !== action.id) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => {
    const price = getUnitPrice(i.product.priceTiers, i.quantity);
    return sum + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      cartItems: state.items,
      isOpen: state.isOpen,
      totalItems,
      totalPrice,
      addToCart:      (product)         => dispatch({ type: 'ADD_ITEM',    product }),
      removeFromCart: (id)              => dispatch({ type: 'REMOVE_ITEM', id }),
      updateQuantity: (id, quantity)    => dispatch({ type: 'UPDATE_QTY',  id, quantity }),
      clearCart:      ()                => dispatch({ type: 'CLEAR_CART' }),
      openCart:       ()                => dispatch({ type: 'OPEN_CART' }),
      closeCart:      ()                => dispatch({ type: 'CLOSE_CART' }),
      toggleCart:     ()                => dispatch({ type: 'TOGGLE_CART' }),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
