import React from 'react';
import { products } from './data';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));

  return (
    <div className="product-detail p-8">
      <div className="flex flex-wrap justify-between">
        {/* Product Images */}
        <div className="product-images w-full md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-96 object-cover mb-4"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-24 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <p className="text-yellow-500 my-2">Rating: {product.rating} ⭐</p>
          <div className="text-lg mt-1">
            <span className="line-through text-gray-500">${product.price}</span>{' '}
            <span className="font-bold text-red-600">
              ${(product.price - (product.price * product.discount) / 100).toFixed(2)}
            </span>
          </div>
          <p className="mt-4">{product.description}</p>

          {/* Sizes */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Available Sizes:</h4>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="border border-gray-400 px-4 py-1 rounded-lg"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart and Buy Now */}
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-4">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
              Buy Now
            </button>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold">Reviews:</h4>
            <ul className="mt-2">
              {product.reviews.map((review, index) => (
                <li key={index} className="text-gray-600 mt-1">
                  - {review}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
