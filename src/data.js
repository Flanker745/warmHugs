// Importing images from assets
import top1 from './assets/2.jpeg';
import top2 from './assets/3.jpeg';
import suit1 from "./assets/site1.jpeg"
import suit2 from "./assets/site2.jpeg"

import suit3 from "./assets/site3.jpeg"

import gag1 from "./assets/gag1.jpeg"

import gag2 from "./assets/gag2.jpeg"

import gag3 from "./assets/gag3.jpeg"
import q1 from "./assets/q1.jpeg"
import q2 from "./assets/q2.jpeg"
import q3 from "./assets/q3.jpeg"

import w1 from "./assets/w1.jpeg"
import w2 from "./assets/w2.jpeg"
import w3 from "./assets/w3.jpeg"

import e1 from "./assets/e1.jpeg"
import e2 from "./assets/e2.jpeg"
import e3 from "./assets/e3.jpeg"

import r1 from "./assets/r1.jpeg"
import r2 from "./assets/r2.jpeg"
import r3 from "./assets/r3.jpeg"

import t1 from "./assets/t1.jpeg"
import t2 from "./assets/t2.jpeg"
import t3 from "./assets/t3.jpeg"

import a1 from "./assets/a1.jpeg"
import a2 from "./assets/a2.jpeg"
import a3 from "./assets/a3.jpeg"


import z1 from "./assets/z1.jpeg"
import z2 from "./assets/z2.jpeg"
import z3 from "./assets/z3.jpeg"

import jacket1 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';
import jacket2 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';
import jacket3 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';
import jacket4 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';
import shirt1 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';
import shirt2 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';
import shirt3 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';
import shirt4 from './assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg';



// Product array with images from assets
export const products = [
  {
    id: 3,
    name: 'Women Fit',
    sizes: ['S', 'M', 'L'],
    price: 120,
    discount: 15,
    images: [suit1, suit2, suit3],
    description: 'Women Fit and Flare Yellow, White, Green Dress',
    rating: 4.7,
    reviews: ['Great fit', 'Durable and fashionable', 'Nice design'],
  },
  {
    id: 4,
    name: 'Girls Casual Lycra Blend Top',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 75,
    discount: 12,
    images: [top1, top2, top1, top2,],
    description: 'Girls Casual Lycra Blend Top  (Purple, Pack of 1)',
    rating: 4.4,
    reviews: ['Looks professional', 'Good material', 'Fits well'],
  },
  {
    id: 5,
    name: 'Women A-line Dark',
    sizes: ['M', 'L', 'XL'],
    price: 90,
    discount: 18,
    images: [gag1, gag2, gag3, ],
    description: 'Women A-line Dark Blue, Gold, Blue Dress',
    rating: 4.3,
    reviews: ['Comfortable', 'Stylish and sleek', 'Great for casual events'],
  },
  {
    id: 6,
    name: 'Selvia Top Pant Co-ords Set',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 150,
    discount: 25,
    images: [z1, z2, z3, ],
    description: 'Selvia Top Pant Co-ords Set',
    rating: 4.8,
    reviews: ['Very warm', 'Perfect for winter', 'Nice and comfortable'],
  },
  {
    id: 7,
    name: 'Flannel Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 55,
    discount: 10,
    images: [q1, q2, q3, ],
    description: 'Soft flannel shirt for a relaxed, casual look.',
    rating: 4.6,
    reviews: ['Cozy', 'Great for layering', 'Nice and soft'],
  },
  {
    id: 8,
    name: 'Women Bodycon',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 200,
    discount: 30,
    images: [w1, w2, w3, ],
    description: 'Women Bodycon Red Dress',
    rating: 4.9,
    reviews: ['Amazing quality', 'Perfect fit', 'Super stylish'],
  },
  {
    id: 9,
    name: 'Bodycon Black ',
    sizes: ['M', 'L', 'XL'],
    price: 80,
    discount: 15,
    images: [e1, e2, e3, ],
    description: 'Women Bodycon Black Dress',
    rating: 4.5,
    reviews: ['Good fit', 'Looks great', 'High quality material'],
  },
  {
    id: 10,
    name: 'Women A-line Yellow Dress',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 40,
    discount: 5,
    images: [r1, r2, r3],
    description: 'Women A-line Yellow Dress',
    rating: 4.2,
    reviews: ['Cool design', 'Comfortable', 'Eye-catching print'],
  },
  {
    id: 11,
    name: 'Women A-line White Dress',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 130,
    discount: 20,
    images: [t1, t2, t3, ],
    description: 'Women A-line White Dress',
    rating: 4.6,
    reviews: ['Great style', 'Very comfortable', 'Durable material'],
  },
  {
    id: 12,
    name: 'Women Bodycon Multicolor Dress',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 70,
    discount: 10,
    images: [a1, a2, a3, ],
    description: 'Women Bodycon Multicolor Dress',
    rating: 4.4,
    reviews: ['Very functional', 'Comfortable fit', 'Perfect for outdoor use'],
  },
];
