import React from 'react';
import { products } from './data'; // Importing product data
import { useNavigate, useOutletContext } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();
  const { searchQuery } = useOutletContext(); // Get searchQuery from context

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to product detail page
  };

  // Filter products based on searchQuery
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-page">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleProductClick(product.id)}
        >
          <img src={product.images[0]} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Rating: {product.rating} ⭐</p>
          <div className="price">
            <span className="line-through">${product.price}</span>{' '}
            <span className="bold">
              ${(product.price - (product.price * product.discount) / 100).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
