import React from 'react';
import { products } from './data'; // Importing product data
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to product detail page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-white">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handleProductClick(product.id)}
        >
          {/* Product Image with Hover Zoom */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"
          />

          <div className="p-4">
            {/* Product Name */}
            <h3 className="text-xl font-semibold text-center text-gray-900">{product.name}</h3>

            {/* Rating */}
            <p className="text-center text-yellow-400 my-2">Rating: {product.rating} ⭐</p>

            {/* Price */}
            <div className="flex justify-center items-center space-x-2 text-lg mt-2">
              <span className="line-through text-gray-500">${product.price}</span>
              <span className="text-red-500 font-bold">
                ${(product.price - (product.price * product.discount) / 100).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
