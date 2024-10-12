// Importing images from assets
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
    name: 'Denim Jacket',
    sizes: ['S', 'M', 'L'],
    price: 120,
    discount: 15,
    images: [jacket1, jacket2, jacket3, jacket4],
    description: 'A classic denim jacket for a rugged yet stylish look.',
    rating: 4.7,
    reviews: ['Great fit', 'Durable and fashionable', 'Nice design'],
  },
  {
    id: 4,
    name: 'Formal Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 75,
    discount: 12,
    images: [shirt1, shirt2, shirt3, shirt4],
    description: 'A formal shirt ideal for work or special occasions.',
    rating: 4.4,
    reviews: ['Looks professional', 'Good material', 'Fits well'],
  },
  {
    id: 5,
    name: 'Chinos',
    sizes: ['M', 'L', 'XL'],
    price: 90,
    discount: 18,
    images: [shirt1, shirt2, shirt3, shirt4],
    description: 'Comfortable chinos perfect for casual and semi-formal wear.',
    rating: 4.3,
    reviews: ['Comfortable', 'Stylish and sleek', 'Great for casual events'],
  },
  {
    id: 6,
    name: 'Winter Coat',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 150,
    discount: 25,
    images: [jacket1, jacket2, jacket3, jacket4],
    description: 'Warm winter coat for extreme cold conditions.',
    rating: 4.8,
    reviews: ['Very warm', 'Perfect for winter', 'Nice and comfortable'],
  },
  {
    id: 7,
    name: 'Flannel Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 55,
    discount: 10,
    images: [shirt1, shirt2, shirt3, shirt4],
    description: 'Soft flannel shirt for a relaxed, casual look.',
    rating: 4.6,
    reviews: ['Cozy', 'Great for layering', 'Nice and soft'],
  },
  {
    id: 8,
    name: 'Leather Jacket',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 200,
    discount: 30,
    images: [jacket1, jacket2, jacket3, jacket4],
    description: 'Premium leather jacket for a bold, stylish look.',
    rating: 4.9,
    reviews: ['Amazing quality', 'Perfect fit', 'Super stylish'],
  },
  {
    id: 9,
    name: 'Slim Fit Jeans',
    sizes: ['M', 'L', 'XL'],
    price: 80,
    discount: 15,
    images: [shirt1, shirt2, shirt3, shirt4],
    description: 'Slim fit jeans that complement any casual outfit.',
    rating: 4.5,
    reviews: ['Good fit', 'Looks great', 'High quality material'],
  },
  {
    id: 10,
    name: 'Graphic T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 40,
    discount: 5,
    images: [shirt1, shirt2, shirt3, shirt4],
    description: 'Trendy graphic t-shirt with bold designs.',
    rating: 4.2,
    reviews: ['Cool design', 'Comfortable', 'Eye-catching print'],
  },
  {
    id: 11,
    name: 'Bomber Jacket',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 130,
    discount: 20,
    images: [shirt1, shirt2, shirt3, shirt4],
    description: 'Stylish bomber jacket for an edgy look.',
    rating: 4.6,
    reviews: ['Great style', 'Very comfortable', 'Durable material'],
  },
  {
    id: 12,
    name: 'Cargo Pants',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 70,
    discount: 10,
    images: [shirt1, shirt2, shirt3, shirt4],
    description: 'Versatile cargo pants with multiple pockets.',
    rating: 4.4,
    reviews: ['Very functional', 'Comfortable fit', 'Perfect for outdoor use'],
  },
];
