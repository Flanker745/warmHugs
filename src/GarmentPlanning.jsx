import React from 'react';
import { FaBoxOpen, FaCheckCircle, FaClipboardList, FaFolder, FaRegLightbulb, FaTshirt, FaWarehouse } from 'react-icons/fa';

const GarmentPlanning = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Organize Your Garment System</h1>
      <div className="text-center mb-8">
        <p className="text-lg mb-4">
          Creating an organized garment system can streamline your wardrobe, make getting dressed easier, and help you manage your clothing more effectively.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Step 1: Assess Your Wardrobe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4 shadow-md">
          <FaClipboardList className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Inventory</h3>
          <p>* Take stock of all your garments. Lay everything out and categorize them.</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <FaCheckCircle className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Declutter</h3>
          <p>* Identify items you no longer wear or need.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Step 2: Categorize Your Garments</h2>
      <div className="border rounded-lg p-4 shadow-md mb-8">
        <ul className="list-disc list-inside">
          <li><strong>Tops:</strong> T-shirts, Blouses, Sweaters, Tank tops</li>
          <li><strong>Bottoms:</strong> Pants, Jeans, Skirts, Shorts</li>
          <li><strong>Dresses:</strong> Casual, Formal, Seasonal</li>
          <li><strong>Outerwear:</strong> Coats, Jackets, Cardigans</li>
          <li><strong>Activewear</strong></li>
          <li><strong>Underwear and Loungewear</strong></li>
          <li><strong>Accessories:</strong> Scarves, Belts, Hats, Bags</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Step 3: Choose Storage Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4 shadow-md">
          <FaTshirt className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Hangers</h3>
          <p>* Use sturdy, non-slip hangers for tops and dresses.</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <FaBoxOpen className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Drawers</h3>
          <p>* Reserve drawers for items like underwear and loungewear.</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <FaWarehouse className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Shelves</h3>
          <p>* Use shelves for folded items like sweaters and jeans.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Step 4: Implement an Organization System</h2>
      <div className="border rounded-lg p-4 shadow-md mb-8">
        <ul className="list-disc list-inside">
          <li>* By Category: Keep all garments of the same category together.</li>
          <li>* By Color: Arrange items by color for a visually appealing look.</li>
          <li>* By Season: Store seasonal items separately.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Step 5: Optimize Your Space</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4 shadow-md">
          <FaRegLightbulb className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Vertical Space</h3>
          <p>* Use cascading hangers to maximize space.</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <FaFolder className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Drawer Space</h3>
          <p>* Roll clothes instead of folding them to save space.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Step 6: Maintain Your Organization</h2>
      <div className="border rounded-lg p-4 shadow-md mb-8">
        <ul className="list-disc list-inside">
          <li>* Regular Decluttering: Set a schedule to reassess your wardrobe.</li>
          <li>* One-In-One-Out Rule: For every new item, donate or sell one.</li>
          <li>* Seasonal Swap: Store out-of-season clothing in bins.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Step 7: Create a Visual Reference</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4 shadow-md">
          <FaCheckCircle className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Outfit Ideas</h3>
          <p>* Take photos of outfit combinations for quick reference.</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <FaCheckCircle className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Labels</h3>
          <p>* Label bins or shelves for easy identification.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Additional Tips</h2>
      <div className="border rounded-lg p-4 shadow-md mb-8">
        <ul className="list-disc list-inside">
          <li>* Invest in quality storage solutions.</li>
          <li>* Utilize natural light for easy garment selection.</li>
          <li>* Consider accessibility when organizing your closet.</li>
        </ul>
      </div>
    </div>
  );
};

export default GarmentPlanning;
