import React from 'react';
import {   FaCommentAlt, FaHatCowboy, FaPaintBrush, FaRunning, FaTshirt } from 'react-icons/fa';
import { FaChildDress } from 'react-icons/fa6';

// Categories data
const categories = [
  { name: 'Tops', icon: <FaTshirt className="w-8 h-8" /> },
  { name: 'Bottoms', icon: <FaPaintBrush className="w-8 h-8" /> },
  { name: 'Dresses', icon: <FaChildDress className="w-8 h-8" /> },
  { name: 'Outerwear', icon: <FaCommentAlt className="w-8 h-8" /> },
  { name: 'Activewear', icon: <FaRunning className="w-8 h-8" /> },
  { name: 'Accessories', icon: <FaHatCowboy className="w-8 h-8" /> },
];

// Card for each garment category
const GarmentCategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {category.icon}
      <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
    </div>
  );
};

// Main GarmentPlanning component
const GarmentPlanning = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-6">
      {categories.map((category, index) => (
        <div key={index} className="transition duration-500 ease-in-out transform hover:-translate-y-1">
          <GarmentCategoryCard category={category} />
        </div>
      ))}
    </div>
  );
};

export default GarmentPlanning;
