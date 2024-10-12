import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-lg mb-4 text-center">
        We're here to help! If you have any questions or need assistance, please reach out to us through the following channels:
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">Customer Support</h2>
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center mb-2">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          <span className="text-lg">+91 20 1234 5678</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="text-lg">Email: <a href="mailto:info@warmhug.in" className="text-blue-500">info@warmhug.in</a></span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">Visit Us</h2>
      <div className="flex items-center justify-center mb-8">
        <FaMapMarkerAlt className="text-blue-500 mr-2" />
        <span className="text-lg">Headquarters: Pune, Maharashtra, India</span>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">Follow Us</h2>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://instagram.com/warmhugs" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-blue-500 hover:text-blue-600" />
        </a>
        <a href="https://facebook.com/warmhugs" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-blue-500 hover:text-blue-600" />
        </a>
        <a href="https://twitter.com/warmhugs" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl text-blue-500 hover:text-blue-600" />
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">Feedback</h2>
      <p className="text-lg mb-4 text-center">We value your feedback! Please let us know your thoughts or suggestions to help us improve.</p>
      <form>
        <textarea
          className="border p-2 w-full h-24"
          placeholder="Your feedback..."
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
