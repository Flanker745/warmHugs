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

      <div className="text-lg mb-4">
  <h3 className="font-semibold">Organizational Structure:</h3>
  <h4 className="font-semibold">1. Board of Directors:</h4>
  <ul className="list-disc list-inside mb-4">
    <li>CEO/Founder: Ritika Rajpurohit</li>
    <li>CFO: Anisha Rajpurohit</li>
    <li>CMO: Sayali Kamkar</li>
  </ul>

  <h4 className="font-semibold">2. Departments:</h4>

  <h5 className="font-semibold">• Design & Product Development:</h5>
  <ul className="list-disc list-inside mb-4">
    <li>Head Designer: Ketki Kamble</li>
    <li>Product Manager: Shreya Shinde</li>
    <li>Design Team: Saburi Shinde</li>
  </ul>

  <h5 className="font-semibold">• Manufacturing & Supply Chain:</h5>
  <ul className="list-disc list-inside mb-4">
    <li>Production Manager: Shreya Shinde</li>
    <li>Sourcing Manager: Sayali Kamkar</li>
    <li>Quality Control Team: Harshali Rathod, Priya Sharma, Tanvi Surve</li>
  </ul>

  <h5 className="font-semibold">• Marketing & Sales:</h5>
  <ul className="list-disc list-inside mb-4">
    <li>Marketing Manager: Princy Kumar</li>
    <li>Sales Manager: Rajshree Sontanke</li>
    <li>Social Media Team: Vaibhavi Nashikkar</li>
  </ul>

  <h5 className="font-semibold">• Retail Operations:</h5>
  <ul className="list-disc list-inside mb-4">
    <li>Store Manager: Diljit Khurana</li>
    <li>Customer Service Team: Tony Pende and Saniya Thonde</li>
  </ul>
</div>

    </div>
  );
};

export default AboutUs;
