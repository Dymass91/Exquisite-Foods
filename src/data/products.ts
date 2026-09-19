import img250 from '../images/Extravirginoil 250ml.jpg';
import imgSmall from '../images/Extravirginoilsmall.jpg';
import img750 from '../images/Organic500ml.jpeg';
import img5l from '../images/olej5l.jpg';
import imgMarmelada from '../images/jamon-jar.jpg';
import imgBottle99 from '../images/jamon-100ml.jpg';
import imgBottle250 from '../images/jamon-250ml.jpg';

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
  { id: 'jamon-mermelada', name: 'Iberian Ham Marmalade', size: '220 g', category: 'jamon', image: imgMarmelada,
    priceTiers: [{ min: 1, price: 5.5 }, { min: 15, price: 4.9 }] },
  { id: 'jamon-oil-100ml', name: 'Iberian Ham Extra Virgin Olive Oil', size: '100 ml', category: 'jamon', image: imgBottle99,
    priceTiers: [{ min: 1, price: 3.6 }, { min: 12, price: 3 }] },
  { id: 'jamon-gourmet-250ml', name: 'Iberian Ham Gourmet Bottle', size: '250 ml', category: 'jamon', image: imgBottle250,
    priceTiers: [{ min: 1, price: 7 }, { min: 12, price: 6.5 }] },
];

export const productById = (id: string) => products.find((p) => p.id === id)!;

export const isLarge = (p: Product) => p.size.includes('Litre');
export const unitLabel = (p: Product) => (p.category === 'jamon' ? 'each' : isLarge(p) ? 'per container' : 'per bottle');

export interface CategoryCopy {
  label: string;
  path: string;
  origin: string;
  tasting: string;
  pairing: string;
  blurb: string;
  storage: string;
}

export const categoryCopy: Record<Category, CategoryCopy> = {
  eco: {
    label: 'Organic Olive Oil',
    path: '/organic',
    origin: 'Sierra de Cádiz, Andalucía',
    tasting: 'Creamy and green, with ripe fruit, a soft bitterness and a warm, peppery finish.',
    pairing: 'Bread and tomato, roasted vegetables, soft cheeses, grilled fish.',
    blurb: 'Certified organic extra virgin olive oil from hand-picked Lechín and Manzanilla olives, grown without synthetic fertiliser or herbicides and extracted by mechanical means only.',
    storage: 'Keep in a cool, dark cupboard, away from direct heat and light. Best enjoyed within a year of opening.',
  },
  ext: {
    label: 'Extra Virgin Olive Oil',
    path: '/extra-virgin',
    origin: 'Andalucía, Spain',
    tasting: 'Fresh-cut grass and green almond, a gentle bitterness and a clean peppery finish.',
    pairing: 'Salads, tomato toast, slow-roasted vegetables, fish and everyday cooking.',
    blurb: 'A generous, everyday extra virgin olive oil from Andalusian groves — cold extracted, unfiltered in character and made to be used freely in the kitchen.',
    storage: 'Keep in a cool, dark cupboard, away from direct heat and light. Reseal after use.',
  },
  jamon: {
    label: 'Oil & Jamón',
    path: '/oil-jamon',
    origin: 'Made in Mairena del Aljarafe, Seville',
    tasting: 'The savoury, nutty depth of Iberian ham carried on a smooth extra virgin olive oil.',
    pairing: 'Fried eggs, potatoes, tomato on toast, pasta, grilled vegetables and cheese.',
    blurb: 'Extra virgin olive oil flavoured with Iberian ham — a single bottle that seasons, dresses and finishes.',
    storage: 'Store in a cool place away from light. Refrigerate the cream after opening.',
  },
};

export const productsIn = (c: Category) => products.filter((p) => p.category === c);
