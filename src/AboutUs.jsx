import React from 'react';
import { FaFlag, FaMoneyBillWave, FaHeadset, FaShoppingCart, FaUsers, FaPalette, FaPhone } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>


      <div className="text-center mb-8">
\        <p className="text-lg mb-4">
          Warm Hugs aims to provide high-quality stylish clothing that makes every woman feel confident, elegant, and comfortable. We strive to build a community that values self-expression, sustainability, and inclusivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4 shadow-md">
          <FaMoneyBillWave className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Financial Projections</h3>
          <p><strong>Initial Investments:</strong> ₹10 lakhs</p>
          <p><strong>Revenue (Two Months):</strong> ₹2 lakhs</p>
        </div>

        <div className="border rounded-lg p-4 shadow-md">
          <FaShoppingCart className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Payment Options</h3>
          <ul className="list-disc list-inside">
            <li>Cash</li>
            <li>Card (Visa, Mastercard, Amex)</li>
            <li>Online payment (UPI, Net Banking)</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 shadow-md">
          <FaFlag className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Return Policy</h3>
          <ul className="list-disc list-inside">
            <li>30-day return/exchange policy</li>
            <li>Refund/exchange process within 7 working days</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 shadow-md">
          <FaHeadset className="text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl">Customer Support</h3>
          <p><strong>Phone:</strong> +91 20 1234 5678</p>
          <p><strong>Email:</strong> <a href="mailto:info@warmhug.in" className="text-blue-500">info@warmhug.in</a></p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">Organizational Structure</h2>
      <div className="text-lg mb-4">
        <h3 className="font-semibold">Board of Directors:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>CEO/Founder: Ritika Rajpurohit</li>
          <li>CFO: Anisha Rajpurohit</li>
          <li>CMO: Sayali Kamkar</li>
        </ul>
        <h3 className="font-semibold">Departments:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Design & Product Development</li>
          <li>Manufacturing & Supply Chain</li>
          <li>Marketing & Sales</li>
          <li>Retail Operations</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
