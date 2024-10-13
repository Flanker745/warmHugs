import React from "react";
import { products } from "./data"; // Importing product data
import { useNavigate, useOutletContext } from "react-router-dom";
import Hero from "./Components/Hero";

const ProductPage = () => {
  const navigate = useNavigate();
  const { searchQuery } = useOutletContext(); // Get searchQuery from context

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to product detail page
  };

  // Filter products based on searchQuery
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Hero />
      <div className="bg-gray-100 py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white relative rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-[500px] object-cover border-b"
              />
              <div className="p-4 absolute bottom-0 w-full bg-gray-800 bg-opacity-80 text-white">
                <h3 className="text-xl font-semibold text-center mb-2">
                  {product.name}
                </h3>
                <p className="text-yellow-500 text-center">
                  Rating: {product.rating} ⭐
                </p>
                <div className="text-center mt-3">
                  <span className="line-through text-gray-500">
                    ₹{product.price}
                  </span>{" "}
                  <span className="font-bold text-red-600">
                    ₹
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
