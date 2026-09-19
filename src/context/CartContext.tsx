import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react';
import { getUnitPrice, productById, type Product } from '../data/products';

interface Line { id: string; quantity: number }
interface State { items: Line[]; isOpen: boolean }
type Action =
  | { type: 'ADD'; id: string; quantity: number }
  | { type: 'SET'; id: string; quantity: number }
  | { type: 'REMOVE'; id: string }
  | { type: 'CLEAR' }
  | { type: 'OPEN' | 'CLOSE' };

const STORAGE = 'ef-cart-v2';
const load = (): Line[] => {
  try { return JSON.parse(localStorage.getItem(STORAGE) || '[]'); } catch { return []; }
};

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case 'ADD': {
      const has = s.items.some((i) => i.id === a.id);
      return {
        isOpen: true,
        items: has
          ? s.items.map((i) => (i.id === a.id ? { ...i, quantity: i.quantity + a.quantity } : i))
          : [...s.items, { id: a.id, quantity: a.quantity }],
      };
    }
    case 'SET':
      return a.quantity <= 0
        ? { ...s, items: s.items.filter((i) => i.id !== a.id) }
        : { ...s, items: s.items.map((i) => (i.id === a.id ? { ...i, quantity: a.quantity } : i)) };
    case 'REMOVE': return { ...s, items: s.items.filter((i) => i.id !== a.id) };
    case 'CLEAR': return { ...s, items: [] };
    case 'OPEN': return { ...s, isOpen: true };
    case 'CLOSE': return { ...s, isOpen: false };
  }
}

export interface CartLine { product: Product; quantity: number; unit: number; total: number }
interface Ctx {
  lines: CartLine[]; isOpen: boolean; totalItems: number; subtotal: number;
  add: (id: string, quantity?: number) => void;
  setQty: (id: string, quantity: number) => void;
  remove: (id: string) => void; clear: () => void; open: () => void; close: () => void;
}
const CartContext = createContext<Ctx>(null!);

export function CartProvider({ children }: { children: ReactNode }) {
  const [s, d] = useReducer(reducer, undefined, () => ({ items: load(), isOpen: false }));
  useEffect(() => {
    try { localStorage.setItem(STORAGE, JSON.stringify(s.items)); } catch { /* storage unavailable */ }
  }, [s.items]);

  const value = useMemo<Ctx>(() => {
    const lines = s.items.map(({ id, quantity }) => {
      const product = productById(id);
      const unit = getUnitPrice(product.priceTiers, quantity);
      return { product, quantity, unit, total: unit * quantity };
    });
    return {
      lines, isOpen: s.isOpen,
      totalItems: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.total, 0),
      add: (id, quantity = 1) => d({ type: 'ADD', id, quantity }),
      setQty: (id, quantity) => d({ type: 'SET', id, quantity }),
      remove: (id) => d({ type: 'REMOVE', id }),
      clear: () => d({ type: 'CLEAR' }),
      open: () => d({ type: 'OPEN' }),
      close: () => d({ type: 'CLOSE' }),
    };
  }, [s]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
