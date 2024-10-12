import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa'; // React Icons for truck animation
import { FaInfoCircle } from 'react-icons/fa'; // Optional info icon

const Checkout = () => {
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState(''); // Optional address
    const [mobile1, setMobile1] = useState('');
    const [mobile2, setMobile2] = useState(''); // Optional mobile number
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/confirmation'); // Redirect to confirmation page after loading
        }, 2000); // Simulate a loading time
    };

    return (
        <div className="checkout p-8 max-w-md mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Checkout</h2>
            <div className="mb-4">
                <label htmlFor="address" className="block text-lg mb-2">Enter Your Address:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Street Name, Colony, Nearby Landmark"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="address2" className="block text-lg mb-2">Optional Address:</label>
                <input
                    type="text"
                    id="address2"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Apartment, Floor, etc."
                />
            </div>

            <div className="mb-4">
                <label htmlFor="mobile1" className="block text-lg mb-2">Mobile Number (Required):</label>
                <input
                    type="tel"
                    id="mobile1"
                    value={mobile1}
                    onChange={(e) => setMobile1(e.target.value)}
                    className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. +91 9876543210"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="mobile2" className="block text-lg mb-2">Optional Mobile Number:</label>
                <input
                    type="tel"
                    id="mobile2"
                    value={mobile2}
                    onChange={(e) => setMobile2(e.target.value)}
                    className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. +91 9876543211"
                />
            </div>

            <div className="flex items-center mb-4">
                <FaInfoCircle className="text-blue-500 mr-2" />
                <span className="text-gray-600 text-sm">Make sure to provide accurate details for timely delivery.</span>
            </div>

            <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full"
                onClick={handleCheckout}
                disabled={!address || !mobile1} // Disable button if address or mobile number is empty
            >
                {loading ? 'Loading...' : 'Checkout'}
            </button>

            {loading && (
                <div className="mt-4 text-center">
                    <FaTruck className="animate-bounce text-blue-600 text-6xl mx-auto" />
                    <p className="text-lg mt-2">Your order is on the way!</p>
                </div>
            )}
        </div>
    );
};

export default Checkout;
