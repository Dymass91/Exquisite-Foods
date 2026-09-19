import img250 from '../images/Extravirginoil 250ml.jpg';
import imgSmall from '../images/Extravirginoilsmall.jpg';
import img750 from '../images/Organic500ml.jpeg';
import img5l from '../images/olej5l.jpg';
import imgMarmelada from '../Jamon Files/Imagen Crema Dulce  Mermelada 100 gr.jpg';
import imgBottle99 from '../Jamon Files/Imagen botella 99 ml.jpg';
import imgBottle250 from '../Jamon Files/Botella 250 ml. condimento oiljamon.jpg';

export type Category = 'eco' | 'ext' | 'jamon';
export interface PriceTier { min: number; price: number }
export interface Product {
  id: string;
  name: string;
  size: string;
  category: Category;
  image: string;
  priceTiers: PriceTier[];
}

export const getUnitPrice = (tiers: PriceTier[], qty: number) =>
  tiers.reduce((p, t) => (qty >= t.min ? t.price : p), tiers[0].price);

export const nextTier = (tiers: PriceTier[], qty: number) =>
  tiers.find((t) => t.min > qty);

export const gbp = (n: number) => `£${n.toFixed(2)}`;

const N = 'Organic Extra Virgin Olive Oil';
const E = 'Extra Virgin Olive Oil';

export const products: Product[] = [
  { id: 'organic-250ml', name: N, size: '250 ml', category: 'eco', image: img250,
    priceTiers: [{ min: 1, price: 4 }, { min: 15, price: 3.7 }, { min: 100, price: 3.5 }, { min: 200, price: 3 }, { min: 500, price: 2.5 }] },
  { id: 'organic-500ml', name: N, size: '500 ml', category: 'eco', image: imgSmall,
    priceTiers: [{ min: 1, price: 6 }, { min: 15, price: 5.5 }, { min: 100, price: 5 }, { min: 200, price: 4.5 }, { min: 350, price: 4 }, { min: 500, price: 3.5 }] },
  { id: 'organic-750ml', name: N, size: '750 ml', category: 'eco', image: img750,
    priceTiers: [{ min: 1, price: 7 }, { min: 15, price: 6.5 }, { min: 100, price: 6 }, { min: 200, price: 5.5 }, { min: 350, price: 5 }, { min: 500, price: 4.5 }] },
  { id: 'organic-5l', name: N, size: '5 Litres', category: 'eco', image: img5l,
    priceTiers: [{ min: 1, price: 35 }, { min: 4, price: 33 }, { min: 10, price: 30 }, { min: 20, price: 27 }, { min: 50, price: 25 }, { min: 100, price: 23 }] },
  { id: 'extra-virgin-500ml', name: E, size: '500 ml', category: 'ext', image: imgSmall,
    priceTiers: [{ min: 1, price: 5 }, { min: 15, price: 4.5 }, { min: 100, price: 4 }, { min: 200, price: 3.5 }, { min: 350, price: 3 }, { min: 500, price: 2.7 }] },
  { id: 'extra-virgin-750ml', name: E, size: '750 ml', category: 'ext', image: img750,
    priceTiers: [{ min: 1, price: 6 }, { min: 15, price: 5.5 }, { min: 100, price: 5 }, { min: 200, price: 4.5 }, { min: 350, price: 4 }, { min: 500, price: 3.7 }] },
  { id: 'extra-virgin-5l', name: E, size: '5 Litres', category: 'ext', image: img5l,
    priceTiers: [{ min: 1, price: 30 }, { min: 4, price: 28 }, { min: 10, price: 25 }, { min: 20, price: 23 }, { min: 50, price: 21 }, { min: 100, price: 19 }] },
  { id: 'jamon-mermelada', name: 'Iberian Ham Mermelade', size: '220 g', category: 'jamon', image: imgMarmelada,
    priceTiers: [{ min: 1, price: 5.5 }, { min: 15, price: 4.9 }] },
  { id: 'jamon-oil-100ml', name: 'Iberian Ham Extra Virgin Olive Oil', size: '100 ml', category: 'jamon', image: imgBottle99,
    priceTiers: [{ min: 1, price: 3.6 }, { min: 12, price: 3 }] },
  { id: 'jamon-gourmet-250ml', name: 'Iberian Ham Gourmet Bottle', size: '250 ml', category: 'jamon', image: imgBottle250,
    priceTiers: [{ min: 1, price: 7 }, { min: 12, price: 6.5 }] },
];

export const productById = (id: string) => products.find((p) => p.id === id)!;
