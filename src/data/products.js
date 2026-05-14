import img250 from '../images/Extravirginoil 250ml.jpg';
import imgSmall from '../images/Extravirginoilsmall.jpg';
import img750 from '../images/Organic500ml.jpeg';
import img5l from '../images/olej5l.jpg';
import imgMarmelada from '../Jamon Files/Imagen Crema Dulce  Mermelada 100 gr.jpg';
import imgBottle99 from '../Jamon Files/Imagen botella 99 ml.jpg';
import imgBottle250 from '../Jamon Files/Botella 250 ml. condimento oiljamon.jpg';

export function getUnitPrice(priceTiers, qty) {
  return priceTiers.reduce(
    (price, tier) => (qty >= tier.min ? tier.price : price),
    priceTiers[0].price
  );
}

export const products = [
  {
    id: 'organic-250ml',
    name: 'Organic Extra Virgin Olive Oil',
    size: '250 ml',
    category: 'eco',
    image: img250,
    priceTiers: [
      { min: 1,   price: 4.00 },
      { min: 15,  price: 3.70 },
      { min: 100, price: 3.50 },
      { min: 200, price: 3.00 },
      { min: 500, price: 2.50 },
    ],
  },
  {
    id: 'organic-500ml',
    name: 'Organic Extra Virgin Olive Oil',
    size: '500 ml',
    category: 'eco',
    image: imgSmall,
    priceTiers: [
      { min: 1,   price: 6.00 },
      { min: 15,  price: 5.50 },
      { min: 100, price: 5.00 },
      { min: 200, price: 4.50 },
      { min: 350, price: 4.00 },
      { min: 500, price: 3.50 },
    ],
  },
  {
    id: 'organic-750ml',
    name: 'Organic Extra Virgin Olive Oil',
    size: '750 ml',
    category: 'eco',
    image: img750,
    priceTiers: [
      { min: 1,   price: 7.00 },
      { min: 15,  price: 6.50 },
      { min: 100, price: 6.00 },
      { min: 200, price: 5.50 },
      { min: 350, price: 5.00 },
      { min: 500, price: 4.50 },
    ],
  },
  {
    id: 'organic-5l',
    name: 'Organic Extra Virgin Olive Oil',
    size: '5 Litres',
    category: 'eco',
    image: img5l,
    priceTiers: [
      { min: 1,   price: 35.00 },
      { min: 4,   price: 33.00 },
      { min: 10,  price: 30.00 },
      { min: 20,  price: 27.00 },
      { min: 50,  price: 25.00 },
      { min: 100, price: 23.00 },
    ],
  },
  {
    id: 'extra-virgin-500ml',
    name: 'Extra Virgin Olive Oil',
    size: '500 ml',
    category: 'ext',
    image: imgSmall,
    priceTiers: [
      { min: 1,   price: 5.00 },
      { min: 15,  price: 4.50 },
      { min: 100, price: 4.00 },
      { min: 200, price: 3.50 },
      { min: 350, price: 3.00 },
      { min: 500, price: 2.70 },
    ],
  },
  {
    id: 'extra-virgin-750ml',
    name: 'Extra Virgin Olive Oil',
    size: '750 ml',
    category: 'ext',
    image: img750,
    priceTiers: [
      { min: 1,   price: 6.00 },
      { min: 15,  price: 5.50 },
      { min: 100, price: 5.00 },
      { min: 200, price: 4.50 },
      { min: 350, price: 4.00 },
      { min: 500, price: 3.70 },
    ],
  },
  {
    id: 'extra-virgin-5l',
    name: 'Extra Virgin Olive Oil',
    size: '5 Litres',
    category: 'ext',
    image: img5l,
    priceTiers: [
      { min: 1,   price: 30.00 },
      { min: 4,   price: 28.00 },
      { min: 10,  price: 25.00 },
      { min: 20,  price: 23.00 },
      { min: 50,  price: 21.00 },
      { min: 100, price: 19.00 },
    ],
  },
  {
    id: 'jamon-mermelada',
    name: 'Iberian Ham Mermelade',
    size: '220 g',
    category: 'jamon',
    image: imgMarmelada,
    priceTiers: [
      { min: 1,  price: 5.50 },
      { min: 15, price: 4.90 },
    ],
  },
  {
    id: 'jamon-oil-100ml',
    name: 'Iberian Ham Extra Virgin Olive Oil',
    size: '100 ml',
    category: 'jamon',
    image: imgBottle99,
    priceTiers: [
      { min: 1,  price: 3.60 },
      { min: 12, price: 3.00 },
    ],
  },
  {
    id: 'jamon-gourmet-250ml',
    name: 'Iberian Ham Gourmet Bottle',
    size: '250 ml',
    category: 'jamon',
    image: imgBottle250,
    priceTiers: [
      { min: 1,  price: 7.00 },
      { min: 12, price: 6.50 },
    ],
  },
];
