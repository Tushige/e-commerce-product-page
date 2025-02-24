let nextId = 0;
const createBlueberry = () => ({
  id: nextId++,
  imageSrc: 'images/sprout/blueberry.webp',
  title: 'Blueberry Delight',
  subtitle: '+ prebiotic fiber',
  rating: 5,
  price: 799,
  backdropImages: {
    left: 'images/seed/blueberry-accent-graphic-5.webp',
    right: 'images/seed/blueberry-accent-graphic-6.webp',
    bottom: 'images/seed/banana-accent-graphic-2.webp',
  },
  styles: {
    backgroundColor: 'oklch(0.75 0.183 55.934)',
  },
});
const createStrawberry = () => ({
  id: nextId++,
  imageSrc: 'images/sprout/strawberry.webp',
  title: 'Strawberry Burst',
  subtitle: '+ antioxidant',
  rating: 5,
  price: 899,
  backdropImages: {
    left: 'images/seed/strawberry-pineapple-accent-graphics-2.webp',
    right: 'images/seed/strawberry-pineapple-accent-graphics-3.webp',
    bottom: 'images/seed/banana-accent-graphic-2.webp',
  },
  styles: {
    backgroundColor: 'oklch(0.768 0.233 130.85)',
  },
});
const createMango = () => ({
  id: nextId++,
  imageSrc: 'images/sprout/mango.webp',
  title: 'Mango Breeze',
  subtitle: '+ immune support',
  rating: 5,
  price: 999,
  backdropImages: {
    left: 'images/seed/mango-accent-graphic-2.webp',
    right: 'images/seed/strawberry-pineapple-accent-graphics-1.webp',
    bottom: 'images/seed/banana-accent-graphic-2.webp',
  },
  styles: {
    backgroundColor: 'oklch(0.707 0.165 254.624)',
  },
});

export const productList = [
  createBlueberry(),
  createStrawberry(),
  createMango(),
  createBlueberry(),
  createStrawberry(),
  createMango(),
  createBlueberry(),
  createStrawberry(),
  createMango(),
];
